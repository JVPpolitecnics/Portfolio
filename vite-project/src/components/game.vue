<template>
<div>
  <main class="bento">
  <div class="bento__container" variant-3>
    <div class="bento__item" style="--rows: span 2; --columns: 1 / -1;">
      <span data-tilt>
        <img id="mainImage" src="/game/game.gif" alt="IMAGE">
        <img id="secondImage" src="/game/db.gif" alt="IMAGE">
        <div id="textBox">
<p class="noto">This was a group project in which we were tasked with creating a web based gaming platform. I was in charge of creating the DB, setting up a PHP PDO, user control, rankings, whilst also designing the way we bridged the information between JS and PHP. I also created a game in the fashion of where is Waldo.</p>
        </div>
      </span>
    
    <h1 class="jockey" id="mainTitle">Cientifics en joc</h1>
  </div>
    
    <div class="bento__item" style="--rows: span 2;">
      <h4 class="jockey descriptionBoxText">Logo</h4>
<img id="logo" src="/game/logoCientifiks.png" alt="LOGO">
    </div>
    <div class="bento__item" style="--rows: span 2;"><h4 class="jockey descriptionBoxText">Highlight</h4>
      <img id="imgHighlight" src="/game/gameHighlight.gif" alt="IMAGE"></div>
    <div class="bento__item" style="--columns: 1 / -1;"> 
      <div class="stackContainer">
      <object class="tech" data="stack/javascript.svg" width="40" height="100"> </object>
      <object class="tech"  data="stack/html.svg" width="50" height="100"> </object>
      <object class="tech" data="stack/css.svg" width="50" height="100"> </object>
      <object id="php" data="stack/php.svg" width="120" height="100"> </object>
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
.stackContainer{
  margin-left: 20%;
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
  grid-template-rows:  4fr 1fr 2fr 2fr 1fr 2fr;
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
    margin-top: 15.5%;
    margin-left: 4%;
    border-radius: 5%;
    height: 55%;
}
#logo{
  margin-top: 15.5%;
    margin-left: 3%;
    max-width: 92%;
    max-height: 80%;
    border-radius: 13%;
}
#mainImage{
  position: absolute;
    height: 12%;
    border-radius: 5%;
    width: auto;
    margin-top: 15%;
    margin-left: 248px;
    margin-bottom: 2%;
}
#secondImage{
  position: absolute;
    height: 14%;
    border-radius: 5%;
    width: auto;
    margin-top: 47%;
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
    height: 377px;
    width: 210px;
    border-radius: 5%;
    background-color: #404040;
}
#php{
  position: relative;
  top: 18px;
  margin-left: 22px;
}
.tech{
  margin-left: 30px;
}
  </style>
  
 
  