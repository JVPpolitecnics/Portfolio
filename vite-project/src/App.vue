<template>
  <div>
    <div v-if="isGame" ref="matterContainer" id="container"></div>

  </div>
</template>

<script>
import Matter from 'matter-js';


export default {
  mounted() {
    this.setupMatter();
    window.addEventListener('resize', this.fitViewportToScene);
  },
  data() {
    return {
      isGame: true,
    }
  },
  methods: {
    setupMatter() {
      const Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composites = Matter.Composites,
        Events = Matter.Events,
        Constraint = Matter.Constraint,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World,
        Bodies = Matter.Bodies;
      let xPosition = 371;
      let yPosition = 451;
      // Create engine
      const engine = Engine.create();
      const world = engine.world;

      // Create renderer
      const render = Render.create({
        element: this.$refs.matterContainer,
        engine: engine,
        options: {
          width: window.innerWidth,
          height: window.innerHeight,
          wireframes: false
        }
      });

      function fitViewportToScene() {
        Render.lookAt(render, {
          min: { x: 0, y: 0 },
          max: { x: window.innerWidth, y: window.innerHeight }
        });
      }

      // Call fitViewportToScene initially and on window resize
      fitViewportToScene();


      Render.run(render);

      // Create runner
      const runner = Runner.create();
      Runner.run(runner, engine);

      // Add bodies

      const rockOptions = { density: 0.004 };
      let rock = Bodies.polygon(xPosition, yPosition, 8, 20, rockOptions);
      const anchor = { x: xPosition, y: yPosition };
      const elastic = Constraint.create({
        pointA: anchor,
        bodyB: rock,
        stiffness: 0.05
      });
      const createGradient = (color1, color2, color3) => {
        const gradient = render.context.createLinearGradient(0, 0, 0, 50);
        gradient.addColorStop(0, color1);
        gradient.addColorStop(0.5, color2);
        gradient.addColorStop(1, color3);
        return gradient;
      };


      const circle1 = Bodies.circle(100, 60, 40, { isStatic: true, originalColor: '#000', collisionColor: createGradient('#28104E', '#9754CB', '#DEACF5') });
      const circle2 = Bodies.circle(400, 50, 40, { isStatic: true, originalColor: '#000', collisionColor: createGradient('#28104E', '#9754CB', '#DEACF5') });
      const circle3 = Bodies.circle(700, 50, 40, { isStatic: true, originalColor: '#000', collisionColor: createGradient('#28104E', '#9754CB', '#DEACF5') });

      Events.on(engine, 'collisionStart', (event) => {
        const pairs = event.pairs;

        // Iterate through collision pairs
        pairs.forEach((pair) => {
          // Handle collision logic here
          // For example, you can log the collided bodies
          console.log('hit');

          if (pair.bodyA.label == 'Circle Body' && pair.bodyB.label == 'Polygon Body' || pair.bodyA.label == 'Polygon Body' && pair.bodyB.label == 'Circle Body') {
            if (pair.bodyA.label === 'Circle Body') {
              pair.bodyA.render.fillStyle = pair.bodyA.collisionColor;
            }
            if (pair.bodyB.label === 'Circle Body') {
              pair.bodyB.render.fillStyle = pair.bodyB.collisionColor;
            }
            setTimeout(() => {
              this.isGame = false;
            }, 1000);
            console.log('Collision between', pair.bodyA, 'and', pair.bodyB);

          }

        });
      });
      World.add(engine.world, [rock, elastic, circle1, circle2, circle3]);

      let updated = false;
      Events.on(engine, 'afterUpdate', function () {
        if (rock.position.x > xPosition || rock.position.y < yPosition) {
          updated = false;
        };
        if (mouseConstraint.mouse.button === -1 && (rock.position.y < yPosition -10) && !updated) {
          rock = Bodies.polygon(xPosition, yPosition, 8, 20, rockOptions);
          World.add(engine.world, rock);
          elastic.bodyB = rock;
          updated = true;
        }
      });

      // Add mouse control
      const mouse = Mouse.create(render.canvas);
      const mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      });

      World.add(world, mouseConstraint);

      // Keep the mouse in sync with rendering
      render.mouse = mouse;

      // Fit the render viewport to the scene
      Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: 800, y: 600 }
      });

      // Store references to Matter objects for later use if needed
      this.engine = engine;
      this.runner = runner;
      this.render = render;
    }
  }
};
</script>

<style scoped>
 * {
    position: absolute;
    top: 0;
    left: 0;
    }

    body {
      margin: 0;
      padding: 0;
    }
</style>
