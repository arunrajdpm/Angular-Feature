 (function() {
      'use strict';

        var app = angular.module('angularApp');
        
        app.factory("chartsData", function() {

        	return {
        		dataBar : dataBar,
        	}

        	function dataBar() {

        		return [ {
        				"label" : "Gold",
        				"value" : 80000
        			}, {
        				"label" : "Platinum",
        				"value" : 2000
        			}, {
        				"label" : "Silver",
        				"value" : 90000
        			}, {
        				"label" : "Diamond",
        				"value" : 40000
        			} ]
        	

        	}	
        });

})();