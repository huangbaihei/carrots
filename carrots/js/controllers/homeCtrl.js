angular.module('myApp')
    .controller('homeCtrl', function ($rootScope,$scope,$state,$uibModal) {
        $scope.state = $state;
        var vm = this;
        vm.chooseCity = JSON.parse(sessionStorage.getItem("city"));
        vm.city = vm.chooseCity? vm.chooseCity : "北京站";
        vm.choiceCity = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                ariaDescribedBy: 'modal-body',
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: 'vm',
                size: 'sm',
                resolve: {
                    items: function () {
                        return vm.city;
                    }
                }
            });
            modalInstance.result.then(function(itemCity) {
                sessionStorage.setItem("city", JSON.stringify(itemCity));
                $state.go('.', {}, {reload: true});
            });
        };
    });

// 模态框单独控制器
angular.module('myApp').controller('ModalInstanceCtrl', function ($uibModalInstance, items) {
    var vm = this;
    vm.city = items;
    vm.bjCity = function () {
        vm.city = "北京站";
        $uibModalInstance.close(vm.city);
    };
    vm.country = function() {
        vm.city = "全国站";
        $uibModalInstance.close(vm.city);
    };
});