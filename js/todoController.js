 (function() {
      'use strict';

        var app = angular.module('angularApp');

        app.controller("todoCtrl", function($scope,$mdDialog,$mdToast){

            $scope.todo = [{
                            name : "First Task", Completed: false
                        }, {
                            name : "Second Task", Completed: false
                        }];
           $scope.newItem ={
                    name : "",
                   Completed : false 
                };


            $scope.addItem = function(){  
                 $scope.status = "" ;
                if($scope.newItem.name !== "")   {
                        $scope.todo.push($scope.newItem);
                        $scope.showSimpleToast();
                }             
                else {
                    $mdDialog.show(
  		             $mdDialog.alert()
  		            .clickOutsideToClose(true)
  		            .title('Enter Some Event !!!') 		             
  		            .ariaLabel('event')
  		            .ok('ok!') 		            
  		            .openFrom({
  		              top: -50,
  		              width: 30,
  		              height: 80
  		            })
  		            .closeTo({
  		              left: 1500
  		            }));
                }
                     
                $scope.newItem ={
                   name : "",
                   Completed : false 
                };
            }

            $scope.showSimpleToast = function() {
                    
                    $mdToast.show(
                    $mdToast.simple()
                        .textContent(' Event Added !!!')
                        .position("top right" )
                        .hideDelay(3000)
                    );
            };


            $scope.taskCompleted = function(data, ev){
                 
                    var confirm = $mdDialog.confirm()
                        .title('Would you like to delete your Event?')
                        .textContent("It will be deleted from the TO-DO list ?")
                        .ariaLabel('Remove EVent')
                        .targetEvent(ev)
                        .ok('Delete it!')
                        .cancel('keep It');
                    if(!data.Completed){
                    $mdDialog.show(confirm).then(function() {
                           $scope.todo.splice($scope.todo.indexOf(data),1);                      
                    }, function() {
                         $scope.eventStatus = true;
                         $scope.status = data.name + 'Completed.';
                    });
                }else{
                        $mdToast.show(
                            $mdToast.simple()
                                .textContent('Already Completed !!!')
                                .position("top right" )
                                .hideDelay(3000)
                         );                      
                         $scope.todo.splice($scope.todo.indexOf(data),1);               
                    }

                     data.Completed = !data.Completed;
            };

        });
     
})();