<template>
 <main class="bento">
  <div class="bento__container" variant-3>
    <div class="bento__item" style="--rows: span 2; --columns: 1 / -1;"></div>
    <div class="bento__item" style="--rows: span 2;"></div>
    <div class="bento__item" style="--rows: span 2;"></div>
    <div class="bento__item" style="--columns: 1 / -1;"></div>
    <div class="bento__item" style="--columns: 1 / -1;"></div>
  </div>
</main>
  </template>
  
  <style>
  * {
  margin: 0; padding: 0;
  box-sizing: border-box;
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
  grid-template-rows: 3fr 1fr 1fr 2fr 2fr 3fr;
  gap: 1ch;
  min-height: inherit;
  flex: 2 0 320px;
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
  --bg: #72F286;
  grid-template-columns: 1fr 1fr;
}

.bento__item {
  height: 100%; width: 100%;
  grid-column: var(--columns, span 1);
  grid-row: var(--rows, span 1);
  background-color: var(--bg);
  border-radius: 1rem;
}

  </style>
  
  <script>
 
  </script>
  