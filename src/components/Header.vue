<template>
  <header id="header">
    <div class="title">BOARD</div>
    <div class="option">
      <Icon :name="'search'" />
    </div>
  </header>
</template>

<script>
import Icon from "@/components/basic/Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      image:
        '<img svg-inline svg-sprite alt="bell icon" src="@/assets/icons/icon_bell.svg"  />',
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
  padding: 16px 32px;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & .title {
    font-size: 16;
    font-weight: bold;
    color: var(--color-primary);
  }
}
</style>
