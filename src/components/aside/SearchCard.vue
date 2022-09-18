<template>
  <div
    :class="{
      'search-card': true,
      'bg-gray-80': card_type === 'DONE',
      'bg-green': card_type !== 'DONE',
    }"
  >
    <div class="search-card__body">
      <div class="title">{{ title }}</div>
      <div class="sub-title">{{ subTitle }}</div>
    </div>
  </div>
</template>
<script>
// card background color를 정하는 기준이 뭔지 몰라서 해당 작업은 스킵
export default {
  props: {
    card_type: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.bg-gray-80 {
  background: var(--color-gray-80);
}
.bg-green {
  background: var(--color-green);
}
.search-card {
  width: 100%;
  max-width: 452px;
  height: 71px;
  margin-bottom: 16px;
  // border: 1px solid #eaeaea;
  box-shadow: 0px 4px 4px rgba(216, 222, 226, 0.2);
  border-radius: 8px;
  padding-left: 4px;
  // background: #11d200;
  &__body {
    background: var(--color-white);
    border: 1px solid #eaeaea;
    box-shadow: 0px 1px 3px rgba(96, 108, 128, 0.05);
    border-radius: 8px;
    width: 100%;
    height: 100%;
    padding: 16px;
    & > .title {
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
      margin-bottom: 8px;
    }
    & > .sub-title {
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
    }
  }
}
</style>
