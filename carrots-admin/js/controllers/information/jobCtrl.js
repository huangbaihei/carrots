angular.module('myApp').controller('jobCtrl',
    function (requestSvc, $state, categoryData, education, experience, compensation, status, $rootScope, commonUtil) {
        let vm = this;
        //下拉框常量
        vm.categoryData = categoryData;
        vm.education = education;
        vm.experience = experience;
        vm.compensation = compensation;
        vm.status = status;
        //取公司id
        vm.companyId = $state.params.companyId;
        vm.listTitle = vm.companyId ? $state.params.companyName + '的在招职位' : '职位列表';
        //获取职位列表
        requestSvc.getJobList($state.params).then(function (res) {
            if (res.data.code === 0) {
                vm.JobList = res.data.data;
                vm.total = res.data.total;
                vm.params = $state.params;
                vm.params.size = res.data.size;
                vm.params.page = $state.params.page || 1;
                //如果url中的参数不是undefined则先将url中的字符串时间戳变为数字格式，然后转化为Date对象，赋值给HTML中绑定的变量
                vm.params.startAt = !$state.params.startAt ? undefined : new Date(Number($state.params.startAt));
                vm.params.endAt = !$state.params.endAt ? undefined : new Date(Number($state.params.endAt) - 86399999);
            }
        });
        //搜索
        vm.search = function () {
            vm.params.startAt = isNaN(Date.parse(vm.params.startAt)) ? undefined : Date.parse(vm.params.startAt);//转换为数字时间戳
            vm.params.endAt = isNaN(Date.parse(vm.params.endAt)) ? undefined : Date.parse(vm.params.endAt) + 86399999;//转换为数字时间戳
            $state.go($state.current, vm.params, {reload: true})
        };
        //清空
        vm.clear = function () {
            angular.forEach(vm.params, function (item, key, object) {
                object[key] = undefined;
            });
            $state.go($state.current, vm.params, {reload: true})
        };
        //上下架
        vm.changeStatus = function (id, status) {
            $rootScope.resultConfirm(
                status === 0 ? '上架后该职位信息将在前台展示' : '下架后该职位信息将不再在前台展示',
                status === 0 ? '是否执行上架操作' : '是否执行下架操作',
                function () {
                    requestSvc.putJobstatus({id: id, status: status === 0 ? 1 : 0}).then(
                        commonUtil.doubleState1(status, 0, '上架', '下架', $state.current),
                        commonUtil.doubleState2(status, 0, '上架', '下架'))
                }
            )
        };
        //删除
        vm.delete = function (id) {
            $rootScope.resultConfirm('删除后该职位信息将无法使用及还原', '是否执行删除操作', function () {
                    requestSvc.jobDelete(id).then(
                        commonUtil.singleState1('删除', $state.current),
                        commonUtil.singleState2('删除'))
                }
            )
        };
        //不同状态的编辑跳转
        vm.edit = function (id, companyName, companyId) {
            if (!$state.params.companyId) {
                $state.go('home.jobDetails', {id: id, companyName: companyName, companyId: companyId, check: 1})
            }
            else {
                $state.go('home.jobDetails', {id: id, companyName: companyName, companyId: companyId})
            }
        };
        //因为公司信息页也可以跳到职位信息页，所以特殊处理职位信息页新增编辑删除权限的取法
        let listFather = JSON.parse(sessionStorage.getItem('listFather'));
        angular.forEach(listFather, function (x) {
            angular.forEach(x.listChild, function (y) {
                if (y.id === 284) {
                    vm.operationPower = y.operationPower
                }
            })
        })

    });