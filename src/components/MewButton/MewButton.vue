<template>
  <div>
    <v-btn
      :class="getClasses()"
      :color="colorTheme"
      :disabled="disabled"
      depressed
      :outlined="btnStyle.toLowerCase() === btnStyles.outline"
      :text="btnStyle.toLowerCase() === btnStyles.transparent"
    >
      <img
        v-if="iconAlign.toLowerCase() === iconAlignments.left"
        class="icon mr-1"
        :src="icon"
        alt="icon"
      />
      <span>{{ title }}</span>
      <img
        v-if="iconAlign.toLowerCase() === iconAlignments.right"
        class="icon ml-1"
        :src="icon"
        alt="icon"
      />
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
      description: "Hello",
      default: "none"
    },
    colorTheme: {
      type: String,
      default: ""
    },
    btnStyle: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
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
      },
      iconAlignments: {
        left: "left",
        right: "right"
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
      if (this.colorTheme.toLowerCase() === this.disabled) {
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

    .icon {
      height: 27px;
    }
  }

  .disabled-theme {
    pointer-events: none;

    .icon {
      filter: grayscale(100%);
    }
  }
}
</style>
