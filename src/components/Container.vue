<template>
  <div :class="`container ${row ? 'row' : 'col'}`">
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    row: {
      type: Boolean,
      required: false,
      default: false,
    },
    col: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  // max-width: 100%;
  flex: 1;
  display: flex;
  &.col {
    flex-direction: column;
  }
  &.row {
    flex-direction: row;
  }
}
</style>
