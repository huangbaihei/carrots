angular.module('myApp').controller('moduleCtrl', function (requestSvc, $state, $rootScope, commonUtil) {
    let vm = this;
    //请求模块id
    requestSvc.getModuleIds($state.params).then(function (res) {
        if (res.data.code === 0) {
            let data = res.data.data;
            vm.total = data.total;
            vm.size = data.size;
            vm.page = data.page;
            //根据模块id请求模块内容
            requestSvc.getMultiModule({ids: data.ids}).then(function (res) {
                if (res.data.code === 0) {
                    vm.moduleList = res.data.data.moduleList;
                }
            });
        }
    });
    //删除
    vm.delete = function (id) {
        $rootScope.confirm('你确定删除该模块吗？', function () {
                requestSvc.deleteModule(id).then(
                    commonUtil.singleState1('删除', $state.current),
                    commonUtil.singleState2('删除'))
            }
        )
    };
    //取出此时的新增编辑删除权限
    vm.operationPower = JSON.parse(sessionStorage.getItem('operationPower'));
});