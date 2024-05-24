<template>
    <div class="row mt-5">
        <div class="col-md-4"></div>

        <h1 class="col-md-4 jockey text-center">Hi I'm Jack</h1>
        <div ref="sceneContainer" class="scene-container"></div>
    </div>



    <div class="row">
        <div class="col-md-3"></div>
        <p class="col-12 col-md-6 txt noto">I'm a multilingual Junior Web Developer, and Visual Artist, with an Art
            Masters in a French leading institution, which gave me the opportunity to travel around the world and master
            French as a foreign language.
            I'm currently carrying out my web-dev studies in a vocational school based in my hometown, Barcelona.
            I was born in a bilingual family my father being from the UK and my mother from Barcelona. I believe that
            this gives me a competitive edge when it comes to learning, whilst also giving me great adaptability in
            multicultural work environments.
            I'm passionate about culture, arts, tech, problem-solving, and environmentally friendly businesses. I also
            enjoy the guilty pleasure of eating, and thereby cooking.
            I am currently seeking a job in full-stacks developpement. Please do not hesitate to contact me.</p>
    </div>
    
           
      
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


export default {
    mounted() {
        this.initThreeJS();
    },
    methods: {
        initThreeJS() {
            // Set up scene
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setClearColor(0x14151F);
            this.$refs.sceneContainer.appendChild(renderer.domElement);

            // Set up lights
            const ambientLight = new THREE.AmbientLight(0x404040, 34); // stronger soft white light
            scene.add(ambientLight);
            const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.5);
            directionalLight1.position.set(5, 5, 5).normalize();
            scene.add(directionalLight1);
            const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
            directionalLight2.position.set(-5, -5, -5).normalize();
            scene.add(directionalLight2);
            const pointLight = new THREE.PointLight(0xffffff, 0.5, 100);
            pointLight.position.set(0, 10, 10);
            scene.add(pointLight);

            // Set up GLTF loader
            const loader = new GLTFLoader();
           
            loader.load('3d.glb', (gltf) => {
                const model = gltf.scene;
                model.scale.set(2.5, 2.5, 2.5); // Adjust scale to make the model bigger
                scene.add(model);

                // Store the model for animation
                this.model = model;

                // Start the animation loop
                this.animate(scene, camera, renderer);
            }, undefined, (error) => {
                console.error('Error loading GLTF model:', error);
            });

            // Set up camera position
            camera.position.z = 5;

            // Resize listener
            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });

            // Set up OrbitControls for better scene interaction
            const orbitControls = new OrbitControls(camera, renderer.domElement);
        },
        animate(scene, camera, renderer) {
            requestAnimationFrame(() => this.animate(scene, camera, renderer));

            // Rotate the model around its Y-axis
            if (this.model) {
                this.model.rotation.y += 0.01;
            }

            renderer.render(scene, camera);
        }
    }
};
</script>

<style scoped>
.txt {
    position: absolute;
    top: 65%;
    left: 26%;
}
.linkedin{
    position: absolute;
    top: 90%;
    left: 41%;
}
.noto {
    font-family: 'Noto', sans-serif;
    font-size: 16px;
    color: #EBEBD3;
    text-align: justify;
}

.jockey {
    font-family: 'Jockey', sans-serif;
    font-weight: 600;
    color: #EBEBD3;
}

@font-face {
    font-family: 'Jockey';
    src: url('assets/JockeyOne-Regular.ttf') format('ttf'),
        /* Modern Browsers */
        url('assets/JockeyOne-Regular.ttf') format('ttf');
    /* Legacy Browsers */
    /* Optionally, you can specify font-weight and font-style */
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Noto';
    src: url('assets/NotoSans-Regular.ttf') format('ttf'),
        /* Modern Browsers */
        url('assets/NotoSans-Regular.ttf') format('ttf');
    /* Legacy Browsers */
    /* Optionally, you can specify font-weight and font-style */
    font-weight: normal;
    font-style: normal;
}

.scene-container {
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
}

@media (max-width: 600px) {
    .txt {
        position: absolute;
        top: 72%;
        left: 0%;
    }
    .linkedin{
    position: absolute;
    top: 90%;
    left: 41%;
}
}
</style>
