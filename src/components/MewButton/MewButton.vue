<template>
  <div>
    <v-btn
      @click="onBtnClick()"
      :class="getClasses()"
      :color="colorTheme"
      :disabled="disabled"
      depressed
      :outlined="btnStyle.toLowerCase() === btnStyles.outline"
      :text="btnStyle.toLowerCase() === btnStyles.transparent"
    >
      <img
        v-if="icon && iconAlign.toLowerCase() === iconAlignments.left"
        class="icon mr-1"
        :src="icon"
        alt="icon"
      >
      <span>{{ title }}</span>
      <img
        v-if="icon && iconAlign.toLowerCase() === iconAlignments.right"
        class="icon ml-1"
        :src="icon"
        alt="icon"
      >
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'MewButton',
  props: {
    /**
     * The text that will go in the button.
     */
    title: {
      type: String,
      default: ''
    },
    /**
     * The icon url. Inserts an icon next to the button title.
     */
    icon: {
      type: String,
      default: ''
    },
    /**
     * Aligns the icon: left, right, or none.
     */
    iconAlign: {
      type: String,
      default: 'none'
    },
    /**
     * Applies the button color theme: basic, primary, error, white, or secondary.
     */
    colorTheme: {
      type: String,
      default: 'primary'
    },
    /**
     * Applies the button style: background, transparent, or outline.
     */
    btnStyle: {
      type: String,
      default: 'background'
    },
    /**
     * Removes the ability to click or target the component.
     */
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      btnStyles: {
        background: 'background',
        transparent: 'transparent',
        outline: 'outline'
      },
      colorThemes: {
        white: 'white',
        primary: 'primary'
      },
      iconAlignments: {
        left: 'left',
        right: 'right'
      },
      active: false
    };
  },
  methods: {
    onBtnClick() {
      this.active = !this.active;
    },
    getClasses() {
      const classes = [];

      if (
        this.btnStyle.toLowerCase() === this.btnStyles.background &&
        this.colorTheme.toLowerCase() !== this.colorThemes.white
      ) {
        classes.push('white--text');
      }

      if (
        this.btnStyle.toLowerCase() === this.btnStyles.background &&
        this.colorTheme.toLowerCase() === this.colorThemes.white
      ) {
        classes.push('primary--text');
      }

      if (this.disabled) {
        classes.push('disabled-btn');
      }

      if (
        this.active &&
        !this.disabled &&
        this.btnStyle.toLowerCase() === this.btnStyles.background &&
        this.colorTheme.toLowerCase() === this.colorThemes.primary
      ) {
        classes.push('primary-active');
      }

      if (
        this.active &&
        !this.disabled &&
        this.btnStyle.toLowerCase() === this.btnStyles.outline
      ) {
        classes.push('bg-white');
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

    .icon {
      height: 27px;
    }

    &.primary:hover {
      background-color: var(--v-primary-base) !important;
    }
  }

  .primary-active {
    background-color: var(--v-primary-base) !important;
  }

  .bg-white {
    background-color: var(--v-white-base) !important;
  }

  .theme--light.v-btn.v-btn--disabled:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
    color: var(--v-white-base) !important;
  }
}
</style>
