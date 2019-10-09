<template>
  <v-autocomplete
    :label="title"
    :placeholder="placeholder"
    outlined
    color="teal accent-4"
    v-model="input1"
    clearable
    :items="items"
    item-text="name"
    item-value="value"
  >
    <template v-slot:item="data">
      <template>
        <v-list-item-content class="pa-0">
          <v-list-item-title v-html="data.item.name"></v-list-item-title>
          <v-list-item-subtitle v-html="data.item.group"></v-list-item-subtitle>
        </v-list-item-content>
      </template>
    </template>
  </v-autocomplete>
</template>

<script>
export default {
  props: {
    title: String,
    placeholder: String,
    value: String,
    items: Array
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
