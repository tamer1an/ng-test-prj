'use strict';

/* Controllers */


function MyCtrl1($scope) {
	
	var scene, camera, render, container, controls;
	var W,H;
	var light;
	var info = false;
	var infoMercury = false;
	
	W = parseInt(document.body.clientWidth);
	H = parseInt(document.body.clientHeight);

	container = document.createElement('div');
	document.body.appendChild(container);

	camera = new THREE.PerspectiveCamera(45,W/H,1,1000000);
	camera.position.z = 20000;
	scene = new THREE.Scene();
	
	
	
	render = new THREE.WebGLRenderer({antialias: true});
	render.setSize(W,H);
	container.appendChild(render.domElement);
	
	// console.log(container)
	// console.log(scene)
}

MyCtrl1.$inject = [];


function MyCtrl2() {}
MyCtrl2.$inject = [];













/*
	function TodoCtrl($scope) {
		  $scope.todos = [
			{text:'learn angular', done:true},
			{text:'build an angular app', done:false}];

		  $scope.addTodo = function() {
			$scope.todos.push({text:$scope.todoText, done:false});
			$scope.todoText = '';
		  };

		  $scope.remaining = function() {
			var count = 0;
			angular.forEach($scope.todos, function(todo) {
			  count += todo.done ? 0 : 1;
			});
			return count;
		  };

		  $scope.archive = function() {
			var oldTodos = $scope.todos;
			$scope.todos = [];
			angular.forEach(oldTodos, function(todo) {
			  if (!todo.done) $scope.todos.push(todo);
			});
		  };
		}
*/