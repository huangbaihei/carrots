angular.module('myApp').controller('roleDetailsCtrl', function ($rootScope, requestSvc, $state, commonUtil) {
    let vm = this;
    vm.title = !$state.params.id ? '角色新增' : '角色编辑';
    //请求全部模块id
    requestSvc.getModuleIds({size: 999}).then(function (res) {
        if (res.data.code === 0) {
            //根据模块id请求全部模块内容
            requestSvc.getMultiModule({ids: res.data.data.ids}).then(function (res) {
                if (res.data.code === 0) {
                    vm.moduleList = res.data.data.moduleList;
                    //选出所需模块
                    vm.parentModule = [];
                    angular.forEach(vm.moduleList, function (x) {
                        if (x.parentID === 4399) {
                            x.select = false;
                            x.childModule = [];
                            angular.forEach(vm.moduleList, function (y) {
                                if (y.parentID === x.id) {
                                    y.select = false;
                                    if (y.id !== 288) {
                                        y.operationPower = [
                                            {name: '新增', EnglishName: 'create', select: false},
                                            {name: '编辑', EnglishName: 'update', select: false},
                                            {name: '删除', EnglishName: 'delete', select: false}
                                        ];
                                    }
                                    else {
                                        y.operationPower = [];
                                    }
                                    x.childModule.unshift(y)
                                }
                            });
                            vm.parentModule.unshift(x);
                        }
                    });
                    //编辑页渲染
                    if ($state.params.id) {
                        vm.role = {};
                        //根据角色id请求角色详情
                        requestSvc.getOneRole($state.params.id).then(function (res) {
                            if (res.data.code === 0) {
                                let data = res.data.data.role;
                                vm.role.name = data.name;
                                angular.forEach(data.permissionsSet, function (value, key) {
                                    angular.forEach(vm.parentModule, function (x) {
                                        if (x.id === Number(key)) {//key不是数字
                                            x.select = true;
                                        }
                                        angular.forEach(x.childModule, function (y) {
                                            if (y.id === Number(key)) {
                                                y.select = true;
                                                angular.forEach(y.operationPower, function (z) {
                                                    angular.forEach(value, function (item) {
                                                        if (z.EnglishName === item) {
                                                            z.select = true
                                                        }
                                                    })
                                                })
                                            }
                                        })
                                    })
                                });
                                vm.checkAll();//全选框检查函数
                            }
                        })
                    }
                }
            });
        }
    });
    //开始处理多选框和vm.parentModule中的select之间的绑定关系
    vm.checkAll = function () {//检查函数,使全选框实时绑定
        vm.allSelect = vm.parentModule.every(function (item) {
            return item.select;
        });
        angular.forEach(vm.parentModule, function (x) {
            angular.forEach(x.childModule, function (y) {
                if (!y.select) {
                    vm.allSelect = false;
                }
                angular.forEach(y.operationPower, function (z) {
                    if (!z.select) {
                        vm.allSelect = false;
                    }
                })
            })
        });
    };
    vm.checkParent = function () {//检查函数,使二级选框实时绑定
        angular.forEach(vm.parentModule, function (x) {
            x.select = x.childModule.some(function (item) {
                return item.select;
            });
        })
    };
    //一级点击
    vm.all = function (allSelect) {
        angular.forEach(vm.parentModule, function (x) {
            x.select = !!allSelect;
            angular.forEach(x.childModule, function (y) {
                y.select = !!allSelect;
                angular.forEach(y.operationPower, function (z) {
                    z.select = !!allSelect;
                })
            })
        })
    };
    //二级点击
    vm.parent = function (parentSelect, id) {
        angular.forEach(vm.parentModule, function (x) {
            if (x.id === id) {
                angular.forEach(x.childModule, function (y) {
                    y.select = !!parentSelect;
                    angular.forEach(y.operationPower, function (z) {
                        z.select = !!parentSelect;
                    })
                })
            }
        });
        vm.checkAll();
    };
    //三级点击
    vm.child = function (childSelect, id) {
        angular.forEach(vm.parentModule, function (x) {
            angular.forEach(x.childModule, function (y) {
                if (y.id === id) {
                    angular.forEach(y.operationPower, function (z) {
                        z.select = !!childSelect;
                    })
                }
            })
        });
        vm.checkParent();
        vm.checkAll();
    };
    //四级点击
    vm.operation = function () {
        angular.forEach(vm.parentModule, function (x) {
            angular.forEach(x.childModule, function (y) {
                angular.forEach(y.operationPower, function (z) {
                    if (z.select) {
                        y.select = true;
                    }
                })
            })
        });
        vm.checkParent();
        vm.checkAll();
    };
    //新增或编辑页的保存
    vm.save = function () {
        //用vm.parentModule中选中的项来构造请求数据中的权限列表 vm.role.permissionsSet
        vm.role.permissionsSet = {};
        angular.forEach(vm.parentModule, function (x) {
            if (x.select) {
                vm.role.permissionsSet[x.id] = [];
                angular.forEach(x.childModule, function (y) {
                    if (y.select) {
                        vm.role.permissionsSet[y.id] = [];
                        angular.forEach(y.operationPower, function (z) {
                            if (z.select) {
                                vm.role.permissionsSet[y.id].push(z.EnglishName)
                            }
                        })
                    }
                })
            }
        });
        //新增角色
        if (!$state.params.id) {
            requestSvc.addRole(vm.role).then(
                commonUtil.singleState1('新增', 'home.role'),
                commonUtil.singleState2('新增'))
        }
        //编辑角色
        else {
            vm.role.id = $state.params.id;
            requestSvc.editRole(vm.role, vm.role.id).then(
                commonUtil.singleState1('修改', 'home.role'),
                commonUtil.singleState2('修改'))
        }
    }
});