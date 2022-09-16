<template>
  <div class="input-wrap">
    <input class="input-wrap__input" type="text" />
    <Icon class="input-wrap__icon" v-if="name" :name="name" />
  </div>
</template>
<script>
import Icon from "@/components/basic/Icon.vue";

export default {
  props: {
    name: String,
    required: false,
  },
  components: {
    Icon,
  },
};
</script>
<style lang="scss" scoped>
.input-wrap {
  width: 100%;
  height: 56px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  position: relative;
  border: 2px solid var(--color-primary);
  border-radius: 5px;
  &__input {
    width: 100%;
    max-width: 263px;
    font-size: 16px;
    border: none;
    outline: none;
  }
  &__icon {
    position: absolute;
    size: 24px;
    right: 16px;
    bottom: 14px;
  }
}
</style>
