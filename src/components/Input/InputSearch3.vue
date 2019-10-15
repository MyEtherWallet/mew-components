<template>
  <v-sheet
    class="the-inputsearch-component-65d9d1e213f964d943b043c118d755c7"
    :max-width="maxwidth"
  >
    <v-autocomplete
      :single-line="singleline"
      dense
      :label="title"
      :placeholder="placeholder"
      color="teal accent-4"
      v-model="input1"
      :items="items"
      item-text="name"
      item-value="value"
      max-width="250"
      clearable
    >
      <template v-slot:item="data">
        <template>
          <v-list-item-content class="pa-0">
            <v-list-item-title v-html="data.item.name"></v-list-item-title>
            <v-list-item-subtitle
              v-html="data.item.group"
            ></v-list-item-subtitle>
          </v-list-item-content>
        </template>
      </template>
    </v-autocomplete>
  </v-sheet>
</template>

<script>
export default {
  props: {
    title: String,
    placeholder: String,
    maxwidth: String,
    value: String,
    items: Array,
    singleline: Boolean
  },
  data: () => ({
    input1: ""
  }),
  watch: {
    input1(newValue) {
      this.$emit("input", newValue);
    }
  },
  methods: {},
  mounted() {
    this.input1 = this.value;
  }
};
</script>

<style lang="scss" scoped></style>

<style lang="scss">
.the-inputsearch-component-65d9d1e213f964d943b043c118d755c7 {
  .v-text-field > .v-input__control > .v-input__slot:before {
    border-width: 0;
  }
}
</style>
