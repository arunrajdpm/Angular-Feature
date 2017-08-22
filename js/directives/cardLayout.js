 (function() {
      'use strict';

        var app = angular.module('angularApp');

        app.directive("cardLayout", function(){
        	return {
        	      restrict: 'E',
        	      transclude: true,
        	      scope: { name:'@' },
        	      templateUrl: "../Templates/card.html"
        	    };
        });

      
})();