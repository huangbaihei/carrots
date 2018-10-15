angular.module('myApp').directive('selectRegion', function (region) {
    return {
        restrict: 'EA',
        templateUrl: 'js/directives/selectRegion/selectRegion.html',
        replace: true,
        scope: {
            province: '=',
            city:'=',
            county:'=',
            tips:'@'
        },
        link: function (scope) {
            scope.region=region;
            //处理选择直辖市的情况
            angular.forEach(scope.region, function (item1, key1, object1) {
                angular.forEach(object1[key1].children, function (item2, key2, object2) {
                    object1[key1].directCity = (object1[key1].name === object2[key2].name);
                })
            });
            //监听直辖市，若为直辖市则城市自动选择
            scope.checkDirectCity = function () {
                scope.city = '';
                scope.county = '';
                if (scope.region[scope.province]&&scope.region[scope.province].directCity) {
                    for (key in scope.region[scope.province].children) {
                        scope.city = key;
                    }
                }
            };
            scope.refreshCounty=function () {
                scope.county='';
            }
        }
    }
});