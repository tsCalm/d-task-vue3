<template>
  <a class="anchor" :href="href">
    {{ text }}
  </a>
</template>
<script>
export default {
  props: {
    href: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.anchor {
}
</style>
