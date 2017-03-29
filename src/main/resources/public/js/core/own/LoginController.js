angular
    .module('app')
    .controller('LoginController', LoginController);

LoginController.$inject = ['$scope', 'AuthenticationService', '$state'];

function LoginController($scope, AuthenticationService, $state) {

    $scope.processLogin = function () {

        AuthenticationService.login(
            $scope.user.username,
            $scope.user.password
        ).then(function success(response) {
            $state.go("home");
        }, function failure(response) {
            $state.go("login");
        });
    };
}
