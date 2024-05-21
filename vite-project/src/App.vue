<template>
  <div>
    <vid v-if="!stopVideo" @play-game="handlePlayGame"></vid>
    <loading v-if="isLoading && !isVideo && stopVideo"></loading>

    <div v-show="isGame && !isVideo">
      <h5 id="title" class="jockey">Jack Vickery Pérez the Web Developper</h5>
      <h1 id="buttonCV" class="jockey">CV</h1>
      <h1 id="buttonStudies" class="jockey">Studies</h1>
      <h1 id="buttonProjects" class="jockey">Projects</h1>
      <h1 id="buttonHobbies" class="jockey">Hobbies</h1>

      <div id="outsideContainer"
        :style="{ position: 'relative', zIndex: 10, height: height + 'px', width: width + 'px' }">

      </div>
    </div>
    <div v-show="isGame && !isVideo" ref="matterContainer" id="container"
      :style="{ position: 'relative', zIndex: 10, height: height + 'px', width: width + 'px' }"></div>

    <div v-if="!isLoading && !isGame && screenToShow && screenToShow == 5">
      <h1>{{ screenToShow }}</h1>
      <projects v-if="!particullarProject && particullarProject!=0" class="col-12 full" @show-bento="handleParituclarProject"></projects>
      <div v-if="particullarProject != null" class="bentoDisplay">

        <bento style="margin-bottom: 2%;" class="col-12 full" :imgPath="mainImages[particullarProject]"
          :imgLogo="logos[particullarProject]" :detail="highlightImg[particullarProject]"
          :title="titles[particullarProject]"
          :text="text[particullarProject]">
        </bento>
        <!-- <bento style="margin-bottom: 2%;" class="col-12 full" :imgPath="'/restaurant/Restaurant.gif'" :imgLogo="'/restaurant/restaurantLogo.png'" :detail="'/restaurant/za.gif'" :title="'Restaurant Order Management System'" :text="'Here I practiced vanilla JS web components, by creating an order and bill management system for an imaginary restaurant.'"></bento> -->
      </div>






      <!-- <restaurant class="bentoDisplay"></restaurant> -->
      <!-- <game class="bentoDisplay"></game> -->
    </div>

    <div v-if="!isLoading && !isGame && screenToShow == 3">


      <cv class="col-12 full  text-center"></cv>
    </div>

  </div>
</template>

<script>
import Matter from 'matter-js';
import loading from './components/icons/loading.vue';
import rocket from './components/rocket.vue'
import bento from './components/bento.vue'
import restaurant from './components/restaurant.vue'
import game from './components/game.vue';
import vid from './components/video.vue';
import cv from './components/cv.vue'
import projects from './components/projects.vue';

