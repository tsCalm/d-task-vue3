<template>
  <div class="search">
    <div class="search-header">
      <div class="search-header__box">
        <div class="bold">검색 결과</div>
        <div class="count">3</div>
      </div>
      <Icon
        class="search-header__icon"
        name="close"
        @click="SET_CURRENT_ASIDE('CHAT')"
      ></Icon>
    </div>
    <div class="search-body">
      <SearchCard
        v-for="item in searchList"
        :card_type="item.card_type"
        :title="item.title"
        :subTitle="item.sub_title"
      />
    </div>
  </div>
</template>
<script>
import Icon from "@/components/basic/Icon.vue";
import SearchCard from "@/components/aside/SearchCard.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  components: {
    Icon,
    SearchCard,
  },
  computed: {
    ...mapGetters("aside", ["searchCount", "searchList"]),
    ...mapMutations("header", ["SET_CURRENT_ASIDE"]),
  },
};
</script>
<style lang="scss" scoped>
.search {
  &-header {
    display: flex;
    justify-content: space-between;
    padding: 24px 16px;
    border-bottom: 1px solid var(--color-gray-40);
    &__box {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 101px;
      & > .count {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10px;
        font-weight: 800;
        background-color: var(--color-gray-10);
        width: 24px;
        height: 24px;
        border-radius: 10px;
      }
    }
  }
  &-body {
    padding: 16px 24px;
  }
}
</style>
