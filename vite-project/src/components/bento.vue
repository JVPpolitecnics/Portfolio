<template>
  <div v-if="imgPath && title">
    <div class="container text-center">
      <div class="row">

        <div class="col-12 col-sm-12 bento__container">

          <div class="row">
            <div class="col-md-6">
            </div>
            <div class="col-md-6 col-sm-12">
              <div id="textBox">
                <p class="noto">This was a school project in which, alongside 3 other school collegues, we were asked to
                  design an application,
                  functionning in a similar fashion to UberEats or Glovo, but putting in tough volunteer riders
                  willing to commit some of their spare time, taking surplus food from rtestaurants to our users,
                  people who struggle with access to a warm meal and find themselves living in the streets.
                  I focused mainly in Vue.js with API calls, whilst I also dipped my fingers in designing some of the
                  API's with Laravel.
                  I would then go and further develop my Laravel skills in other personal projects.</p>
              </div>
            </div>


          </div>

        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {

  },
  data() {
    return {
      message: 'Hello from MyComponent!'
    };
  },
  props: {
    imgPath: String,
    title: String
  }
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

p {
  margin-top: 5px;
  margin-left: 15px;
  margin-right: 15px;
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

.bento {
  min-block-size: 100vh;
  display: flex;
  flex-wrap: wrap;
  gap: 2ch;
  padding: 2ch;
}

.bento__container {
  display: grid;
  grid-template-rows: 4fr 1fr 1fr 2fr 1fr 2fr;
  gap: 1.5ch;
  min-height: inherit;
  flex: 2 0 627px;
}



.bento__container {
  background-color: #1E1E1E;
  border-radius: 5%;
}

.bento__item {
  height: 100%;
  width: 100%;
  grid-column: var(--columns, span 1);
  grid-row: var(--rows, span 1);
  background-color: var(--bg);
  border-radius: 1rem;
}

.descriptionBoxText {
  position: absolute;
  margin-left: 20px;
  margin-top: 4px;
}

#logo {
  margin-top: 15%;
  margin-left: 10%;
  max-width: 80%;
  max-height: 80%;
}

#mainImage {
  position: absolute;
  margin: 20px
}

#mainTitle {
  position: absolute;
  text-align: center;
  width: 350px;
  top: 40px;
  left: 280px;
}

#textBox {
  position: absolute;
  top: 99px;
  left: 270px;
  height: 371px;
  width: 350px;
  border-radius: 5%;
  background-color: #404040;
}

#laravel {
  position: relative;
  top: 18px;
}

.tech {
  margin-left: 30px;
}
</style>