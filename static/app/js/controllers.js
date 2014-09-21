'use strict';

/* Controllers */


function MyCtrl1($scope) {
	var scene, camera, render, container, controls;      	// var light;	// var info = false;	// var infoMercury = false;
    var W,H;
	
	W = parseInt(document.body.clientWidth);
	H = parseInt(document.body.clientHeight);

	container = document.createElement('div');
	document.body.appendChild(container);

	camera = new THREE.PerspectiveCamera(45,W/H,1,10000);
	camera.position.z = 6300;
    camera.rotation.z = -Math.PI/20;
	scene = new THREE.Scene();

	//sun
    var sun_geom = new THREE.SphereGeometry(750,70,70),

    texture = new THREE.ImageUtils.loadTexture('img/sun2.png');
    texture.anisotropy = 8;
    var  sun_mat = new THREE.MeshPhongMaterial({map:texture,emissive:0xffffff}),
         sun = new THREE.Mesh(sun_geom,sun_mat);

    scene.add(sun);

    //earth
    var earth_geom = new THREE.SphereGeometry(100,60,60),
        texture2 = new THREE.ImageUtils.loadTexture('img/earth.jpg');
        texture2.anisotropy = 8;

    var earth_mat = new THREE.MeshPhongMaterial({map:texture2}),        //,emissive:0xffffff //,emissive:0x0000000
        earth = new THREE.Mesh(earth_geom,earth_mat);
        earth.castShadow = true;

    scene.add(earth);

    // stars
    var starsGeometry = new THREE.Geometry();
    var starsMaterial = new THREE.ParticleBasicMaterial({opacity:0.4,color:0xbbbbbb,size:1,sizeAttenuation:false});
    var stars; //real partice object

    for(var i=0;i<15000;i++){
        var vertex = new THREE.Vector3();
        vertex.x = Math.random()*2-1;
        vertex.y = Math.random()*2-1;
        vertex.z = Math.random()*2-1;
        vertex.multiplyScalar(6000);
        starsGeometry.vertices.push(vertex);
    }

    stars = new THREE.ParticleSystem(starsGeometry,starsMaterial);
    stars.scale.set(2,2,2);
    scene.add(stars);

    var starsGeometry2 = new THREE.Geometry();
    var starsMaterial2 = new THREE.ParticleBasicMaterial({opacity:0.8,color:0xbbbbbb,size:1,sizeAttenuation:false});
    var stars2; //real partice object

    for(var i=0;i<5000;i++){
        var vertex = new THREE.Vector3();
        vertex.x = Math.random()*2-1;
        vertex.y = Math.random()*2-1;
        vertex.z = Math.random()*2-1;
        vertex.multiplyScalar(6000);
        starsGeometry2.vertices.push(vertex);
    }

    stars2 = new THREE.ParticleSystem(starsGeometry2,starsMaterial2);
    stars2.scale.set(1,2,4);
    scene.add(stars2);

    // Light
    var ambient = new THREE.AmbientLight(0x222222);
    scene.add(ambient);

    var light = new THREE.PointLight(0xbbbbbb,0.8,10000);
        light.position.set(0,0,500);
        light.castShadow = true;
        light.shadowMapWidth = 2048;
        light.shadowMapHeight = 2048;
    scene.add(light);

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

        t+=Math.PI/180*2;
        render.render(scene,camera);
    }
}

MyCtrl1.$inject = ['$scope'];











//////////////////////////////////////// test particles
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
    var starsMaterial = new THREE.ParticleBasicMaterial({color:0xcccccc,size:1,sizeAttenuation:false});
    var stars; //real partice object

    for(var i=0;i<5000;i++){
        var vertex = new THREE.Vector3();
        vertex.x = Math.random()*2-1;
        vertex.y = Math.random()*2-1;
        vertex.z = Math.random()*2-1;
        vertex.multiplyScalar(6000);
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
            //  requestAnimationFrame(animate);
            //  sun.rotation.y+=0.002;

            //  earth.rotation.y+=0.002;
            //  earth.position.x = Math.sin(t*0.2)*2000;
            //  earth.position.z = Math.cos(t*0.2)*1700;

            //  camera angle-view experiments
            //  camera.lookAt(earth.position);

            //  camera.position.x = earth.position.x;
            //  camera.position.z = earth.position.z;
            //  camera.lookAt(sun.position);

            //  camera.position.y = y*5;
            //  camera.lookAt(scene.position);

            //  t+=Math.PI/180*2;
            //  render.render(scene,camera);
    }
}
MyCtrl2.$inject = [];