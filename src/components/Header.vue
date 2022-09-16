<template>
  <header id="header">
    <div class="title">BOARD</div>
    <ul class="svg-container">
      <li class="search">
        <Input name="search" />
      </li>
      <li v-for="name in iconNames">
        <Icon :name="name" />
        <div v-if="name === 'bell'" class="dot"></div>
      </li>
    </ul>
  </header>
</template>

<script>
import Icon from "@/components/basic/Icon";
import Input from "@/components/basic/Input.vue";

export default {
  components: {
    Icon,
    Input,
  },
  data() {
    return {
      iconNames: ["bell", "profile"],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/style";

#header {
  width: 100%;
  height: 100%;
  max-height: 80px;
  padding: 16px 0 16px 32px;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & .title {
    font-size: 16;
    font-weight: bold;
    color: var(--color-primary);
  }
  & .search {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 316px;
    height: 56px;
  }
  & .svg-container {
    width: 100%;
    max-width: 480px;
    display: flex;
    align-items: center;
    & > li {
      position: relative;
      margin-right: 16px;
    }
    li:last-child {
      margin-left: 16px;
    }
  }
}
</style>
