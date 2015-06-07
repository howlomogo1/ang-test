var myModule = angular.module("myModule", []);

myModule.controller('myController', function($scope){
	$scope.customers = [
		{ "name" : "Bob" },
		{ "name" : "Mike" },
		{ "name" : "Matt" },
		{ "name" : "Rich" }
	];
});

myModule.controller("otherCtrl", function($scope) {
	$scope.users = [
		{"name": "Bill"},
		{"name": "Sally"}
	];
});