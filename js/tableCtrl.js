 (function() {
      'use strict';

        var app = angular.module('angularApp');

        app.controller("tableCtrl", function($scope, dataHub){

  		   
                $scope.employeeDetails = dataHub.employeeDetails();
                
                $scope.positionType = ['com',"org","gov","info","mil","net","edu"];

                $scope.removeEmployee = function(id){
                        return _.find($scope.employeeDetails, function(employee){
                                if(employee.id == id){
                                     $scope.employeeDetails.splice($scope.employeeDetails.indexOf(employee),1);                                    
                                }
                         });
                }
            
        });

      
})();