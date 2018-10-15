angular.module('myApp').controller('moduleDetailsCtrl', function ($state, requestSvc, $rootScope, commonUtil) {
    let vm = this;
    //新增页
    if (!$state.params.id) {
        vm.title = '模块新增';
        vm.save = function () {
            requestSvc.addModule(vm.add).then(
                commonUtil.singleState1('新增', 'home.module'),
                commonUtil.singleState2('新增'))
        }
    }
    //编辑页
    else {
        vm.title = '模块编辑';
        requestSvc.getMultiModule({ids: $state.params.id}).then(function (res) {
            if (res.data.code === 0) {
                vm.add = res.data.data.moduleList[0];
                vm.save = function () {
                    requestSvc.editModule(vm.add, vm.add.id).then(
                        commonUtil.singleState1('修改', 'home.module'),
                        commonUtil.singleState2('修改'))
                }
            }
        })
    }
});