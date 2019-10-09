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
    <template v-slot:selection="data">
      <img :src="data.item.avatar" height="30" width="30" class="mr-3" />
      {{ data.item.name }}
    </template>
    <template v-slot:item="data">
      <template v-if="typeof data.item !== 'object'">
        <v-list-item-content v-text="data.item"></v-list-item-content>
      </template>
      <template v-else>
        <v-list-item-avatar>
          <img :src="data.item.avatar" />
        </v-list-item-avatar>
        <v-list-item-content>
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
