<template>
  <main>
    <div class="test-1">
      <Input label="testLabel"></Input>
    </div>
    <div class="test-1"></div>
    <div class="test-1"></div>
  </main>
</template>
<script>
import Input from "@/components/basic/Input.vue";

export default {
  components: {
    Input,
  },
};
</script>
<style lang="scss" scoped>
main {
  flex: 1;
  width: 100%;
}
.test-1 {
  width: 400px;
}
</style>
