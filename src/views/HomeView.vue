<template>
  <div class="home">
    <SideBar />
    <Container col>
      <Header />
      <Container row>
        <Main />
        <Aside />
      </Container>
    </Container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue"; // @ is an alias to /src
import SideBar from "@/components/SideBar.vue";
import Container from "@/components/Container.vue";
import Aside from "@/components/Aside.vue";
import Main from "@/components/Main.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    // HelloWorld,
    Header,
    SideBar,
    Container,
    Aside,
    Main,
  },
});
</script>
<style>
.home {
  width: 100%;
  height: 100%;
  display: flex;
}
</style>
