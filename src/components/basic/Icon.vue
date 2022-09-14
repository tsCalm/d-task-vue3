<!--
  사용하고 있는 svg-loader가 v-bind를 지원하지 않아 어쩔 수 없이 각각의 icon을 선언
-->
<template>
  <img
    v-if="name === 'search'"
    svg-inline
    svg-sprite
    alt="Vue logo"
    src="../../assets/icons/icon_search.svg"
  />
  <img
    v-else-if="name === 'chevron-down'"
    svg-inline
    svg-sprite
    alt="Vue logo"
    src="../../assets/icons/icon_chevron-down.svg"
  />
  <img
    v-else-if="name === 'chevron-up'"
    svg-inline
    svg-sprite
    alt="Vue logo"
    src="../../assets/icons/icon_chevron-up.svg"
  />
  <img
    v-else-if="name === 'close'"
    svg-inline
    svg-sprite
    alt="Vue logo"
    src="../../assets/icons/icon_close.svg"
  />
  <img
    v-else-if="name === 'empty'"
    svg-inline
    svg-sprite
    alt="Vue logo"
    src="../../assets/icons/icon_empty.svg"
  />
  <img
    v-else-if="name === 'folder'"
    svg-inline
    svg-sprite
    alt="Vue logo"
    src="../../assets/icons/icon_folder.svg"
  />
  <img
    v-else-if="name === 'login-bg-bottom'"
    svg-inline
    svg-sprite
    alt="Vue logo"
    src="../../assets/icons/icon_login-bg-bottom.svg"
  />
  <img
    v-else-if="name === 'login-bg-top'"
    svg-inline
    svg-sprite
    alt="Vue logo"
    src="../../assets/icons/icon_login-bg-top.svg"
  />
  <img
    v-else-if="name === 'logo'"
    svg-inline
    svg-sprite
    alt="Vue logo"
    src="../../assets/icons/icon_logo.svg"
  />
  <img
    v-else-if="name === 'logout'"
    svg-inline
    svg-sprite
    alt="Vue logo"
    src="../../assets/icons/icon_logout.svg"
  />
  <img
    v-else-if="name === 'profile'"
    svg-inline
    svg-sprite
    alt="Vue logo"
    src="../../assets/icons/icon_profile.svg"
  />
  <img
    v-else-if="name === 'send'"
    svg-inline
    svg-sprite
    alt="Vue logo"
    src="../../assets/icons/icon_send.svg"
  />
  <img
    v-else-if="name === 'twitter'"
    svg-inline
    svg-sprite
    alt="Vue logo"
    src="../../assets/icons/icon_twitter.svg"
  />
  <img
    v-else-if="name === 'user-group'"
    svg-inline
    svg-sprite
    alt="Vue logo"
    src="../../assets/icons/icon_user-group.svg"
  />
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang=""></style>
