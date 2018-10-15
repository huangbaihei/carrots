angular.module('myApp')
    .controller('pwdCtrl', function ($rootScope, requestSvc, $state, $cookies) {
        let vm = this;
        vm.save = function () {
            if (vm.data.newPwd !== vm.data.oldPwd && vm.data.newPwd === vm.check) {
                requestSvc.changePwd(vm.data).then(function (res) {
                    if (res.data.code === 0) {
                        $rootScope.alert('密码修改成功，请重新登录', function () {
                            sessionStorage.clear();
                            angular.forEach($cookies.getAll(), function (val, key) {
                                $cookies.remove(key);
                            });
                            $state.go('login')
                        })
                    }
                    else {
                        $rootScope.alert(res.data.message + '，密码修改失败')
                    }
                }, function () {
                    $rootScope.alert('服务器没有反馈，密码修改失败')
                })
            }
            else if (vm.data.newPwd === vm.data.oldPwd) {
                vm.tips = '新密码和旧密码一样，请重新设置';
            }
            else if (vm.data.newPwd !== vm.check) {
                vm.tips = '新密码两次输入不一致，请重新输入';
            }
        }
    });