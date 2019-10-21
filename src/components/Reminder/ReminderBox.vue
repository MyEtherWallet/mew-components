<template>
  <div class="d-flex flex-no-wrap align-center">
    <img src="@/assets/icons/Common/icon10.png" />
    <div>
      <h3 class="">{{ title }}</h3>
      <p class="">{{ text }}</p>
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
</style>
