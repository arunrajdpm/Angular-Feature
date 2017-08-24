 (function() {
      'use strict';

        var app = angular.module('angularApp');

        app.controller("routeCtrl", function($scope, employeeDetails, $stateParams){
        	 	$scope.employeeDetails = employeeDetails; 
        	 	
        	 	
        	 	
        	 	$scope.emp = $scope.employeeDetails[$stateParams.id];
        	 	console.log($scope.emp);
        });

      
})();