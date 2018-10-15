angular.module('myApp').controller('accountCtrl', function ($rootScope, $state, requestSvc, commonUtil) {
    let vm = this;
    //服务器返回的total随请求的size变化而变化，所以用size=999来获取准确的total，并请求全部用户id
    requestSvc.getAccountIds({size: 999}).then(function (res) {
        if (res.data.code === 0) {
            let data = res.data.data;
            vm.total = data.total;
            //获取全部用户数据，在搜索功能中需要使用
            requestSvc.getMultiAccount({ids: data.ids}).then(function (res) {
                if (res.data.code === 0) {
                    vm.allAccount = res.data.data.managerList;
                    //每次刷新如有搜索值则自动搜索，放在这里是因为请求异步会使vm.allAccount初始为空
                    if (vm.roleID || vm.userName) {
                        vm.search();
                    }
                }
            })
        }
    });
    vm.roleID = sessionStorage.getItem('roleID') || '';
    vm.userName = sessionStorage.getItem('userName') || '';
    //如果没有搜索值则正常请求数据渲染列表
    if (!vm.roleID && !vm.userName) {
        //根据$state.params获取用户id
        requestSvc.getAccountIds($state.params).then(function (res) {
            if (res.data.code === 0) {
                let data = res.data.data;
                //绑定分页参数
                // vm.total = data.total;
                vm.size = data.size;
                vm.page = data.page;
                //根据id获取用户数据
                requestSvc.getMultiAccount({ids: data.ids}).then(function (res) {
                    if (res.data.code === 0) {
                        vm.managerList = res.data.data.managerList;
                    }
                })
            }
        });
    }
    //删除
    vm.delete = function (id) {
        $rootScope.confirm('你确定删除该用户账号吗？', function () {
            requestSvc.deleteAccount(id).then(
                commonUtil.singleState1('删除', $state.current),
                commonUtil.singleState2('删除'))
        })
    };
    //获取全部角色id，用于渲染搜索角色选框
    requestSvc.getRoleIds({size: 999}).then(function (res) {
        if (res.data.code === 0) {
            //获取全部角色信息
            requestSvc.getMultiRole({ids: res.data.data.ids}).then(function (res) {
                if (res.data.code === 0) {
                    vm.roleList = res.data.data.roleList;
                }
            })
        }
    });
    //搜索
    vm.search = function () {
        vm.newList = [];//用来装搜索结果
        sessionStorage.setItem('roleID', vm.roleID);
        sessionStorage.setItem('userName', vm.userName);
        if (vm.roleID && vm.userName) {
            angular.forEach(vm.allAccount, function (item) {
                if (String(item.roleID) === vm.roleID && item.name.indexOf(vm.userName) >= 0) {
                    vm.newList.push(item)
                }
            });
            vm.managerList = vm.newList;
        }
        else if (vm.roleID) {
            angular.forEach(vm.allAccount, function (item) {
                if (String(item.roleID) === vm.roleID) {
                    vm.newList.push(item)
                }
            });
            vm.managerList = vm.newList;
        }
        else if (vm.userName) {
            angular.forEach(vm.allAccount, function (item) {
                if (item.name.indexOf(vm.userName) >= 0) {
                    vm.newList.push(item)
                }
            });
            vm.managerList = vm.newList;
        }
        else {
            vm.clear();
        }
        //分页参数重新绑定
        vm.total = vm.managerList.length;
        vm.size = vm.total > 10 ? vm.total : 10;
        vm.page = 1;
    };
    //重置
    vm.clear = function () {
        sessionStorage.removeItem('roleID');
        sessionStorage.removeItem('userName');
        $state.reload($state.current);
    };
    //取出此时的新增编辑删除权限
    vm.operationPower = JSON.parse(sessionStorage.getItem('operationPower'));
});