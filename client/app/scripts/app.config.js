"use strict";

(function(){
	angular.module("psJWTApp").config(function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise("/");

		$stateProvider
		.state('register', {
			url: '/register',
			templateUrl: '/views/register.html',
			controller: 'RegisterController'
		})
		.state('main', {
			url: '/',
			templateUrl: '/views/main.html',
			controller: 'MainController'
		});

	});
}());