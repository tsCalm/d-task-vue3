<template>
  <router-view />
</template>
<style lang="scss">
@import "@/style";
* {
  margin: 0;
  padding: 0;
}
*,
:after,
:before {
  box-sizing: border-box;
  flex-shrink: 0;
}
:root {
  -webkit-tap-highlight-color: transparent;
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
  cursor: default;
  line-height: 1.5;
  overflow-wrap: break-word;
  word-break: break-word;
  tab-size: 4;
}
html,
body {
  height: 100%;
  width: 100%;
  font-family: "Pretendard", sans-serif;
  color: var(--color-gray-100);
}
#app {
  width: 100%;
  height: 100%;
}
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}
button {
  background: none;
  border: 0;
  cursor: pointer;
}
a {
  text-decoration: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
ul,
li {
  list-style: none;
}
</style>
