<template>
  <!--
    keypress 이벤트의 경우 키를 누른 상태로 가만히 있으면 계속 이벤트 발생
    keydown 이벤트의 경우 누른 상태로 키보드에서 손을 때야 이벤트 발생
  -->
  <div class="custom-input" @click="this.$refs.input.focus()">
    <label class="custom-input__label" for="input"> {{ label }} </label>
    <div class="custom-input-box">
      <!-- 
        :disabled="!isFocus"
        :class="!isFocus ? 'input-wrap__input' : 'input-wrap__input-default'"
        ref="input"
        v-model="keyword"
        @input="inputEvent"
        @keyup.enter="keyupEnter"
      
        v-if="iconName"
        :name="iconName"
      -->
      <input class="custom-input-box__input" name="input" type="text" />
      <Icon class="custom-input-box__icon" name="bell" @click="onClick" />
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
    border: 1px solid #d5d4d5;
    border-radius: 10px;
    // width: 100%;

    &__input {
      flex: 1;
      font-size: 16px;
      color: var(--color-gray-20);
      border: none;
      outline: none;
    }
    &__icon {
      // position: absolute;
      width: 24px;
      height: 24px;
      size: 24px;
      right: 16px;
    }
  }
  &:hover {
    &-box {
      background: red;
      border: 1px solid #1463fd;
      /* input/focus */

      filter: drop-shadow(0px 0px 8px rgba(20, 99, 253, 0.2));
      &__input {
        color: #000 !important;
      }
    }
  }
}
// .input-wrap {
//   &__input {
//     width: 100%;
//     height: 19px;
//     max-width: 263px;
//     font-size: 16px;
//     border: none;
//     outline: none;
//     &:disabled {
//       background: var(--color-white);
//     }
//   }
//   &__input-default {
//     width: 100%;
//     height: 19px;
//     font-size: 16px;
//     border: none;
//     outline: none;
//   }
//   &__icon {
//     position: absolute;
//     size: 24px;
//     right: 16px;
//   }
// }
</style>
