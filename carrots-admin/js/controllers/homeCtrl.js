angular.module('myApp')
    .controller('homeCtrl', function ($rootScope, $state, $cookies, requestSvc, $scope) {
        let vm = this;
        vm.userName = $cookies.get('userName');
        vm.role = $cookies.get('role');
        vm.roleId = $cookies.get('roleId');
        //获取登录角色模块权限
        requestSvc.getOneRole(vm.roleId).then(function (res) {
            if (res.data.code === 0) {
                //取出权限模块id以及操作权限
                vm.permissionsSet = res.data.data.role.permissionsSet;
                //取出权限模块id
                vm.ids = [];
                for (key in vm.permissionsSet) {
                    vm.ids.push(Number(key))
                }
                //根据权限模块id请求模块内容
                requestSvc.getMultiModule({ids: vm.ids}).then(function (res) {
                    if (res.data.code === 0) {
                        vm.moduleList = res.data.data.moduleList;
                        //开始构造侧边栏常量
                        vm.listFather = [];
                        angular.forEach(vm.moduleList, function (x) {
                            if (x.parentID === 4399) {
                                x.select = false;
                                x.highlightReset = false;
                                x.listChild = [];
                                angular.forEach(vm.moduleList, function (y) {
                                    if (y.parentID === x.id) {
                                        y.select = false;
                                        if (y.id !== 288) {//288是密码修改，没有操作
                                            y.operationPower = [
                                                {name: '新增', EnglishName: 'create', select: false},
                                                {name: '编辑', EnglishName: 'update', select: false},
                                                {name: '删除', EnglishName: 'delete', select: false}
                                            ];
                                            //根据角色的permissionsSet赋予子模块新增编辑删除的操作权限
                                            angular.forEach(vm.permissionsSet[y.id], function (item) {
                                                angular.forEach(y.operationPower, function (z) {
                                                    if (item === z.EnglishName) {
                                                        z.select = true;
                                                    }
                                                })
                                            });
                                        }
                                        else {
                                            y.operationPower = [];
                                        }
                                        x.listChild.push(y)
                                    }
                                });
                                vm.listFather.push(x);
                            }
                        });
                        //实现刷新侧边栏状态保持，写在这里是因为考虑到请求异步的影响
                        vm.listFather = JSON.parse(sessionStorage.getItem('listFather')) || vm.listFather
                    }
                });
            }
        });
        //一级列表点击事件
        $scope.oneSelect = function () {
            if (!this.x.select) {
                angular.forEach(vm.listFather, function (x) {
                    x.select = false
                });
                this.x.select = true;
            }
            else {
                this.x.select = false
            }
        };
        //二级列表点击事件
        $scope.twoSelect = function () {
            angular.forEach(vm.listFather, function (x) {
                x.highlightReset = false;
                angular.forEach(x.listChild, function (y) {
                    y.select = false
                })
            });
            this.y.select = true;
            this.x.highlightReset = true;//设置对应的一级列表头失去高亮

            //存下此子模块的新增编辑删除操作权限
            sessionStorage.setItem('operationPower', JSON.stringify(this.y.operationPower));
            //将改变后的整个对象数组的状态保存到本地存储
            sessionStorage.setItem('listFather', JSON.stringify(vm.listFather));
            //处理从公司职位列表页到全部职位列表页之间的跳转问题
            if ($state.includes('home.job') && $state.params.companyId && this.y.id === 284) {
                angular.forEach($state.params, function (val, key, object) {
                    object[key] = undefined;
                });
                $state.go(this.y.url, $state.params, {reload: true})
            }
            else {
                $state.go(this.y.url)
            }
            //跳转页面需清空账户管理页的sessionStorage
            if ($state.includes('home.account') && this.y.id !== 286) {
                sessionStorage.removeItem('roleID');
                sessionStorage.removeItem('userName');
            }
        };
        //设置登出
        vm.loginOut = function () {
            requestSvc.loginOut().then(function (res) {
                if (res.data.code === 0) {
                    sessionStorage.clear();
                    angular.forEach($cookies.getAll(), function (val, key) {
                        $cookies.remove(key);
                    });
                    $state.go('login');
                } else {
                    $rootScope.alert(res.data.message);
                }
            });
        };
        //重置并回到欢迎页
        vm.reset = function () {
            angular.forEach(vm.listFather, function (x) {
                x.select = false;
                angular.forEach(x.listChild, function (y) {
                    y.select = false
                })
            });
            sessionStorage.removeItem('listFather');
            $state.go('home', {reload: true});
        }
    });