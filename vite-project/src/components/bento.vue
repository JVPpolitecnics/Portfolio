<template>
  <div v-if="imgPath && title && imgLogo && detail && text">
    <div class="container">
      <h1 class="p-4 jockey">{{ title }}</h1>

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