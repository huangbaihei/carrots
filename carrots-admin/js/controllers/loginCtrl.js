angular.module('myApp').controller('loginCtrl', ['$state', '$cookies', 'requestSvc', '$timeout', loginCtrl]);

function loginCtrl($state, $cookies, requestSvc, $timeout) {
    let vm = this;
    vm.submitForm = function (formValid) {
        vm.message = '';
        //拿取登陆者的信息
        if (formValid) {
            requestSvc.login(vm.user).then(function (res) {
                if (res.data.code === 0) {
                    let data = res.data.data;
                    $cookies.put('userName', data.manager.name);
                    $cookies.put('role', data.role.name);
                    $cookies.put('roleId', data.role.id);
                    $cookies.put('loginStatus', true);//记录登录状态
                    $state.go('home');
                }
                else {
                    vm.message = res.data.message;
                    $timeout(function () {
                        vm.message = ''
                    }, 3000);
                }
            })
        }
    }
}
