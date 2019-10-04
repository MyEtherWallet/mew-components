<template>
  <div class="warning-box">{{ text }}</div>
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
  border: 2px solid $color--secondary--cardinal;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
  color: $color--secondary--cardinal;
  background-color: #ffeef1;
}
</style>
