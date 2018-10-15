angular.module('myApp')
    .controller('companyDetailCtrl', function ($rootScope, $stateParams, $state, $http, requestSvc, recruitJobsType, commonUtil) {
        $(window).scrollTop(0);
        let vm = this;
        vm.id = $stateParams.id;

        //公司详情页面请求数据
        requestSvc.getCompanyDetils(vm.id)
            .then(function (res) {
                let data = res.data.data;
                if (res.data.code === 0) {
                    vm.tagList = data.tagList;
                    vm.company = data.company;
                    vm.industry = data.industryList[0].industry;
                    vm.production = data.productList[0] ? data.productList[0].logo : undefined;
                } else {
                    $rootScope.alert(data.message);
                }
            });
        //点击切换
        vm.changChoice = function (status) {
            if (!status) {
                vm.beChosen = !vm.beChosen;
                vm.beChosen ? sessionStorage.setItem('status', '职位详情') : sessionStorage.removeItem('status');
            }
        };

        //单个公司所有职位详情
        vm.options = commonUtil.judgeStorage(sessionStorage.storeOptions, recruitJobsType);
        vm.data = commonUtil.dataConvert(vm.options);
        vm.changeJobsType = commonUtil.radio;
        vm.data.companyId = $stateParams.id;
        requestSvc.getSearchJob(vm.data).then(function (res) {
            // console.log(res);
            vm.jobsList = res.data.data;
            vm.jobsTotal = res.data.total;
            vm.searchResult = res.data.data.length;
            //分页插件
            vm.page = 1;
            vm.size = res.data.data.size || 10;
            vm.total = vm.jobsTotal;
        });
        vm.searchJobs = function () {
            sessionStorage.storeOptions = JSON.stringify(vm.options);
            $state.go('.',
                {page: 1, size: 10},
                {reload: true});
        };
        vm.beChosen = !!sessionStorage.getItem('status');
    });


