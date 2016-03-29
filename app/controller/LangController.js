(function(){
	var amex = angular.module('amex');
	amex.controller('LangController', ['$scope', '$location', 'registService', 'globalSrv',
	    function($scope, $location, registService,globalSrv) {		
		var headings = ["Welcome to American Express @Work","First Time Walk-Through"];	
		$scope.userLanguages = '';
        $scope.languages = [{"selValue":"en-uk","text" : "English(UK)"},
                            {"selValue":"en-us","text" : "English(US)"}];
        
        $scope.$watch('userLanguages',function(lang){
        	globalSrv.setUserDetails('userLanguage',lang);
        	$('.langContainer').removeClass('errorBox');
        });
		
		$scope.saveLang = function(){
			var langEle = $('.langContainer')
			if($scope.userLanguages){
				registService.getLabelData().then(function(responce){
					globalSrv.setValues(responce.data);
					$location.path('/login');
				});
			}else{
				langEle.addClass('errorBox');
			}
		};
		
	}]);
})();
