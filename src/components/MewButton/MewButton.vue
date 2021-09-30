<template>
  <!--
  =====================================================================================
    Mew Button
  =====================================================================================
  -->
  <v-btn
    :target="btnLink ? '_blank' : ''"
    :href="btnLink"
    @click="onBtnClick"
    :class="[ buttonClasses, 'mew-button' ]"
    :color="buttonColor"
    :disabled="disabled"
    depressed
    :outlined="hasOutline"
    :text="isTransparent"
  >
    <!--
  =====================================================================================
    Loading state
  =====================================================================================
  -->
    <v-progress-circular
      v-if="loading"
      indeterminate
      size="25"
      :color="hasOutline ? 'primary' : 'white'"
    />
    <!--
  =====================================================================================
    Loaded Button Content 
  =====================================================================================
  -->
    <div
      class="d-flex justify-center align-center"
      v-if="!loading"
    >  
      <!--
  =====================================================================================
   Button text
  =====================================================================================
  -->
      <span class="font-weight-regular">{{ title }} {{buttonColor}}</span>
      <slot />
    </div>
  </v-btn>

</template>

<script>

export default {
  name: 'MewButton',
  props: {
    /**
     * Enables loading state
     */
    loading: {
      type: Boolean,
      default: false
    },
    /**
     * Button size: small, medium, large, xlarge.
     */
    btnSize: {
      type: String,
      default: 'large'
    },
    /**
     * Sets the button to have 100% width.
     */
    hasFullWidth: {
      type: Boolean,
      default: false
    },
    /**
     * Applies the button style: light, transparent, or outline.
     * If nothing is passed then the button will be the 
     * default standard background color theme.
     */
    btnStyle: {
      type: String,
      default: 'background'
    },
    /**
     * Makes the button transparent and gives the button a border.
     */
    // hasOutline: {
    //   type: Boolean,
    //   default: false
    // },
    /**
     * Gives the button a subtle color effect.
     */
    // isLight: {
    //   type: Boolean,
    //   default: false
    // },
    /**
     * The text that will go in the center of the button.
     * If not passed, a slot should be used.
     */
    title: {
      type: String,
      default: ''
    },
    /**
     * Applies the button color theme: primary, secondary, basic, error
     */
    colorTheme: {
      type: String,
      default: 'primary'
    },
    /**
     * Removes the ability to click or target the component.
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Opens up a new page with the link. 
     */
    btnLink: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      colorThemes: {
        secondary: 'secondary',
        primary: 'primary',
        basic: 'basic',
        error: 'error'
      },
      btnStyles: {
        light: 'light',
        transparent: 'transparent',
        outline: 'outline',
        background: 'background'
      },
      btnSizes: {
        small: 'small',
        medium: 'medium',
        large: 'large',
        xlarge: 'xlarge'
      }
    };
  },
  computed: {
    isPrimaryTheme() {
      return this.colorTheme.toLowerCase() === this.colorThemes.primary;
    },
    isSecondaryTheme() {
      return this.colorTheme.toLowerCase() === this.colorThemes.secondary;
    },
    isBasicTheme() {
      return this.colorTheme.toLowerCase() === this.colorThemes.basic;
    },
    isErrorTheme() {
      return this.colorTheme.toLowerCase() === this.colorThemes.error;
    },
    buttonColor() {
      if (this.isLight && this.isSecondaryTheme) {
        return 'rgba(90, 120, 240, 0.08)';
      }

      if (this.isLight && this.isErrorTheme) {
        return 'rgba(255, 68, 91, 0.08)';
      }

      if (this.isLight && this.isBasicTheme) {
        return '#F0F3F9'
      }
  
      if (this.isPrimaryTheme && this.isLight) {
        return 'emerald100'
      }

      if (this.isSecondaryTheme) {
        return 'blue500';
      }


      if (this.isBasicTheme) {
        return 'textPrimary'
      }

      return this.colorTheme;
    },
    buttonClasses() {
      const classes = [];

      if (this.btnSize.toLowerCase()) {
        classes.push(this.btnSize.toLowerCase() + '-btn' );
      }

      if (this.hasFullWidth === true ) {
        classes.push('full-width');
      }
      
      if (
        this.isBackground
      ) {
        classes.push('white--text');
      }

      if (this.isPrimaryTheme && this.isLight) {
        classes.push('primary--text');
      }

      if (this.isErrorTheme && this.isLight) {
        classes.push('error--text');
      }

      if (this.isSecondaryTheme && this.isLight) {
        return 'blue500--text';
      }
      if (this.isBasicTheme  && this.isLight) {
        return 'textPrimary--text';
      }

      return classes;
    },
    isTransparent() {
      return this.btnStyle.toLowerCase() === this.btnStyles.transparent
    },
    hasOutline() {
      return this.btnStyle.toLowerCase() === this.btnStyles.outline
    },
    isLight() {
      return this.btnStyle.toLowerCase() === this.btnStyles.light
    },
    isBackground() {
      return this.btnStyle.toLowerCase() === this.btnStyles.background
    }
  },
  methods: {
    onBtnClick() {
      console.error('in here')
    }
  }
};
</script>

<style lang="scss" scoped>
.v-application {
  .v-btn {
    border-radius: 10px !important;
    // button sizes
    &.small-btn {
      height: 32px;
      // padding: 0 15px;
    }

    &.medium-btn {
      height: 36x;
      // padding: 0 20px;
    }

    &.large-btn {
      height: 46px;
      // padding: 0 32px;
    }

    &.xlarge-btn {
      height: 62px;
      // padding: 0 46px;
    }
    // basic color theme using a light blue border
    // &.basic--text.v-btn--outlined {
    //   border-color: var(--v-blue100-base) !important;
    // }

    // button active states
    // &.primary.white--text.active {
    //   background-color: var(--v-primaryActive-base) !important;
    // }
    
    &.blue500.white--text:hover {
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)), #5A78F0 !important;
    }
    
    &.blue500.white--text:active {
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #5A78F0;
    }

    // &.primary--text.v-btn--outlined.active {
    //   background-color: var(--v-primaryOutlineActive-base) !important;
    // }

    // &.secondary--text.v-btn--outlined.active {
    //   background-color: var(--v-secondaryOutlineActive-base) !important;
    // }

    // &.error--text.v-btn--outlined.active {
    //   background-color: var(--v-errorOutlineActive-base) !important;
    // }

    // &.basic--text.v-btn--outlined.active {
    //   background-color: var(--v-basicOutlineActive-base) !important;
    // }

    // // disabled btn
    // &.v-btn--disabled:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
    //   background-color: var(--v-disabled-base) !important;
    //   color: var(--v-white-base) !important;
    // }

    // &.v-btn--disabled.v-btn--has-bg {
    //   .v-icon {
    //     color: var(--v-white-base) !important;
    //   }
    // }

    // &.mew-transparent {
    //   &:before {
    //     background-color: transparent;
    //   }
    //   &:hover {
    //     text-decoration: underline;
    //   }
    // }
  }
}
</style>
