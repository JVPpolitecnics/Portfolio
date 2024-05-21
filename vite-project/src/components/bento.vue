<template>
  <div v-if="imgPath && title && imgLogo && detail && text">
    <div class="container">

      <div class="row">
        <h1 class="col-md-10 p-4 jockey">{{ title }}</h1>
        <div class="col-md-2" @click="goBack()">
          <svg height="80px" width="80px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
          viewBox="0 0 38.273 38.273" xml:space="preserve">
     <g>
         <path style="fill:#FFFFFF;" d="M20.621,10.484V5.84c0-0.808-0.458-1.548-1.181-1.909c-0.722-0.359-1.589-0.279-2.236,0.206
             l-9.486,7.147c-0.677,0.292-1.117,0.67-1.401,1.058l-5.468,4.119C0.312,16.866-0.003,17.501,0,18.173
             c0.002,0.673,0.322,1.305,0.862,1.706l16.355,12.133c0.646,0.48,1.51,0.554,2.23,0.191c0.72-0.362,1.174-1.1,1.174-1.905v-5.517
             c0.013,0,0.025,0,0.038,0c3.842,0,10.687,1.089,13.366,8.386c0.311,0.846,1.116,1.397,2.001,1.397c0.079,0,0.157-0.004,0.236-0.013
             c0.975-0.108,1.751-0.868,1.88-1.84c0.052-0.394,1.208-9.682-4.461-16.23C30.621,12.948,26.235,10.935,20.621,10.484z
              M20.659,20.515c-1.443,0-2.379,0.132-2.482,0.146c-1.046,0.154-1.822,1.053-1.822,2.111v3.287l-10.66-7.907l3.555-2.678
             c0.136-0.104,0.259-0.222,0.365-0.351c0.155-0.068,0.301-0.152,0.437-0.254l6.303-4.75v2.401c0,1.168,0.939,2.119,2.108,2.134
             c5.345,0.063,9.374,1.61,11.975,4.6c1.442,1.658,2.314,3.602,2.835,5.469C28.923,21.038,23.424,20.515,20.659,20.515z"/>
     </g>
     </svg>
      </div>
      </div>
     
      <!-- Top full-width block -->
      <div class="p-4 row">
        <div class="p-2 col-md-6 bento col-xs-12">
          <img class="col-md-12 col-xs-12 p-4 img-fluid round" :src="imgPath" alt="IMAGE">
        </div>
        <div class="col-md-6 bento">
          <div class="row p-2">
            <div>
              <div class="row">
                <p class="p-4 noto">{{ text }}</p>

              </div>
              <div class="container">
                <div class="row">
                  <div class="col-4">
                    <object data="stack/javascript.svg" class="img-fluid"></object>
                  </div>
                  <div class="col-4">
                    <object data="stack/html.svg" class="img-fluid"></object>
                  </div>
                  <div class="col-4">
                    <object data="stack/css.svg" class="img-fluid"></object>
                  </div>
                </div>
                <div class="row">
                  <div class="col-4">
                    <object data="stack/php.svg" class="img-fluid"></object>
                  </div>
                  <div class="col-4">
                    <object data="stack/vue.svg" class="img-fluid"></object>
                  </div>
                  <div class="col-4">
                    <object data="stack/laravel.svg" class="img-fluid"></object>
                  </div>
                </div>
                <div class="row">
                  <div class="col-4">
                    <object data="stack/mysql.svg" class="img-fluid mt-3"></object>
                  </div>
                  <div class="col-4">
                    <object data="stack/spring.svg" class="img-fluid"></object>
                  </div>
                  <div class="col-4">
                    <object data="stack/kafka.svg" class="img-fluid"></object>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>


      <!-- Two half-width blocks -->
      <div class="row">
        <div class="col-md-12 ">
          <div class="row">

            <img class="col-6 p-5 bento img-fluid round" :src="imgLogo" alt="LOGO">
            <img class="col-6  p-5 bento img-fluid round" :src="detail" alt="IMAGE">

          </div>
        </div>

      </div>
      <!-- Bottom full-width block -->
      <div class="row">
        <div class="col-12 bento">


          <div class="row">

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
    title: String,
    imgLogo: String,
    detail: String,
    text: String
  },
  methods: {
    goBack(){
      this.$emit("go-back", true);
    }
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
  background-color: #1E1E1E;
  border-radius: 5%;


}

.left-margin {
  margin-right: 10px;
  /* Right margin for the left block */
}

.right-margin {
  margin-left: 10px;
  /* Left margin for the right block */
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

.round {
  border-radius: 15%;
}


#mainImage {

  height: 68%;
  border-radius: 5%;
  width: auto;

}

#mainTitle {
  position: absolute;
  text-align: center;
  width: 350px;
  top: 40px;
  left: 280px;
}

#textBox {

  background-color: #404040;
  border-radius: 6.5%;

}

#laravel {
  position: relative;
  top: 18px;
}

.tech {
  margin-left: 30px;
}
</style>