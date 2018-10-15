angular.module('myApp').controller('findElitesCtrl', function (requestSvc,$rootScope) {
    var vm = this;
    //获取公司列表前8个
    requestSvc.getCompanyList({size: 8})
        .then(function (res) {
            if (res.data.code===0){
                vm.jobList = res.data.data;
            }
        })
});