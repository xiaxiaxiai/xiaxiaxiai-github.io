import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loader/OBJLoader.js';
import { OrbitControls  } from 'three/addons/controls/OrbitControls.js';
/**
           * 创建场景对象Scene
        */
 var draws = document.getElementById("3dss");

 var scene = new THREE.Scene();

 var loader = new OBJLoader();
 loader.load('../model/one2.obj', function (obj) {
	 obj.scale.set(5,5,5);
    obj.position.set(0,0,10);
    obj.rotateX(-1);
    scene.add(obj);
 });
 const width = 500
 const height = 500
 var light = new THREE.HemisphereLight(0xffffff, 0x444444);
 light.position.set(0, 200, 0);
 scene.add(light);
 light = new THREE.DirectionalLight(0xffffff);
 light.position.set(0, 200, 100);
 light.castShadow = true;
 light.shadow.camera.top = 180;
 light.shadow.camera.bottom = - 100;
 light.shadow.camera.left = - 120;
 light.shadow.camera.right = 120;
 scene.add(light);

 var camera = new THREE.PerspectiveCamera(45, 1, 1, 10000);
 camera.position.set(0, 20, 20);
 
 /**
  * 创建渲染器对象
  */
 var renderer = new THREE.WebGLRenderer();
 renderer.setSize(width, height);//设置渲染区域尺寸
 renderer.setClearColor(0xb9d3ff, 0); //设置背景颜色
 var controls =new OrbitControls(camera, renderer.domElement);
 controls.autoRotate  = true // 是否开启右键拖拽
 controls.enablePan = false;

 draws.appendChild(renderer.domElement); 
 var y_gd=100;
 //执行渲染操作   指定场景、相机作为参数
 function animate() {
	 requestAnimationFrame(animate);
    renderer.render(scene, camera);
 }
 animate()