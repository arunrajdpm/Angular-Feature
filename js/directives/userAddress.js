 (function() {
      'use strict';

        var app = angular.module('angularApp');

        app.directive("address", function(){
        	return {
        	      restrict: 'E',      	      
        	      scope : true,
        	      controller: function($scope) {
        	          
        	          
        	          $scope.collapsed = true;
        	          
        	          $scope.collapse = function(){
        	        	 $scope.collapsed = ! $scope.collapsed;
        	          }
        	        },
        	      templateUrl: "../Templates/userAddress.html"
        	    };
        });

      
})();