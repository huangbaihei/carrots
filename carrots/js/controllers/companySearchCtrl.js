angular.module('myApp')
    .controller('companySearchCtrl', function ($rootScope, $state, $stateParams, requestSvc, searchPanel, commonUtil, searchSpecies) {
        $(window).scrollTop(0);
        let vm = this;
        let urlArray = [];
        let searchPanelCopy = angular.copy(searchPanel);
        //用来存放url的参数
        vm.size = 9;
        vm.params = $state.params;
        vm.params.size =  vm.size;
        vm.name = $stateParams.name ? $stateParams.name : [];

        vm.financing = searchPanelCopy.financing;
        vm.industry = searchPanelCopy.industry;
        vm.city = searchPanelCopy.city;
        // console.log(vm.cities);

        //搜索栏刷新状态保持
        vm.cities = commonUtil.keepSelect($stateParams.city, urlArray, vm.city, vm.cities);
        vm.industries = commonUtil.keepSelect($stateParams.industry, urlArray, vm.industry, vm.industries);
        vm.financings = commonUtil.keepSelect($stateParams.financing, urlArray, vm.financing, vm.financings);
        // console.log(vm.params);
        requestSvc.getCompanyList(vm.params).then(function (res) {
            if (res.data.code === 0) {
                vm.result = (res.data.data.length === 0);
                vm.companiesList = res.data.data;
                vm.total = res.data.total;
                vm.page = $stateParams.page || 1;
            }
        });
        // 推荐公司数据
        vm.theSize = {
            size: 3
        };
        requestSvc.getCompanyList(vm.theSize).then(function (res) {
            if (res.data.code === 0) {
                vm.topCompanyList = res.data.data;
            } else {
                $rootScope.alert(res.data.message);
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
            vm.params.name = vm.name;
            $state.go('.', vm.params, {
                reload: true
            });
        };

        //清除
        vm.companyClear = function () {
            angular.forEach(vm.params, function (item, index, array) {
                array[index] = undefined;
            });
            commonUtil.clearAll(vm.name);
            commonUtil.clearAll(vm.financing);
            commonUtil.clearAll(vm.industry);
            commonUtil.clearAll(vm.city);
            $state.go('.', vm.params, {
                reload: true
            });
        };
    });
