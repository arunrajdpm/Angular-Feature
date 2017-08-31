 (function() {
      'use strict';

        var app = angular.module('angularApp');

        app.controller("routeCtrl", function($scope, employeeDetails, $stateParams){
        	 	$scope.employeeDetails = employeeDetails; 

        	 	$scope.emp = $scope.employeeDetails[$stateParams.id];
        	 	console.log($scope.emp);
        	 	
        	 	$scope.user1 = {
        	 		    name: 'Luke Skywalker',
        	 		    address: {
        	 		      street: 'PO Box 123',
        	 		      city: 'Secret Rebel Base',
        	 		      planet: 'Yavin 4'
        	 		    },
        	 		    friends: [
        	 		      'Han',
        	 		      'Leia',
        	 		      'Chewbacca'
        	 		    ]
        	 		  }
        	 		  $scope.user2 = {
        	 		    name: 'Han Solo',
        	 		    address: {
        	 		      street: 'PO Box 123',
        	 		      city: 'Mos Eisley',
        	 		      planet: 'Tattoine'
        	 		    },
        	 		    friends: [
        	 		      'phill',
        	 		      'Leia',
        	 		      'Alex'
        	 		    ]
        	 		  }
        });

      
})();