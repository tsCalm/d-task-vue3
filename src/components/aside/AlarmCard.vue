<template>
  <div class="alarm-card-container cursor-pointer">
    <div class="user-info">
      <Icon name="profile" />
      <div class="user-name bold">{{ userName }}</div>
    </div>
    <div class="title-container pl-40">
      <div class="title">
        {{ title }}
      </div>
      <div class="created-at">
        {{ createdAt.toLocaleDateString() }}
      </div>
    </div>
    <div class="sub-title pl-40">{{ subTitle }}</div>
  </div>
</template>
<script>
import Icon from "@/components/basic/Icon.vue";

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: false,
    },
    createdAt: {
      type: Date,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    profileImg: {
      type: String,
      required: false,
    },
  },
  components: {
    Icon,
  },
};
</script>
<style lang="scss" scoped>
@import "@/style";
.pl-40 {
  padding-left: 40px;
}
.alarm-card-container {
  border: 1px solid var(--color-gray-10);
  border-radius: 8px;
  width: 100%;
  padding: 16px;
  &:hover {
    background: var(--color-gray-10);
  }
  & > .user-info {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-bottom: 8px;
    & > img {
      width: 32px;
      height: 32px;
    }
    & > .user-name {
    }
  }
  & > .title-container {
    display: flex;
    justify-content: space-between;
  }
  & > .sub-title {
    color: var(--color-gray-40);
    margin-top: 8px;
  }
}
</style>
