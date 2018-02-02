
var app = angular.module('demoApp',['ui.router','ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/home');


	  $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'partials/home.html',
            controller : 'homeController'

        }).state('details', {
        	url:'/details',
           templateUrl : 'partials/details.html',
           controller: 'detailsCtrl'   
	        });
});

