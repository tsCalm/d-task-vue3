<template>
  <div class="alarm">
    <div class="alarm__header">
      <div class="alarm__header-container">
        <div class="title bold">알림</div>
        <div class="count">3</div>
      </div>
      <Icon
        class="alarm__header__icon"
        name="close"
        @click="SET_CURRENT_ASIDE('CHAT')"
      ></Icon>
    </div>
    <div class="alarm__body">
      <div class="alarm__body-container">
        <p class="title bold">오늘</p>
        <AlarmCard
          v-for="alarm in todayAlarm"
          :title="alarm.event_title"
          :subTitle="alarm.event_sub_title"
          :createdAt="alarm.created_at"
          :userName="alarm.user.name"
          :profileImg="alarm.user.pf_img?.location"
        />
      </div>
      <div class="alarm__body-container">
        <p class="title bold gray-60">이전</p>
        <AlarmCard
          v-for="alarm in previousAlarm"
          :title="alarm.event_title"
          :subTitle="alarm.event_sub_title"
          :createdAt="alarm.created_at"
          :userName="alarm.user.name"
          :profileImg="alarm.user.pf_img?.location"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Icon from "@/components/basic/Icon.vue";
import AlarmCard from "@/components/aside/AlarmCard.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  components: {
    Icon,
    AlarmCard,
  },
  computed: {
    ...mapGetters("aside", ["previousAlarm", "todayAlarm"]),
  },
  methods: {
    ...mapMutations("header", ["SET_CURRENT_ASIDE"]),
  },
};
</script>
<style lang="scss" scoped>
.alarm {
  &__header {
    padding: 24px 16px;
    width: 100%;
    border-bottom: 1px solid var(--color-gray-40);
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-container {
      max-width: 62px;
      height: 22px;
      display: flex;
      gap: 8px;
      justify-content: space-between;
      & > .title {
        font-size: 18px;
        height: 21px;
        line-height: 21px;
      }
      & > .count {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 22px;
        height: 22px;
        background: var(--color-red);
        border-radius: 16px;
        color: var(--color-white);
      }
    }
  }
  &__body {
    padding: 24px 16px;
    &-container {
      margin-bottom: 24px;
      & > .title {
        font-size: 18px;
        margin-bottom: 16px;
      }
      & > .gray-60 {
        color: var(--color-gray-60);
      }
      & > .alarm-card-container:not(:first-child) {
        margin-top: 16px;
      }
    }
  }
}
</style>
