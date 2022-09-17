<template>
  <header id="header">
    <div class="title">BOARD</div>
    <ul class="svg-container">
      <li class="search">
        <Input
          name="search"
          :isFocus="isSearchMode"
          :keyword="keyword"
          :class="{ 'input-wrap': true, 'input-focus': isSearchMode }"
          @iconClick="SET_SEARCH_MODE(!isSearchMode)"
          @updateKeyword="SET_SEARCH_KEYWORD"
          @keyupEnter="search(keyword)"
        />
      </li>
      <li v-for="name in iconNames" @click="changeAside(name)">
        <Icon :name="name" />
        <div v-if="name === 'bell'" class="dot"></div>
      </li>
    </ul>
  </header>
</template>

<script>
import Icon from "@/components/basic/Icon";
import Input from "@/components/basic/Input.vue";
import { createNamespacedHelpers } from "vuex";
import { AsideName } from "@/common/enum.type";
const { mapGetters, mapMutations, mapActions } =
  createNamespacedHelpers("header");
export default {
  components: {
    Icon,
    Input,
  },
  data() {
    return {
      iconNames: ["bell", "profile"],
    };
  },
  mounted() {
    console.log(this.keyword);
  },
  computed: {
    ...mapGetters(["isSearchMode", "keyword"]),
  },
  methods: {
    ...mapMutations([
      "SET_SEARCH_MODE",
      "SET_SEARCH_KEYWORD",
      "SET_CURRENT_ASIDE",
    ]),
    ...mapActions(["search"]),
    changeAside(iconName) {
      const result = {
        bell: AsideName.SEARCH,
        profile: AsideName.MYPAGE,
      };
      if (!result[iconName]) return;
      this.SET_CURRENT_ASIDE(result[iconName]);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/style";

#header {
  width: 100%;
  height: 100%;
  max-height: 80px;
  padding: 16px 0 16px 32px;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & .title {
    font-size: 16;
    font-weight: bold;
    color: var(--color-primary);
  }
  & .search {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 316px;
    height: 56px;
    & > .input-wrap {
      border: 1px solid var(--color-white);
      border-radius: 5px;
      width: 100%;
      height: 56px;
      padding: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
    }
    & > .input-focus {
      border: 1px solid var(--color-primary);
    }
  }
  & .svg-container {
    width: 100%;
    max-width: 480px;
    display: flex;
    align-items: center;
    & > li {
      position: relative;
      margin-right: 16px;
    }
    li:last-child {
      margin-left: 16px;
    }
  }
}
</style>
