<template>
  <div class="my-page">
    <div class="my-page__header">
      <div class="title bold">마이페이지</div>
      <Icon name="close" @click="SET_CURRENT_ASIDE('CHAT')" />
    </div>
  </div>
</template>
<script>
import Icon from "@/components/basic/Icon.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  components: {
    Icon,
  },
  methods: {
    ...mapMutations("header", ["SET_CURRENT_ASIDE"]),
  },
};
</script>
<style lang="scss" scoped>
@import "@/style";
.my-page {
  &__header {
    padding: 24px 16px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--color-gray-10);
    & > .title {
      font-size: 18px;
      line-height: 21px;
    }
  }
}
</style>
