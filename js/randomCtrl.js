(function() {
	'use strict';

	var app = angular.module('angularApp');

	app
			.controller(
					"randomCtrl",
					function($scope, dataHub) {

						$scope.objProp = [ {
							name : "",
							type : ""
						}, {
							name : "",
							type : ""
						} ];
						$scope.result = [];

						$scope.randomNames = [];
						$scope.phone = [];
						$scope.email = [];
						$scope.companyName = [];
						$scope.position = [];
						angular.forEach(dataHub.employeeDetails(), function(
								item) {
							$scope.randomNames.push(item.name);
							$scope.phone.push(item.phone);
							$scope.email.push(item.email);
							$scope.companyName.push(item.company);
							$scope.position.push(item.position);

						});
						$scope.obj = {};

						$scope.availableType = [ "Names", "Phone Number",
								"Email", "Id", "CompanyName", "Position" ];

						$scope.addAnother = function() {
							$scope.objProp.push({
								name : "",
								type : ""
							});
						};
						
						$scope.removeField = function(value){
							$scope.objProp.splice($scope.objProp.indexOf(value),1);
						}

						$scope.genrator = function() {

							for (var i = 0; i < $scope.numOfCounts; i++) {

								$scope.random = Math
										.floor((Math.random() * 60) + 1);

								if ($scope.random != undefined) {

									angular
											.forEach(
													$scope.objProp,
													function(item) {

														switch (item.type) {

														case "Names":
															$scope.obj[item.name] = $scope.randomNames[$scope.random];
															break;
														case "Phone Number":
															$scope.obj[item.name] = $scope.phone[$scope.random];
															break;
														case "Email":
															$scope.obj[item.name] = $scope.email[$scope.random];
															break;
														case "CompanyName":
															$scope.obj[item.name] = $scope.companyName[$scope.random];
															break;
														case "Id":
															$scope.obj[item.name] = $scope.random;
															break;
														case "Position":
															$scope.obj[item.name] = $scope.position[$scope.random];
															break;

														}

													});
								}
								console.log($scope.obj);
								$scope.result.push(angular.copy($scope.obj));

							}
							console.log($scope.result);
						};

					});

})();