<template>
  <div>
    <input
      :disabled="!isFocus"
      class="input-wrap__input"
      type="text"
      ref="input"
      v-model="keyword"
      @input="inputEvent"
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
    keyword: {
      type: String,
      required: true,
      default: () => {
        return "";
      },
    },
  },
  components: {
    Icon,
  },
  beforeUpdate() {
    if (this.isFocus) {
      // template에 미리 disabled처리가 된 이후 focus 함수가 실행되어 focus함수가 작동하지 않는것 처럼 보임
      this.$refs.input.disabled = !this.isFocus;
      this.$refs.input.focus();
    }
  },
  methods: {
    onClick() {
      this.$emit("iconClick");
    },
    inputEvent(event) {
      this.$emit("updateKeyword", event.target.value);
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
