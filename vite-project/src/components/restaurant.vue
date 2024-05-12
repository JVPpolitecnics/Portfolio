<template>
<div>
  <main class="bento">
  <div class="bento__container" variant-3>
    <div class="bento__item" style="--rows: span 2; --columns: 1 / -1;">
      <span data-tilt>
        <img id="mainImage" src="/restaurant/Restaurant.gif" alt="IMAGE">
        <div id="textBox">
<p class="noto">Here I practiced vanilla JS web components, by creating an order and bill management system for an imaginary restaurant.</p>
        </div>
      </span>
    
    <h1 class="jockey" id="mainTitle">ZA Order Management</h1>
  </div>
    
    <div class="bento__item" style="--rows: span 2;">
      <h4 class="jockey descriptionBoxText">Logo</h4>
<img id="logo" src="/restaurant/restaurantLogo.png" alt="LOGO">
    </div>
    <div class="bento__item" style="--rows: span 2;"><h4 class="jockey descriptionBoxText">Highlight</h4>
      <img id="imgHighlight" src="/restaurant/za.gif" alt="IMAGE"></div>
    <div class="bento__item" style="--columns: 1 / -1;"> 
      <div class="stackContainer">
      <object class="tech" data="stack/javascript.svg" width="40" height="100"> </object>
      <object class="tech"  data="stack/html.svg" width="50" height="100"> </object>
      <object class="tech" data="stack/css.svg" width="50" height="100"> </object>
    </div>
    </div>
  </div>
</main>
</div>
  </template>
   <script>
 export default {
  created(){

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
  margin: 0; padding: 0;
  box-sizing: border-box;
}

p {
  margin-top: 45px;
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
.stackContainer{
  margin-left: 10%;
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

.bento__container[variant-1] {
  --bg: #837AED;
  grid-template-columns: 3fr 1fr 2fr;
}

.bento__container[variant-2] {
  --bg: #F272AC;
  grid-template-columns: 2fr 3fr 1fr 2fr;
}

.bento__container[variant-3] {
  --bg: #1E1E1E;
  grid-template-columns: 1fr 1fr;
}

.bento__item {
  height: 100%; width: 100%;
  grid-column: var(--columns, span 1);
  grid-row: var(--rows, span 1);
  background-color: var(--bg);
  border-radius: 1rem;
}

.descriptionBoxText{
  position: absolute;
  margin-left: 20px;
  margin-top: 4px;
}
#imgHighlight{
  position: relative;
  margin-top: 10%;
}
#logo{
  margin-top: 15%;
  margin-left: 10%;
  max-width: 80%;
  max-height: 80%;
  border-radius: 13%;
}
#mainImage{
  position: absolute;
    height: 28.7%;
    border-radius: 5%;
    width: auto;
    margin-top: 25%;
    margin-left: 248px;
}

#mainTitle{
  position: absolute;
  text-align: center;
  width: 350px;
  top: 40px;
  left: 280px;
}
#textBox{
  position: absolute;
    top: 99px;
    left: 35px;
    height: 361px;
    width: 210px;
    border-radius: 5%;
    background-color: #404040;
}
#laravel{
  position: relative;
  top: 18px;
}
.tech{
  margin-left: 30px;
}
  </style>
  
 
  