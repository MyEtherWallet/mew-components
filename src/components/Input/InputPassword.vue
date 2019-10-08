<template>
  <div>
    <v-text-field
      class="mb-2"
      :label="title1"
      :placeholder="placeholder1"
      v-model="password1"
      outlined
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.min]"
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
      :rules="[rulePasswordMatch]"
      :type="show2 ? 'text' : 'password'"
      :hint="hint2"
      @click:append="show2 = !show2"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    title1: String,
    title2: String,
    placeholder1: String,
    placeholder2: String,
    hint1: String,
    hint2: String
  },
  data: () => ({
    password1: "",
    password2: "",
    show1: false,
    show2: false,
    rules: {
      required: value => !!value || "Required",
      min: v => v.length >= 8 || "Min 8 characters"
    }
  }),
  watch: {
    password1(newValue) {
      const temp = this.password2;
      this.password2 = "1";
      this.password2 = temp;
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
    rulePasswordMatch(v) {
      return v == this.password1
        ? false
        : "The email and password you entered don't match";
    }
  },
  mounted() {
    this.password1 = this.value;
  }
};
</script>
