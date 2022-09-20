<template>
  <div class="my-page">
    <div class="my-page__header">
      <div class="title bold">마이페이지</div>
      <Icon name="close" @click="SET_CURRENT_ASIDE('CHAT')" />
    </div>
    <div class="my-page__body">
      <div class="profile-image">
        <Icon name="profile" />
        <Button
          text="프로필 이미지 변경"
          :classList="['btn-border-gray', 'md']"
        />
        <Anchor text="프로필 삭제" />
      </div>
    </div>
  </div>
</template>
<script>
import Icon from "@/components/basic/Icon.vue";
import Button from "@/components/basic/Button.vue";
import Anchor from "@/components/basic/Anchor.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  components: {
    Icon,
    Button,
    Anchor,
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
  &__body {
    padding: 24px 16px;
    & > .profile-image {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
      & > img {
        width: 126px;
        height: 126px;
      }
    }
  }
}
</style>
