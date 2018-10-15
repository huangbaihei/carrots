angular.module('myApp').directive('pagination', function ($state) {
    return {
        restrict: 'EA',
        templateUrl: 'js/directives/pagination/pagination.html',
        replace: true,
        scope: {
            size: '=',
            total: '=',
            page: '=',
        },
        link: function (scope) {
            scope.refreshList = function () {
                $state.go(
                    $state.current,
                    {
                        page: scope.toPage ? scope.toPage : scope.page,
                        size: scope.size
                    },
                    {reload: true})
            }
        }
    }
});