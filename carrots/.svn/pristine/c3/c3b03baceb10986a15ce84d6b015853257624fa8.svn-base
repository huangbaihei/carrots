angular.module('myApp')
    .controller('companyListCtrl', function ($rootScope, $state, $stateParams, requestSvc, searchPanel, commonUtil, searchSpecies) {
        let vm = this;
        let urlArray = [];
        let searchPanelCopy = angular.copy(searchPanel);
        //用来存放url的参数和常量
        vm.financing = searchPanelCopy.financing;
        vm.industry = searchPanelCopy.industry;
        vm.city = searchPanelCopy.city;
        vm.params = $state.params;
        vm.params.size = 9;
        vm.size = 9;
        //搜索栏刷新状态保持
        vm.cities = commonUtil.keepSelect($stateParams.city, urlArray, vm.city, vm.cities);
        vm.industries = commonUtil.keepSelect($stateParams.industry, urlArray, vm.industry, vm.industries);
        vm.financings = commonUtil.keepSelect($stateParams.financing, urlArray, vm.financing, vm.financings);
        requestSvc.getCompanyList(vm.params).then(function (res) {
            if (res.data.code === 0) {
                vm.result = (res.data.data.length === 0);
                vm.companiesList = res.data.data;
                vm.total = res.data.total;
                vm.page = $stateParams.page || 1;
            }
        });
        //城市搜索栏
        vm.chooseCity = searchSpecies.searchFn(vm.city, vm.cities, vm.params);
        //融资规模搜索栏
        vm.chooseFinancing = searchSpecies.searchFn(vm.financing, vm.financings, vm.params);
        //行业搜索栏
        vm.chooseIndustry = searchSpecies.searchFn(vm.industry, vm.industries, vm.params);
        //搜索
        vm.companySearch = function () {
            $state.go('.', vm.params,
                {reload: true}
            );
        };

        //清除
        vm.companyClear = function () {
            angular.forEach(vm.params, function (item, index, array) {
                array[index] = undefined;
            });
            commonUtil.clearAll(vm.financing);
            commonUtil.clearAll(vm.industry);
            commonUtil.clearAll(vm.city);
            $state.go('.', vm.params, {
                reload: true
            });
        };
    });
