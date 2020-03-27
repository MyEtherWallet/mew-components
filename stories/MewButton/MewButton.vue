<template>
  <div>
    <v-btn
      :class="getClasses()"
      :color="colorTheme"
      depressed
      :outlined="btnStyle.toLowerCase() === btnStyles.outline"
      :text="btnStyle.toLowerCase() === btnStyles.transparent"
    >
      <span>{{ title }}</span>
      <!-- <v-icon>mdi-star</v-icon> -->
      <!-- <span v-if="!onlyIcon"> -->
      <!-- <span v-if="iconLeft">{{ iconLeft }}</span> -->
      <!-- <span>{{ title }}</span> -->
      <!-- <span v-if="iconLeft">{{ iconRight }}</span> -->
      <!-- </span> -->
      <!-- <v-icon>mdi-heart</v-icon> -->
      <!-- <img @click="hello()" class="icon" :src="icon" alt="Icon" /> -->
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "MewButton",
  props: {
    title: String,
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
        white: "white",
        disabled: "disabled"
      }
    };
  },
  methods: {
    getClasses() {
      const classes = [];

      if (
        this.btnStyle.toLowerCase() === this.btnStyles.background &&
        this.colorTheme.toLowerCase() !== this.colorThemes.white
      ) {
        classes.push("white--text");
      }
      if (
        this.btnStyle.toLowerCase() === this.btnStyles.background &&
        this.colorTheme.toLowerCase() === this.colorThemes.white
      ) {
        classes.push("primary--text");
      }
      if (this.colorTheme.toLowerCase() === this.colorThemes.disabled) {
        classes.push("disabled-theme");
      }
      return classes;
    }
  }
};
</script>

<style lang="scss" scoped>
.v-application {
  .v-btn {
    border-radius: 6px !important;
    padding: 20px;
    height: 100%;
    width: 100%;
  }

  .disabled-theme {
    pointer-events: none;
  }
}
</style>
