angular.module('myApp')
    .controller('positionSearchCtrl', function ($rootScope, $scope, $state, $http, $stateParams, $location, searchPanel, requestSvc, commonUtil) {
        let vm = this;
        let searchPanelCopy = angular.copy(searchPanel);
        //读取数据
        vm.select = commonUtil.judgeStorage(sessionStorage.jobOptions, searchPanelCopy);
        //选中的数据
        vm.data = commonUtil.dataConvert(vm.select);
        //存入本地
        sessionStorage.jobOptions = JSON.stringify(vm.select);
        //数据组装
        vm.data.page = $state.params.page;
        vm.data.name = $state.params.name;
        //多选
        vm.checkbox = commonUtil.checkbox;
        //单选
        vm.checkboxOne = commonUtil.checkboxOne;
        //二级详情
        vm.positionClick = function (index) {
            // 判断需要展开详情的类目
            vm.showCategoryNum = commonUtil.judgeShow(vm.select.category);
            // 判断选中的数量
            vm.selectNum = commonUtil.selectedNum(vm.select.category);
            // 展开二级类目
            if (index > 0 && vm.showCategoryNum > 0 && vm.selectNum === 1) {
                vm.select.subCategory = searchPanelCopy.subCategory[vm.showCategoryNum - 1].data;
            }
            // 清除二级类目数据
            else if (index === 0 || vm.showCategoryNum === 0 || vm.selectNum !== 1) {
                vm.select.subCategory = [];
            }
        };
        // 选中从其他页面传来的一级类目信息
        if ($state.params.id) {
            vm.select.category[0].choose = false;
            vm.select.category[parseInt($state.params.id)].choose = true;
        }
        //高亮
        vm.positionClick(parseInt($state.params.id) + 1);
        // 选中从其他页面传来的二级类目信息
        if ($state.params.subId && vm.select.subCategory.length > 0) {
            for (let i = 0; i < vm.select.subCategory.length; i++) {
                vm.select.subCategory[i].choose = false;
                vm.select.subCategory[parseInt($state.params.subId)].choose = true;
            }
            vm.data.category = $state.params.id;
            vm.data.subCategory = $state.params.subId;
        }

        //搜索
        vm.look = function () {
            //    存入本地
            sessionStorage.jobOptions = JSON.stringify(vm.select);
            commonUtil.clearUrl($state.params);
            $state.go('.', {
                    page: 1,
                    size: 10,
                    name: vm.data.name,
                    id: undefined,
                    subId: undefined,
                },
                {reload: true});
        };
        //清空
        vm.air = function () {
            sessionStorage.removeItem("jobOptions");
            sessionStorage.jobOptions = JSON.stringify(searchPanel);
            commonUtil.clearUrl($state.params);
            $state.go('.', $state.params,
                {reload: true});
        };
        // 获取职位列表
        requestSvc.getSearchJob(vm.data).then(function (res) {
            if (res.data.code === 0) {
                vm.plainJobList = res.data.data;
                vm.totalItems = res.data.total;
                vm.currentPage = $stateParams.page || 1;
                vm.currentSize = $stateParams.size || 10;
            }
        });
        //推荐position职业
        vm.isShowEarch = "position";
    });


