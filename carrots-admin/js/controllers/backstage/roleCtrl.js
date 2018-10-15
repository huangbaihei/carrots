angular.module('myApp').controller('roleCtrl', function ($rootScope, requestSvc, $state, commonUtil) {
    let vm = this;
    //获取角色id
    requestSvc.getRoleIds($state.params).then(function (res) {
        if (res.data.code === 0) {
            let data = res.data.data;
            vm.total = data.total;
            vm.size = data.size;
            vm.page = data.page;
            //获取角色信息
            requestSvc.getMultiRole({ids: data.ids}).then(function (res) {
                if (res.data.code === 0) {
                    vm.roleList = res.data.data.roleList;
                }
            })
        }
    });
    //删除
    vm.delete = function (id) {
        $rootScope.resultConfirm('删除角色后你必须对该角色下的账户重新分配权限', '你确定要删除该角色吗？', function () {
                requestSvc.deleteRole(id).then(
                    commonUtil.singleState1('删除', $state.current),
                    commonUtil.singleState2('删除'))
            }
        )
    };
    //取出此时的新增编辑删除权限
    vm.operationPower = JSON.parse(sessionStorage.getItem('operationPower'));
});