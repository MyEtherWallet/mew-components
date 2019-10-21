<template>
  <div
    class="reminder-box d-flex flex-no-wrap align-center pa-7 grey lighten-4"
  >
    <img class="mr-6" width="70" src="@/assets/icons/Common/icon10.png" />
    <div>
      <h3 class="font-weight-medium">{{ title }}</h3>
      <div>{{ text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    text: String
  },
  data: () => ({}),
  watch: {}
};
</script>

<style lang="scss" scoped>
@import "@/global.scss";

.reminder-box {
  border-radius: 4px;
}
</style>
