<template>
  <aside>
    <Search v-if="currentAside === AsideName.SEARCH" />
    <MyPage v-else-if="currentAside === AsideName.MYPAGE" />
    <Chat v-else />
  </aside>
</template>
<script>
import Chat from "./aside/Chat.vue";
import Search from "./aside/Search.vue";
import MyPage from "./aside/MyPage.vue";
import { mapGetters } from "vuex";
import { AsideName } from "@/common/enum.type";

export default {
  components: {
    Chat,
    Search,
    MyPage,
  },
  data() {
    return {
      AsideName,
    };
  },
  computed: {
    ...mapGetters(["currentAside"]),
  },
};
</script>
<style lang="scss" scoped>
aside {
  width: 100%;
  max-width: 480px;
  border: 1px solid red;
}
</style>
