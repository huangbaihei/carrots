angular.module('myApp').controller('companyCtrl',
    function ($rootScope, $state, requestSvc, $filter, industryList, financing, approved, freezed, commonUtil) {
        let vm = this;
        //获取公司列表
        requestSvc.getCompanyList($state.params).then(function (res) {
            if (res.data.code === 0) {
                vm.companyList = res.data.data;
                vm.total = res.data.total;
                vm.params = $state.params;
                vm.params.size = res.data.size;
                vm.params.page = $state.params.page || 1;
                //添加直辖市属性
                angular.forEach(vm.companyList, function (item) {
                    if ($filter('region')(item.province) === $filter('region')(item.city)) {
                        item.directCity = true;
                    }
                });
            }
        });
        //搜索
        vm.search = function () {
            $state.go($state.current, vm.params, {reload: true})
        };
        //清空
        vm.clear = function () {
            angular.forEach(vm.params, function (val, key, object) {
                object[key] = undefined;
            });
            $state.go($state.current, vm.params, {reload: true})
        };
        //搜索多选框常量
        vm.industryList = industryList;
        vm.financing = financing;
        vm.approved = approved;
        vm.freezed = freezed;
        //认证、解除、冻结、解冻操作
        vm.approveOrFreeze = function (id, type, status) {
            //认证、解除操作
            if (type === 1) {
                $rootScope.resultConfirm(
                    status === 1 ? '解除认证后该公司将不再标记为推荐公司' : '认证后该公司将被标记为推荐公司',
                    status === 1 ? '是否执行解除操作' : '是否执行认证操作',
                    function () {
                        requestSvc.approveOrFreeze({id: id, type: type, status: status === 1 ? 0 : 1}).then(
                            commonUtil.doubleState1(status, 1, '解除认证', '认证', $state.current),
                            commonUtil.doubleState2(status, 1, '解除认证', '认证'))
                    })
            }
            //冻结、解冻操作
            else {
                $rootScope.resultConfirm(
                    status === 1 ? '解冻后该公司下的信息将可继续使用' : '冻结后该公司下的所有信息将不可用',
                    status === 1 ? '是否执行解冻操作' : '是否执行冻结操作',
                    function () {
                        requestSvc.approveOrFreeze({id: id, type: type, status: status === 1 ? 0 : 1}).then(
                            commonUtil.doubleState1(status, 1, '解冻', '冻结', $state.current),
                            commonUtil.doubleState2(status, 1, '解冻', '冻结'))
                    })
            }
        };
        //删除
        vm.delete = function (id) {
            $rootScope.resultConfirm('删除后该公司职位信息将被删除', '是否执行删除操作', function () {
                    requestSvc.companyDelete(id).then(
                        commonUtil.singleState1('删除', $state.current),
                        commonUtil.singleState2('删除'))
                }
            )
        };
        //取出此时的新增编辑删除权限
        vm.operationPower = JSON.parse(sessionStorage.getItem('operationPower'));
    });