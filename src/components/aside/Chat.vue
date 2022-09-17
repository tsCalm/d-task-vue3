<template>
  <div class="chat">
    <div class="chat__title bold">CHAT</div>
    <div class="chat__content"></div>
    <Input class="chat-input" :keyword="keyword" :name="'bell'" />
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
    // max-width: 316px;
    height: 56px;
  }
}
</style>
