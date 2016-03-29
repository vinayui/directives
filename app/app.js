(function(){
	var amex = angular.module('amex', ['ui.router', 'ngMaterial','util']);
	amex.config(['$stateProvider', '$urlRouterProvider',
	    function($stateProvider, $urlRouterProvider) {
		
		 $urlRouterProvider
	     .otherwise('/lang');
		 
		 $stateProvider.state("lang", {
	         url: "/lang",
	         controller : 'LangController',
	         templateUrl: 'app/views/lang.html'
	     }).state("login", {
	         url: "/login",
	         controller : 'LoginController',
	         templateUrl: 'app/views/login_auth.html'
	     });
	}]);
})();
