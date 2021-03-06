$(document).ready(function(){
	$("#addCoursesDemo").click(function(){
		$("#addCoursesDemo").fadeOut(1);
		$("#addCoursesText").fadeIn();
		$("#addCoursesButton").fadeIn();
		$('#closeButton').fadeIn();
	});
});
$(document).ready(function(){
	$("#resetPrompt").click(function(){
		$('#resetPrompt').fadeOut(1);
		$('.resetAll').fadeIn();
	});
	$("#backToPrompt").click(function(){
		$(".resetAll").fadeOut(1);
		$("#resetPrompt").fadeIn();
	});
	$("#resetDone").click(function(){
		$(".resetAll").fadeOut(1);
		$("#resetPrompt").fadeIn();
	});
});

// app.js 
var app = angular.module("myApp", []);

// mainController.js
app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Keep track of your attendance'; 
  $scope.plusOne = function(index) {    // function that add number of absent
  	$scope.courses[index].noOfAbsents += 1; 
  	localStorage.setItem('courses', JSON.stringify($scope.courses)); // stores no of absent locally
	};
	$scope.minusOne = function(index) {   // function that substract number of absent
  	$scope.courses[index].noOfAbsents -= 1; 
  	localStorage.setItem('courses', JSON.stringify($scope.courses)); // stores no of absent locally
	};
	$scope.resetAll = function(){
		$scope.courses = [];   // deletes all the values from the array
		localStorage.setItem('courses', JSON.stringify($scope.courses)); // saves array locally
	}
	/*$scope.delOne = function(index){
		var ind = $scope.courses.indexOf(index);
		if (ind > -1)
			$scope.courses.splice(ind,1);
		localStorage.setItem('courses', JSON.stringify($scope.courses));
	};*/

	$scope.saved = localStorage.getItem('courses'); // get locally saved variable
	$scope.courses = (localStorage.getItem('courses')!==null) ? JSON.parse($scope.saved) : [ ]; // conversion to display correctly
	localStorage.setItem('courses', JSON.stringify($scope.courses)); // stores courses array locally
	$scope.addCourse = function() {
		var x = document.getElementById('addCoursesText').value;
		$scope.courses.push({name:x,noOfAbsents:0});
		document.getElementById('addCoursesText').value = "";
		localStorage.setItem('courses', JSON.stringify($scope.courses)); // stores courses array locally
	};
	$scope.close = function() {
		$("#addCoursesText").fadeOut(1);
		$("#addCoursesButton").fadeOut(1);
		$('#closeButton').fadeOut(1);
		$("#addCoursesDemo").fadeIn();
	};

}]); 

 