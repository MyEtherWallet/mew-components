<template>
  <v-tooltip top>
    <template v-slot:activator="{ on }">
      <v-btn color="orange" dark v-on="on">Hover</v-btn>
    </template>
    <span>
      {{ text }}
    </span>
  </v-tooltip>
</template>

<script>
export default {
  props: {
    text: String
  },
  data: () => ({}),
  watch: {},
  mounted() {}
};
</script>

<style lang="scss">
@import "@/global.scss";
.v-tooltip__content {
  max-width: 300px;
  opacity: 1 !important;
  background-color: white !important;
  border: 1px solid $color--primary--emerald;
  padding: 10px 14px !important;

  span {
    font-weight: 400;
    line-height: 17px;
    font-size: 12px;
    display: inline-block;
    color: $color--text--spruce;
  }
}
</style>
