"use strict";

(function() {

    angular.module("psJWTApp").controller('RegisterController', function($scope, $http, alert) {
        $scope.email = "";
        $scope.password = "";
        $scope.passwordConfirm = "";

        var url = "http://localhost:8181/register";

        $scope.submit = function() {
            var user = {
                email: $scope.email,
                password: $scope.password
            };

            console.log("you are attempting to submit a registration form with following email: ", user.email);
            $http.post(url, user).then(function(response) {
                alert('Success', 'OK!', 'You are now registered');
                console.log(response);
            }, function(error) {
                alert('warning', 'Error', error.data);
                console.log(error);
            });
        };

    });
})();
