<template>
  <div>
    <input
      class="input-wrap__input"
      type="text"
      ref="cursor"
      :disabled="!isFocus"
    />
    <Icon class="input-wrap__icon" v-if="name" :name="name" @click="onClick" />
  </div>
</template>
<script>
import Icon from "@/components/basic/Icon.vue";

export default {
  props: {
    name: {
      type: String,
      required: false,
    },
    isFocus: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  components: {
    Icon,
  },
  watch: {
    isFocus(newData, oldData) {
      if (!newData) {
        console.log(newData);
        this.$refs.cursor.focus();
      }
    },
  },
  methods: {
    onClick() {
      this.$emit("iconClick");
    },
  },
};
</script>
<style lang="scss" scoped>
.input-wrap {
  &__input {
    width: 100%;
    height: 19px;
    max-width: 263px;
    font-size: 16px;
    border: none;
    outline: none;
    &:disabled {
      background: var(--color-white);
    }
  }
  &__icon {
    position: absolute;
    size: 24px;
    right: 16px;
  }
}
</style>
