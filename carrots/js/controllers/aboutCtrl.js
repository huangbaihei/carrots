angular.module('myApp').controller('aboutCtrl', function ($state) {
    $(window).scrollTop(0);
    let vm = this;
    vm.toggle = !!$state.params.status
});