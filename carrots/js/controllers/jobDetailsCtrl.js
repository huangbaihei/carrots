angular.module('myApp')
    .controller('jobDetailsCtrl', function ($rootScope, $stateParams, $state, $http, requestSvc) {
        $(window).scrollTop(0);
        var vm = this;
        vm.id = $stateParams.id;
        requestSvc.jobsDetail(vm.id)
            .then(function (res) {
                if (res.data.code === 0) {
                    vm.jobInfo = res.data.data;
                    vm.industryInfo = res.data.data.industryList[0];
                    vm.tags = res.data.data.tags;
                } else {
                    $rootScope.alert(res.data.data.message);
                }
            });
        //模態框
        vm.interest=$rootScope.interests;
    });