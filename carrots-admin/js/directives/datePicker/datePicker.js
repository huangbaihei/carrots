angular.module('myApp').directive('datePicker', function ($stateParams) {
    return {
        restrict: 'EA',
        templateUrl: 'js/directives/datePicker/datePicker.html',
        replace: true,
        scope: {//创建了一个该指令的作用域
            startAt: '=',
            endAt: '='
        },
        link: function (scope) {
            scope.startIsOpen = false;//开始日期日历初始不显示
            scope.endIsOpen = false;//结束日期日历初始不显示
            scope.today = new Date();//今天的日期
            scope.startDate = function () {//点击选开始日期
                scope.startIsOpen = true;//点击表单显示日历
                scope.startMaxDate = !scope.endAt ? scope.today : scope.endAt;
            };
            scope.endDate = function () {//点击选结束日期
                scope.endIsOpen = true;//点击表单显示日历
            };
        }
    }
});