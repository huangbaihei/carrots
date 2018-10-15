angular.module('myApp').directive('other', function ($state, requestSvc) {
    return {
        restrict: 'EA',
        templateUrl: 'js/directives/otherOccupations/otherOccupations.html',
        replace: true,
        scope: {//创建了一个该指令的作用域
            size: '=',
            show: '=',
        },
        link: function (scope) {
            var data = {};
            data.size = scope.size;
            if (scope.show === "company") {
                requestSvc.getCompanyList(data)
                    .then(function (res) {
                        if (res.data.code === 0) {
                            scope.eliteJob = res.data.data;
                        }
                    })

            }
            else if (scope.show === "position") {
                requestSvc.getSearchJob(data)
                    .then(function (res) {
                        if (res.data.code === 0) {
                            scope.eliteJob = res.data.data;
                        }
                    })
            }
        }
    }
});
