 (function() {
      'use strict';

        var app = angular.module('angularApp');

        app.controller("chartsCtrl", function($scope, chartsData){

  		  	$scope.editMode = true;
  		    
  		    $scope.dataPie = chartsData.dataBar();
  		    
	  		$scope.data = [ {
	  			key : "Cumulative Population",
	  			values : $scope.dataPie
	  		} ];
	  		    
  		    console.log($scope.dataPie);
  			$scope.options = {
					chart : {
						type : 'pieChart',
						height : 400,
						x : function(d) {
							return d.label;
						},
						y : function(d) {
							return d.value;
						},
						showLabels : true,
						labelType : "percent",
						duration : 500,

						labelSunbeamLayout : false,
						legend : {
							margin : {
								top : 5,
								right : 5,
								bottom : 5,
								left : 0
							}
						}
					}
				};
  			
  			$scope.optionsbar = {
					chart : {
						type : 'discreteBarChart',
						height : 350,
						width : 450,
						margin : {
							top : 45,
							right : 30,
							bottom : 50,
							left : 105
						},
						x : function(d) {
							return d.label;
						},
						y : function(d) {
							return d.value;
						},
						showValues : true,
						valueFormat : (function(d) {
							return d + "  ";
						}),
						duration : 500,
						xAxis : {
							axisLabel : 'Items Available',

						},
						yAxis : {
							tickFormat : (function(d) {
								return d + "  ";
							}),

							axisLabel : 'Quantity',
							axisLabelDistance : 10
						}
					}
				};
            
        });
        chartsCtrl.$inject = [$scope, chartsData];
        
})();