<template>
  <div>
    <v-text-field
      class="mb-2"
      :label="title1"
      :placeholder="placeholder1"
      v-model="password1"
      outlined
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[ruleMin]"
      :type="show1 ? 'text' : 'password'"
      counter
      @click:append="show1 = !show1"
    />
    <v-text-field
      :label="title2"
      :placeholder="placeholder2"
      v-model="password2"
      outlined
      :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[ruleMin, rulePasswordMatch]"
      :type="show2 ? 'text' : 'password'"
      @click:append="show2 = !show2"
    />
  </div>
</template>

<script>
export default {
  props: {
    title1: String,
    title2: String,
    placeholder1: String,
    placeholder2: String,
    errorMinimum: String,
    errorPasswordNoMatch: String
  },
  data: () => ({
    password1: "",
    password2: "",
    show1: false,
    show2: false
  }),
  watch: {
    password1(newValue) {
      this.password2 = "";
      if (newValue == this.password2) {
        this.$emit("input", newValue);
      } else {
        this.$emit("input", false);
      }
    },
    password2(newValue) {
      if (newValue == this.password1) {
        this.$emit("input", newValue);
      } else {
        this.$emit("input", false);
      }
    }
  },
  methods: {
    ruleMin(v) {
      if (v) {
        return v.length >= 8 ? false : this.errorMinimum;
      } else {
        return false;
      }
    },
    rulePasswordMatch(v) {
      return v == this.password1 ? false : this.errorPasswordNoMatch;
    }
  },
  mounted() {
    this.password1 = this.value;
  }
};
</script>
