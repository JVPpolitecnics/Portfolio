<template>

</template>
<script>
import {
    Scene, WebGLRenderer, PerspectiveCamera,
    Mesh, BoxGeometry, MeshNormalMaterial,
    Line, LineBasicMaterial, Vector3, BufferGeometry
} from "https://unpkg.com/three@0.121.1/build/three.module.js";


export default {
    mounted() {
        this.init();
    },
    methods: {
        init() {
            const factor = { value: 0 }
            let currentPosition = 0;
            let targetPosition = 0;

            const renderer = new WebGLRenderer({
                antialias: true
            });
            document.body.appendChild(renderer.domElement);

            const camera = new PerspectiveCamera();
            camera.position.set(0, 0, 5);

            addEventListener("mousewheel", (e) => {
                targetPosition += Math.sign(e.wheelDelta) * 5;

                targetPosition = Math.max(Math.min(0, targetPosition), -20)
            });

            const scene = new Scene();

            for (let i = 0; i < 5; i++) {
                let box = new Mesh(new BoxGeometry(), new MeshNormalMaterial());
                box.position.y = -i * 5
                scene.add(box)
            }

            const lineMaterial = new LineBasicMaterial({
                color: 0xffffff
            });

            lineMaterial.onBeforeCompile = (mat) => {
                mat.uniforms.factor = factor;
                mat.vertexShader = mat.vertexShader
                    .split("#include <common>")
                    .join(`uniform float factor;\n` + "#include <common>")
                    .split("#include <begin_vertex>")
                    .join(`
                float dy = float(gl_VertexID) * factor * 2.0;
                vec3 transformed = vec3( position.x, position.y + dy, position.z );
            `)
            }

            const lineGeometry = new BufferGeometry().setFromPoints([
                new Vector3(0, -0.1, 0),
                new Vector3(0, 0.1, 0)
            ]);

            for (let i = 0; i < 100; i++) {
                const line = new Line(lineGeometry, lineMaterial);
                line.position.x = Math.random() * 5 - 2.5;
                line.position.z = Math.random() * 5 - 2.5;
                line.position.y = -Math.random() * 25 + 2.5;
                line.scale.multiplyScalar(0.05)
                scene.add(line)
            }

            requestAnimationFrame(function render(t) {
                if (renderer.width !== innerWidth || renderer.height !== innerHeight) {
                    renderer.setSize(innerWidth, innerHeight);
                    camera.aspect = innerWidth / innerHeight;
                    camera.updateProjectionMatrix();
                }
                t = t / 1000;
                scene.rotation.y = camera.position.y * 0.314;
                factor.value = targetPosition - currentPosition;
                currentPosition += 0.01 * (factor.value);
                currentPosition = Math.max(Math.min(0, currentPosition), -20)
                camera.position.y = currentPosition;
                renderer.render(scene, camera);
                requestAnimationFrame(render);
            });

        }
    }
}

</script>
<style></style>
