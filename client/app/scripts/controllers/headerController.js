'use strict';

angular.module('psJWTApp')
    .controller('HeaderController', function($scope, authToken) {

        $scope.isAuthenticated = authToken.isAuthenticated;
    });