export default {
  created() {

  },
  mounted() {
    this.handleScreenSize();
    this.showGame();
    this.setupMatter();
    window.addEventListener('resize', this.fitViewportToScene);

  },
  data() {
    return {
      isVideo: true,
      isGame: false,
      isLoading: true,
      screenWidth: window.innerWidth,
      height: null,
      width: null,
      stopVideo: null,
      screenToShow: null,
      particullarProject: null,
      titles: ['Restaurant Order Management System', 'FoodLink', 'Videogame: Cientifiks en joc' ],
      mainImages: ['/restaurant/Restaurant.gif', '/foodLink/Group.png', '/game/game.gif'],
      logos: ['/restaurant/restaurantLogo.png', '/foodLink/FoodLinkLOGO.png', '/game/logoCientifiks.png'],
      highlightImg: ['/restaurant/za.gif', 'null', '/game/gameHighlight.gif'],
      text: ['Here I practiced vanilla JS web components, by creating an order and bill management system for an imaginary restaurant.', "This was a school project in which, alongside 3 other school collegues, we were asked to design an application, functionning in a similar fashion to UberEats or Glovo, but putting in tough volunteer riderswilling to commit some of their spare time, taking surplus food from rtestaurants to our users,  people who struggle with access to a warm meal and find themselves living in the streets.  I focused mainly in Vue.js with API calls, whilst I also dipped my fingers in designing some of the API's with Laravel. I would then go and further develop my Laravel skills in other personal projects.", "This was a group project in which we were tasked with creating a web based gaming platform. I was in charge of creating the DB, setting up a PHP PDO, user control, rankings, whilst also designing the way we bridged the information between JS and PHP. I also created a game in the fashion of where is Waldo."]

    }
  },
  components: {
    loading,
    rocket,
    bento,
    restaurant,
    game,
    vid,
    cv,
    projects
  },
  methods: {
    handleParituclarProject(projectId) {
      this.particullarProject = projectId
    },
    handlePlayGame(play) {
      this.isVideo = false;
      this.stopVideo = play;
    },
    showGame() {
      setTimeout(() => {
        this.isLoading = false;
        this.isGame = true;
        console.log("the game should be loaded:" + this.isGame);
      }, 8000);
    },
    handleScreenSize() {
      if (this.screenWidth > 1200) {
        this.width = 1000;
        this.height = 900;
      }
      else if (this.screenWidth > 992 && this.screenWidth <= 1200) {
        this.width = 1300;
        this.height = 700;
      } else if (this.screenWidth > 768 && this.screenWidth <= 992) {
        this.width = 800;
        this.height = 700;
      } else if (this.screenWidth > 576 && this.screenWidth <= 768) {
        this.width = 600;
        this.height = 700;
      } else if (this.screenWidth <= 576) {
        this.width = 430;
        this.height = 900;
      }
    },
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
      let xPosition = 300;
      let yPosition = 450;
      // Create engine
      const engine = Engine.create();
      const world = engine.world;

      // Create renderer
      const render = Render.create({
        element: this.$refs.matterContainer,
        engine: engine,

        options: {
          width: this.width, // change width
          height: this.height, // change height
          wireframes: false
        }
      });






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


      const circle1 = Bodies.circle(130, 120, 50, { isStatic: true, originalColor: '#000', collisionColor: createGradient('#28104E', '#9754CB', '#DEACF5') });
      const circle2 = Bodies.circle(250, 100, 50, { isStatic: true, originalColor: '#000', collisionColor: createGradient('#28104E', '#9754CB', '#DEACF5') });
      const circle3 = Bodies.circle(390, 100, 50, { isStatic: true, originalColor: '#000', collisionColor: createGradient('#28104E', '#9754CB', '#DEACF5') });
      const circle4 = Bodies.circle(510, 120, 50, { isStatic: true, originalColor: '#000', collisionColor: createGradient('#28104E', '#9754CB', '#DEACF5') });

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
            if (!this.screenToShow) {
              this.screenToShow = pair.bodyB.id
            }
            setTimeout(() => {
              this.isGame = false;
            }, 1000);
            console.log('Collision between', pair.bodyA, 'and', pair.bodyB);

          }

        });
      });
      World.add(engine.world, [rock, elastic, circle1, circle2, circle3, circle4]);

      let updated = false;
      Events.on(engine, 'afterUpdate', function () {
        if (rock.position.x > xPosition || rock.position.y < yPosition) {
          updated = false;
        };
        if (mouseConstraint.mouse.button === -1 && (rock.position.y < yPosition - 10) && !updated) {
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
    },
    fitViewportToScene() {
      const containerWidth = this.$refs.matterContainer.offsetWidth;
      const containerHeight = this.$refs.matterContainer.offsetHeight;

      // Update the size of the rendering area
      Render.setPixelRatio(this.render, window.devicePixelRatio);
      Render.canvasSize(this.render, containerWidth, containerHeight);
      Render.lookAt(this.render, {
        min: { x: 0, y: 0 },
        max: { x: containerWidth, y: containerHeight }
      });
      // Scale up elements based on the container size
      const scale = Math.min(containerWidth / 1000, containerHeight / 800);
      Matter.Composite.allBodies(this.engine.world).forEach(body => {
        if (body.render && body.render.sprite) {
          Matter.Body.scale(body, scale, scale);
          body.render.sprite.xScale *= scale;
          body.render.sprite.yScale *= scale;
        }
      });

    }

  }
};
</script>

<style scoped>
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

.full {
  width: 100vw;
}

.bentoDisplay {
  position: relative;
  top: 10%;
}

#titleContainer {
  position: relative;
  top: 10%;
}

#title {
  font-size: 96px;
  position: absolute;
  z-index: 11;
  left: 97%;
  top: 27%;
  height: 10%;
  width: 70%;
  text-align: center;
}

#container {
  position: relative;
  z-index: 10;

}

.jockey {
  font-family: 'Jockey', sans-serif;
  font-weight: 600;
  color: #EBEBD3;
}

#buttonCV {
  position: absolute;
  z-index: 11;
  top: 10%;
  left: 14%;
}

#buttonStudies {
  position: absolute;
  z-index: 11;
  top: 8%;
  left: 25.5%;
}

#buttonProjects {
  position: absolute;
  z-index: 11;
  top: 8%;
  left: 43%;
}

#buttonHobbies {
  position: absolute;
  z-index: 11;
  top: 10%;
  left: 58%;
}

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
