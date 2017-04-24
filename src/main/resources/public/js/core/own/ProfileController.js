(function () {
    'use strict';
    angular
        .module('app')
        .controller('ProfileController', ProfileController);


    ProfileController.$inject = ['$scope', 'AccountService', '$rootScope', '$state'];

    function ProfileController($scope, AccountService, $rootScope, $state) {

        AccountService.getProfile().then(function (success) {
            $scope.username = success.data.username;
            $scope.lastname = success.data.lastname;
            $scope.name = success.data.name;
            $scope.email = success.data.email;
            $scope.password = null;
            $scope.confirm = null;
        });

        $scope.arePasswordsSame = function () {
            if ($scope.password && $scope.confirm && $scope.password.length > 5 && $scope.confirm.length > 5) {
                return $scope.password == $scope.confirm;
            } else {
                return true;
            }
        };

        $scope.unlockSubmit = function (valid) {
            return $scope.password && $scope.confirm && $scope.password.length > 5 && $scope.confirm.length > 5 && ($scope.password === $scope.confirm) && valid;
        };

        $scope.updateProfile = function () {
            AccountService.updateProfile({
                username: $scope.username,
                newpassword: $scope.password,
                confirmwithpassword: $scope.confirmwithpassword,
                email: $scope.email,
                name: $scope.name,
                lastname: $scope.lastname
            }).then(function success(response) {
                // $rootScope.loggedIn = true;
                $state.go("profile", {}, {reload: true});
            }, function failure(response) {
                // $scope.signInForm.$setPristine();
                // $scope.signInForm.$setUntouched();
                // $scope.username = null;
                // $scope.password = null;
                // $scope.failed = true;
            });
        };
    }
}());

