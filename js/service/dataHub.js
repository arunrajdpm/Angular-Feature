 (function() {
      'use strict';

        var app = angular.module('angularApp');

       app.service("dataHub", function($http){
              
             
             
             var employeeDetails = {
            		     getDetails: function() {
            		      
            		    	var promise = $http.get('http://www.mocky.io/v2/599e64b52500000c09d30435').then(function (response) {

            		        return response.data;
            		      });
            		      
            		      return promise;
            		    }
            		  };
            	
             return employeeDetails;

       })
})();