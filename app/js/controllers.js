'use strict';

/* Controllers */


function MyCtrl1($scope) {
	var scene, camera, render, container, controls;
	var W,H;
	
	// var light;	// var info = false;	// var infoMercury = false;
	
	W = parseInt(document.body.clientWidth);
	H = parseInt(document.body.clientHeight);

	container = document.createElement('div');
	document.body.appendChild(container);

	camera = new THREE.PerspectiveCamera(45,W/H,1,10000);
	camera.position.z = 6300;
	scene = new THREE.Scene();
	
	
	//sun
    var sun_geom = new THREE.SphereGeometry(430,30,30),
        sun_mat = new THREE.MeshNormalMaterial(),
        sun = new THREE.Mesh(sun_geom,sun_mat);

    scene.add(sun);

    //earth
    var earth_geom = new THREE.SphereGeometry(100,30,30),
        earth_mat = new THREE.MeshNormalMaterial(),
        earth = new THREE.Mesh(earth_geom,earth_mat);
        earth.position.x = 1500;

    scene.add(earth);
	////////////////////////////
	
	
	
	////////////////////////////
	render = new THREE.WebGLRenderer({antialias: true});
	render.setSize(W,H);
	container.appendChild(render.domElement); // console.log(container) // console.log(scene)

    var t=0,y=0;

    document.addEventListener('mousemove',function(event){
          y = parseInt(event.offsetY);
    });

    animate();

    function animate(){
        requestAnimationFrame(animate);
        sun.rotation.y+=0.002;

        earth.rotation.y+=0.002;
        earth.position.x = Math.sin(t*0.2)*2000;
        earth.position.z = Math.cos(t*0.2)*1700;

// camera angle-view experiments
//   camera.lookAt(earth.position);

//   camera.position.x = earth.position.x;
//   camera.position.z = earth.position.z;
//   camera.lookAt(sun.position);

        camera.position.y = y*5;
        camera.lookAt(scene.position);

        t+=Math.PI/180*2;

        render.render(scene,camera);
    }
}

MyCtrl1.$inject = ['$scope'];


function MyCtrl2() {
    var scene, camera, render, container, controls;
    var W,H;  // var light;	// var info = false;	// var infoMercury = false;

    W = parseInt(document.body.clientWidth);
    H = parseInt(document.body.clientHeight);

    container = document.createElement('div');
    document.body.appendChild(container);

    camera = new THREE.PerspectiveCamera(45,W/H,1,1000000);
    camera.position.z = 1;
    scene = new THREE.Scene();

    var starsGeometry = new THREE.Geometry();
    var starsMaterial = new THREE.ParticleBasicMaterial({size:1,sizeAttenuation:false});
    var stars; //real partice object

    for(var i=0;i<5000;i++){
        var vertex = new THREE.Vector3();
        vertex.x = Math.random()*2-1;
        vertex.y = Math.random()*2-1;
        vertex.z = Math.random()*2-1;
//        vertex.multiplyScalar(6000);
        starsGeometry.vertices.push(vertex);
    }

    stars = new THREE.ParticleSystem(starsGeometry,starsMaterial);
    scene.add(stars);

    ////////////////////////////
    render = new THREE.WebGLRenderer({antialias: true});
    render.setSize(W,H);
    container.appendChild(render.domElement); // console.log(container) // console.log(scene)


    animate();

    function animate(){
        requestAnimationFrame(animate);
        render.render(scene,camera);
    }
}
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