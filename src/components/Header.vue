<template>
  <header id="header">
    <div class="title">BOARD</div>
    <div class="option">ICON</div>
  </header>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
#header {
  width: 100%;
  height: 100%;
  max-height: 80px;
  padding: 16px 32px;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & .title {
    font-size: 16;
    font-weight: bold;
  }
}
</style>
