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
    item-value="name"
  >
    <template v-slot:selection="data">
      <v-chip
        v-bind="data.attrs"
        :input-value="data.selected"
        close
        @click="data.select"
        @click:close="remove(data.item)"
      >
        <v-avatar left>
          <v-img :src="data.item.avatar"></v-img>
        </v-avatar>
        {{ data.item.name }}
      </v-chip>
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
  mounted() {
    this.input1 = this.value;
  }
};
</script>
