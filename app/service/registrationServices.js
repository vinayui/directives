(function(){
	var amex = angular.module('amex');
	amex.factory('registService',['$q','$http', 'serviceUrls', 
	   function( $q, $http, serviceUrls){
	    return {
	        getLabelData : function(text){
	        	var deferred = $q.defer();
	            $http({
	            	method : "GET",
	                url : serviceUrls.getLabels
	            }).success (function(responce){
                	deferred.resolve(responce);
                }).error(function(){
                	deferred.resolve({"success":false,"data":"Technical Error"});
                });	
	            return deferred.promise;
	        }
	    }               
	}]);
})();