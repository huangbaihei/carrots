angular.module('myApp')
    .controller('newestCtrl',function ($rootScope,$scope,$state,$http,$stateParams,searchPanel,requestSvc,commonUtil) {
        $(window).scrollTop(0);
        let vm =this;
        let searchPanelCopy = angular.copy(searchPanel);
        //读取数据
        vm.select=commonUtil.judgeStorage(sessionStorage.newest, searchPanelCopy);
        //选中的数据
        vm.data=commonUtil.dataConvert(vm.select);
        //存入本地
        sessionStorage.newest=JSON.stringify(vm.select);
        //数据组装
        vm.data.page = $state.params.page;
        vm.data.name=$state.params.name;
        //多选
        vm.checkbox = commonUtil.checkbox;
        //单选
        vm.checkboxOne = commonUtil.checkboxOne;
        //搜索
        vm.look = function () {
            //    存入本地
            commonUtil.clearUrl($state.params);
            sessionStorage.newest = JSON.stringify(vm.select);
            $state.go('.', vm.data,
                {reload: true});
        };
        //清空
        vm.air = function () {
            sessionStorage.removeItem("newest");
            sessionStorage.newest = JSON.stringify(searchPanelCopy);
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
        //推薦position職業
        vm.isShowEarch = "position";
    });


