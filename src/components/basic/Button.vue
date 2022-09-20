<template>
  <button :class="defaultClassList">
    {{ text }}
    <Loding v-if="loding" class="ml-8" />
    <Icon v-if="isDone" class="ml-8" name="chevron-down" />
  </button>
</template>
<script>
import Loding from "@/components/basic/Loding.vue";
import Icon from "@/components/basic/Icon.vue";

export default {
  props: {
    classList: {
      type: Array,
      required: false,
      default: () => {
        return ["btn-default", "lg"];
      },
    },
    text: {
      type: String,
      required: true,
    },
    loding: {
      type: Boolean,
      required: false,
      default: false,
    },
    isDone: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  components: {
    Loding,
    Icon,
  },
  computed: {
    defaultClassList() {
      const classList = this.classList || [];
      classList.push("default-opt");
      return classList;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/style";

$lg-padding: 16px;
$md-padding: 8px;
$default-hover-color: #0857f1;
$default-active-color: #1149b5;
.default-opt {
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-default {
  color: var(--color-white);
  background: var(--color-primary);
  &:hover {
    background: $default-hover-color;
  }
  &:active {
    background: $default-active-color;
  }
}
.btn-border {
  color: var(--color-primary);
  background: var(--color-white);
  border: 1px solid var(--color-primary);
  &:hover {
    background: rgba(37, 99, 235, 0.1);
    border: 1px solid $default-hover-color;
    color: $default-hover-color;
  }
  &:active {
    background: rgba(37, 99, 235, 0.1);
    border: 1px solid $default-active-color;
    color: $default-active-color;
  }
  &-gray {
    color: var(--color-gray-60);
    background: var(--color-white);
    border: 1px solid var(--color-gray-20);
    &:hover {
      background: rgba(128, 127, 128, 0.1);
      border: 1px solid var(--color-gray-30);
      color: var(--color-gray-70);
    }
    &:active {
      background: rgba(128, 127, 128, 0.1);
      border: 1px solid var(--color-gray-40);
      color: var(--color-gray-80);
    }
  }
}
.disabled {
  cursor: none;
  background: var(--color-gray-5);
  color: var(--color-gray-20);
}
.lg {
  padding: $lg-padding;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
}
.md {
  padding: $md-padding;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
}
.btn-done {
  padding: $md-padding;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: var(--color-white);
  background: var(--color-green);
}
.ml-8 {
  margin-left: 8px;
}
</style>
