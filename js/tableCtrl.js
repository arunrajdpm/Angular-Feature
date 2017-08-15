 (function() {
      'use strict';

        var app = angular.module('angularApp');

        app.controller("tableCtrl", function($scope,$mdDialog,$mdToast, dataHub, $http){

  		   
                $scope.employeeDetails = dataHub.employeeDetails();

                $scope.removeEmployee = function(id){
                        return _.find($scope.employeeDetails, function(employee){
                                if(employee._id == id){
                                     $scope.employeeDetails.splice($scope.employeeDetails.indexOf(employee),1);                                    
                                }
                         });
                }
            
        });

        
})();