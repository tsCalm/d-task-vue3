<template>
  <!--
    keypress 이벤트의 경우 키를 누른 상태로 가만히 있으면 계속 이벤트 발생
    keydown 이벤트의 경우 누른 상태로 키보드에서 손을 때야 이벤트 발생
  -->
  <div class="custom-input" @click="this.$refs.input.focus()">
    <label class="custom-input__label" for="input"> {{ label }} </label>
    <div class="custom-input-box">
      <input
        class="custom-input-box__input"
        :placeholder="placeHolder"
        name="input"
        ref="input"
        type="text"
      />
      <button class="input-btn" @click="test">
        <Icon class="custom-input-box__icon" name="bell" @click="onClick" />
      </button>
    </div>
  </div>
</template>
<script>
import Icon from "@/components/basic/Icon.vue";

export default {
  props: {
    iconName: {
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
    label: {
      type: String,
      required: false,
    },
    placeHolder: {
      type: String,
      required: false,
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
    test() {
      console.log("test!!");
    },
    onClick() {
      this.$emit("iconClick");
    },
    inputEvent(event) {
      this.$emit("updateKeyword", event.target.value);
    },
    keyupEnter(event) {
      // props에서 default값을 ""로 잡았기 때문에 아래는 안전하다
      if (this.keyword.trim()) this.$emit("keyupEnter");
    },
  },
};
</script>
<style lang="scss" scoped>
.custom-input {
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 4px;
  &__label {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: var(--color-gray-80);
  }
  &-box {
    display: flex;
    justify-content: center;
    padding: 18px 16px;
    border: 1px solid var(--color-gray-20);
    border-radius: 10px;
    // width: 100%;
    // &:focus .custom-input-box {
    //   background: var(--color-bg-active);
    // }
    &__input {
      flex: 1;
      font-size: 16px;
      // color: var(--color-gray-20);
      color: var(--color-black);
      border: none;
      outline: none;
      background: inherit;
      &::placeholder {
        color: var(--color-gray-20);
        font-size: 16px;
      }
    }
    &__icon {
      // position: absolute;
      width: 24px;
      height: 24px;
      size: 24px;
      filter: invert(94%) sepia(0%) saturate(21%) hue-rotate(106deg)
        brightness(97%) contrast(81%);
      // right: 16px;
    }
    &:hover:enabled {
      border: 1px solid var(--color-primary);
      box-shadow: (0px 0px 8px rgba(20, 99, 253, 0.2));
    }
    &:focus-within,
    &__input:focus {
      background: var(--color-bg-active);
    }
    &:has(input:disabled) {
      background: var(--color-gray-5);
    }
  }
}
.input-btn:disabled {
  cursor: not-allowed;
}
.input-btn:active:hover > img {
  filter: invert(23%) sepia(91%) saturate(3332%) hue-rotate(220deg)
    brightness(92%) contrast(106%);
}
.input-btn:focus > img {
  filter: invert(24%) sepia(86%) saturate(1814%) hue-rotate(203deg)
    brightness(87%) contrast(94%);
}
.input-btn:focus > .custom-input-box__input {
  background: var(--color-bg-active);
}
</style>
