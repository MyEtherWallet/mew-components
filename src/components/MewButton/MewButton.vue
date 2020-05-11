<template>
  <v-btn
    @click="onBtnClick()"
    :class="getClasses()"
    :color="colorTheme"
    :disabled="disabled"
    depressed
    :outlined="btnStyle.toLowerCase() === btnStyles.outline"
    :text="btnStyle.toLowerCase() === btnStyles.transparent"
    :to="goTo"
  >
    <img
      v-if="showIcon(icon) && iconAlign.toLowerCase() === iconAlignments.left"
      class="icon mr-1"
      :src="icon"
      alt="icon"
    >
    <span>{{ title }}</span>
    <img
      v-if="showIcon(icon) && iconAlign.toLowerCase() === iconAlignments.right"
      class="icon ml-1"
      :src="icon"
      alt="icon"
    >
  </v-btn>
</template>

<script>
export default {
  name: 'MewButton',
  props: {
    /**
     * Sets the button to have 100% width.
     */
    hasFullWidth: {
      type: Boolean,
      default: true
    },
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
      type: [ String, Array],
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
    },
    /**
     * Denotes the target route of the link.
     */
    goTo: {
      type: String,
      default: ''
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
        primary: 'primary',
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

      if (this.hasFullWidth === true ) {
        classes.push('full-width');
      }
      
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

      if (
        this.active &&
        !this.disabled
      ) {
        classes.push('active');
      }

      if (
        this.active &&
        !this.disabled &&
        this.btnStyle.toLowerCase() === this.btnStyles.outline
      ) {
        classes.push('bg-white');
      }

      return classes;
    },
    showIcon(src) {
      if (src === '' || src.length <= 0 ) {
        return false;
      }
      return true;
    }
  }
};
</script>

<style lang="scss" scoped>
.v-application {
  .v-btn {
    border-radius: 6px !important;
    padding: 20px 50px;

    .icon {
      height: 27px;
    }

    &.primary.white--text.active {
      background-color: var(--v-primaryActive-base) !important;
    }
    
    &.primary.white--text:hover {
      background-color: var(--v-primaryHover-base) !important;
    }

    &.primary--text.v-btn--outlined.active {
      background-color: var(--v-primaryOutlineActive-base) !important;
    }

    &.secondary--text.v-btn--outlined.active {
      background-color: var(--v-secondaryOutlineActive-base) !important;
    }

    &.error--text.v-btn--outlined.active {
      background-color: var(--v-errorOutlineActive-base) !important;
    }

    &.basic--text.v-btn--outlined.active {
      background-color: var(--v-basicOutlineActive-base) !important;
    }
  }

  .theme--light.v-btn.v-btn--disabled:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined), .theme--dark.v-btn.v-btn--disabled:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
    background-color: var(--v-disabled-base) !important;
    color: var(--v-white-base) !important;
  }
}
</style>
