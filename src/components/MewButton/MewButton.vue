<template>
  <div>
    <v-btn
      :class="getClasses()"
      :color="colorTheme"
      depressed
      :disabled="colorTheme.toLowerCase() === btnStyles.disabled"
      :outlined="btnStyle.toLowerCase() === btnStyles.outline"
      :text="btnStyle.toLowerCase() === btnStyles.transparent"
    >
      <span>{{ text }}</span>
      <!-- <v-icon>mdi-star</v-icon> -->
      <!-- <span v-if="iconLeft">{{ iconLeft }}</span> -->
      <!-- <span>{{ text }}</span> -->
      <!-- <span v-if="iconLeft">{{ iconRight }}</span> -->
      <!-- <img @click="hello()" class="icon" :src="icon" alt="Icon" /> -->
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "MewButton",
  props: {
    text: String,
    icon: String,
    iconAlign: {
      type: String,
      default: "none"
    },
    colorTheme: {
      type: String,
      default: ""
    },
    btnStyle: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      btnStyles: {
        background: "background",
        transparent: "transparent",
        outline: "outline"
      },
      colorThemes: {
        white: "white"
      }
    };
  },
  methods: {
    getClasses() {
      if (
        this.btnStyle.toLowerCase() === this.btnStyles.background &&
        this.colorTheme.toLowerCase() !== this.colorThemes.white
      ) {
        return "white--text";
      }
      if (
        this.btnStyle.toLowerCase() === this.btnStyles.background &&
        this.colorTheme.toLowerCase() === this.colorThemes.white
      ) {
        return "primary--text";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.v-application {
  .v-btn {
    border-radius: 6px !important;
  }
}
</style>
