<template>
  <div class="chat">
    <div class="chat__title bold">CHAT</div>
    <div class="chat__content"></div>
    <Input class="chat-input" :keyword="keyword" name="send" isFocus="true" />
  </div>
</template>
<script>
import Input from "@/components/basic/Input.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapGetters } = createNamespacedHelpers("aside");
export default {
  components: {
    Input,
  },
  computed: {
    ...mapGetters(["keyword"]),
  },
};
</script>
<style lang="scss" scoped>
@import "@/style";
.chat {
  height: 100%;
  padding: 24px 16px;
  display: flex;
  gap: 24px;
  flex-direction: column;
  &__title {
    height: 24px;
  }
  &__content {
    border: 1px solid var(--color-gray-10);
    border-radius: 10px;
    flex: 1;
  }
  & > .chat-input {
    display: flex;
    align-items: center;
    width: 100%;
    height: 56px;
    border: 1px solid var(--color-gray-40);
    border-radius: 5px;
    padding: 0 16px;
  }
}
</style>
