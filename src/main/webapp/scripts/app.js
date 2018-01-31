angular.module('personneApp', [
	'ngAnimate', 
	'ngRoute',
	'ngResource',
	'config',
	'personneApp.services', 
	'personneApp.controllers'
	])

	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {templateUrl: 'partials/home.html',
					controller: 'PersonneCtrl'})
			.when("/about", {
     				templateUrl: "partials/about.html" })
			.otherwise({redirectTo : '/'})
	});







