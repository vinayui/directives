(function(){
	var amex = angular.module('util');
	var path = window.location.protocol+"//"+window.location.host+window.location.pathname;
	
	amex.constant("serviceUrls",{
		"path" : path,
		"getLabels" : path+'/AMEX/app/model/labelConstants.json'
	});
})();