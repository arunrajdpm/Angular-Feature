 (function() {
      'use strict';

        var app = angular.module('angularApp');

        app.directive("userInfo", function(){
        	return {
        	      restrict: 'E',      	      
        	      scope: {
        	          user: '=',
        	          initial : "@collapsed"
        	        },
        	        controller: function($scope) {
        	          
        	          $scope.collapsed = $scope.initial == 'true';
        	          
        	          $scope.collapse = function(){
        	        	 $scope.collapsed = ! $scope.collapsed;
        	          };
        	          
        	          $scope.remove = function(friend){
        	        	  $scope.user.friends.splice($scope.user.friends.indexOf(friend),1);
        	          }
        	        },
        	      templateUrl: "../Templates/userInfoCard.html"
        	    };
        });

      
})();