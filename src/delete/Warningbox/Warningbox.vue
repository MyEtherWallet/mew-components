<template>
  <div class="warning-box">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: String
  },
  data: () => ({}),
  watch: {}
};
</script>

<style lang="scss" scoped>
@import "@/global.scss";
.warning-box {
  border: 2px solid var(--v-cardinal-base);
  padding: 15px;
  border-radius: 5px;
  text-align: center;
  color: var(--v-cardinal-base);
  background-color: #ffeef1;
}
</style>
