angular.module('myApp').controller('accountDetailsCtrl', function ($state, requestSvc, $rootScope, commonUtil, $timeout) {
    let vm = this;
    //获取全部角色id
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
    //新增页
    if (!$state.params.id) {
        vm.title = '账号新增';
        vm.save = function () {
            if (vm.add.pwd === vm.check) {
                requestSvc.addAccount(vm.add).then(
                    commonUtil.singleState1('新增', 'home.account'),
                    commonUtil.singleState2('新增'))
            }
            else {
                vm.tips = '密码两次输入不一致，请重新输入';
                $timeout(function () {
                    vm.tips = ''
                }, 3000);
            }
        }
    }
    //编辑页
    else {
        vm.title = '账号编辑';
        vm.edit = 1;
        //获取用户信息
        requestSvc.getMultiAccount({ids: $state.params.id}).then(function (res) {
            if (res.data.code === 0) {
                vm.add = res.data.data.managerList[0];
                vm.add.roleID = String(vm.add.roleID);//下拉选框的value值是字符串
                vm.save = function () {
                    requestSvc.editAccount(vm.add, vm.add.id).then(
                        commonUtil.singleState1('修改', 'home.account'),
                        commonUtil.singleState2('修改'))
                }
            }
        })
    }
});