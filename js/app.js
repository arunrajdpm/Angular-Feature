 (function() {
      'use strict';

var app = angular.module('angularApp', ["ui.router","ngMaterial","mdDataTable","nvd3"]);

app.config(function($stateProvider, $locationProvider, $urlRouterProvider) {
	$urlRouterProvider.when("", "/login");
	$urlRouterProvider.when("content", "/content");
	$stateProvider.state('login', {
		url : "/login",
		templateUrl : "Templates/login.html",
		controller : "mainCtrl"
	})
  .state('form', {
		url : "/form",
		templateUrl : "Templates/form.html",
		controller : "mainCtrl"
	})
  .state('main', {
		url : "/main",
		templateUrl : "Templates/mainPage.html",
		controller : "mainCtrl"
	})
  .state('Table', {
		url : "/Table",
		templateUrl : "Templates/table.html",
		controller : "mainCtrl"
	})
  .state('Charts', {
		url : "/Charts",
		templateUrl : "Templates/Charts.html",
		controller : "mainCtrl"
	});

});



app.controller("mainCtrl", function($scope, $state,$mdDialog,$rootScope,$mdSidenav){
     $rootScope.sideNavButton = true; 
     $rootScope.loginCheck = function(){
          
          if( $scope.username === "admin" &&
              $scope.password === "admin")
             {     
                $rootScope.sideNavButton = true;             
                $state.go("main");
                
             }else{
                  $mdDialog.show(
  		             $mdDialog.alert()
  		            .clickOutsideToClose(true)
  		            .title('Login Failed')
  		            .textContent('Enter the Correct Credentials !!!')
  		            .ariaLabel('Subscriber Creation')
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
     }

    $scope.toggleLeft = buildToggler('left');
     

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }

     $scope.logout = function(){      
          $rootScope.sideNavButton = false;
          $state.go("login");
     };
     
     $scope.closeSideNav = function(){
    	  $mdSidenav('left').toggle();
     }

     $scope.sideMenuContent = [
       {
         name : "Topics",
         content : [ "Table ","Charts"]
       }, {
         name : "Heading2",
         content : [ "sub Head2"]
       }

     ];

     
});

mainCtrl.$inject = ['$scope'];
})();