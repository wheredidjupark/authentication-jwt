'use strict';

/**
 * @ngdoc function
 * @name psJWTApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the psJWTApp
 */
angular.module('psJWTApp')
  .controller('LogoutController', function (authToken, $state) {

  	authToken.removeToken();
  	$state.go("main");
  });
