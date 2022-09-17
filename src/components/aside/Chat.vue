<template>
  <div class="chat">
    <div class="chat__title bold">CHAT</div>
    <div class="chat__content"></div>
    <Input :keyword="keyword" />
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
    ...mapGetters(["AsideModule", "keyword"]),
  },
};
</script>
<style lang="scss" scoped>
@import "@/style";
.chat {
  height: 100%;
  padding: 24px 16px;
  &__title {
    height: 24px;
  }
  &__content {
    border: 1px solid blue;
  }
}
</style>
