(function(){
	var amex = angular.module('amex');
	amex.controller('LoginController', ['$scope', '$http','$location', 'globalSrv', '$compile',
	    function($scope, $http, $location, globalSrv, $compile) {
		
		if(!globalSrv.getUserDetails()['userLanguage']){
			 $location.path('/');
		 }
		
		$scope.steps = ['Create User ID & Password', 
		                 'Security Question & Access Code',
		                 'Confirm Contact ID',
		                 'Confirmation'];
		 $scope.labelTxt = globalSrv.getValues();
		 
		 $scope.stepActive = 1;
		 $scope.showTooltip = true;
		 $scope.saveNnext = function(){
			 $scope.stepActive++;
		 }
	}]);
})();