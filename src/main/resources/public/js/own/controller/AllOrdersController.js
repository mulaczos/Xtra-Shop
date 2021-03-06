(function () {
    'use strict';
    angular
        .module('app')
        .controller('AllOrdersController', AllOrdersController);

    AllOrdersController.$inject = ['$scope', 'OrderService', '$state', '$rootScope'];

    function AllOrdersController($scope, OrderService, $state, $rootScope) {

        $scope.expanded = false;

        $scope.init = function () {
            $scope.orders = OrderService.all();
        };

        $scope.confirmOrder = function (order) {
            OrderService.confirmOrder(order).$promise.then(function (success) {
                $state.go('allorders');
            });
        };

        $scope.rejectOrder = function (order) {
            OrderService.rejectOrder(order).$promise.then(function (success) {
                $state.go('allorders');
            });
        };

        $scope.goShopping = function () {
            $rootScope.selectedCategory = 'ALL';
            $state.go('main');
        };
    }
}());

