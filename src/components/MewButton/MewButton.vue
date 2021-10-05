<template>
  <!--
  =====================================================================================
    Mew Button
  =====================================================================================
  -->
  <v-btn
    :target="btnLink ? '_blank' : ''"
    :href="btnLink"
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
      size="20"
      :color="loadingColor"
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
   Button text (if no title prop is passed, then slot should be used)
  =====================================================================================
  -->
      <span
        v-if="title"
        class="font-weight-regular"
      >{{ title }} </span>
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
     * Applies the button style: background, light, transparent, or outline.
     * If nothing is passed then the button will be the 
     * default standard background color theme.
     */
    btnStyle: {
      type: String,
      default: 'background'
    },
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
    /**
     * all color theme options
     */
      colorThemes: {
        secondary: 'secondary',
        primary: 'primary',
        basic: 'basic',
        error: 'error'
      },
    /**
     * all btn style options
     */
      btnStyles: {
        light: 'light',
        transparent: 'transparent',
        outline: 'outline',
        background: 'background'
      },
    /**
     * all btn sizes options
     */
      btnSizes: {
        small: 'small',
        medium: 'medium',
        large: 'large',
        xlarge: 'xlarge'
      }
    };
  },
  computed: {
    /**
     * @returns if color theme is primary.
     */
    isPrimaryTheme() {
      return this.colorTheme.toLowerCase() === this.colorThemes.primary;
    },
    /**
     * @returns if color theme is secondary.
     */
    isSecondaryTheme() {
      return this.colorTheme.toLowerCase() === this.colorThemes.secondary;
    },
    /**
     * @returns if color theme is basic.
     */
    isBasicTheme() {
      return this.colorTheme.toLowerCase() === this.colorThemes.basic;
    },
    /**
     * @returns if color theme is error.
     */
    isErrorTheme() {
      return this.colorTheme.toLowerCase() === this.colorThemes.error;
    },
    /**
     * @returns the process circular loading color.
     */
    loadingColor() {
      if (!this.disabled && !this.isBackground) {
        return this.buttonColor
      }

      if (this.disabled && !this.isBackground) {
        return 'disabled'
      }

      return 'white'
    },
    /**
     * @returns button color based on color theme and btn style props.
     */
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
    /**
     * @returns button classes based on given props
     */
    buttonClasses() {
      const classes = [];
      // adds btn size 
      if (this.btnSize.toLowerCase()) {
        classes.push(this.btnSize.toLowerCase() + '-btn' );
      }

      // adds 100% full width 
      if (this.hasFullWidth === true ) {
        classes.push('full-width');
      }

      // adds correct button color text
      if (!this.disabled) {
        if (this.isPrimaryTheme && this.isLight) {
          classes.push('primary--text');
        }

        if (this.isErrorTheme && this.isLight) {
          classes.push('error--text');
        }

        if (this.isSecondaryTheme && this.isLight) {
          classes.push('blue500--text');
        }

        if (this.isBasicTheme  && this.isLight) {
          classes.push('textPrimary--text');
        }
      }
      // adds white text for all default backgrounds
      if (
        this.isBackground
      ) {
        classes.push('white--text');
      }

      // adds class for disabled btns (btn style: light and background)
      if (this.disabled && this.isLight) {
        if (this.isLight) classes.push('disabled-light')
        if (this.isBackground) classes.push('disabled-bg')

      }

      // adds class for btn style
      if (this.btnStyle.toLowerCase()) {
        classes.push('btn-' + this.btnStyle.toLowerCase())
      }

      return classes;
    },
    /**
     * @returns if btn style is transparent.
     */
    isTransparent() {
      return this.btnStyle.toLowerCase() === this.btnStyles.transparent
    },
    /**
     * @returns if btn style has an outline/border.
     */
    hasOutline() {
      return this.btnStyle.toLowerCase() === this.btnStyles.outline
    },
    /**
     * @returns if btn style is a lighter color.
     */
    isLight() {
      return this.btnStyle.toLowerCase() === this.btnStyles.light
    },
    /**
     * @returns if btn style is the default background color.
     */
    isBackground() {
      return this.btnStyle.toLowerCase() === this.btnStyles.background
    }
  }
};
</script>

<style lang="scss" scoped>
// MEW BUTTON STYLES
.v-application {
  .v-btn.mew-button {
    border-radius: 10px !important;
    // BUTTON SIZES
    &.small-btn {
      padding: 8px;
    }

    &.medium-btn {
      padding: 12px 32px;
    }

    &.large-btn {
      height: 46px;
    }

    &.xlarge-btn {
      height: 62px;
      padding: 0 46px;
    }
  
  // PRIMARY COLOR THEME - active & hover states
  // btn style: default background 
    &.primary.btn-background.white--text:hover {
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)), #05C0A5 !important;
    }
    
    &.primary.btn-background.white--text:active {
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #05C0A5 !important;
    }


  // btn style: light
    &.primary--text.btn-light:hover {
      background: linear-gradient(0deg, rgba(5, 192, 165, 0.08), rgba(5, 192, 165, 0.08)), #F2FAFA !important;
    }
    
    &.primary--text.btn-light:active {
      background: linear-gradient(0deg, rgba(5, 192, 165, 0.2), rgba(5, 192, 165, 0.2)), #F2FAFA !important;
    }


  // btn style: outline, transparent 
    &.primary--text.btn-outline:hover, &.primary--text.btn-transparent:hover {
      background: rgba(5, 192, 165, 0.08) !important;
    }
    
    &.primary--text.btn-outline:active, &.primary--text.btn-transparent:active {
      background: rgba(5, 192, 165, 0.2) !important;
    }


  // SECONDARY COLOR THEME - active & hover states
  // btn style: default background
    &.blue500.btn-background.white--text:hover {
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)), #5A78F0 !important;
    }
    
    &.blue500.btn-background.white--text:active {
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #5A78F0 !important;
    }

      // btn style: light
    &.blue500--text.btn-light:hover {
      background: linear-gradient(0deg, rgba(90, 120, 240, 0.08), rgba(90, 120, 240, 0.08)), rgba(90, 120, 240, 0.08) !important;
    }
    
    &.blue500--text.btn-light:active {
      background: linear-gradient(0deg, rgba(90, 120, 240, 0.2), rgba(90, 120, 240, 0.2)), rgba(90, 120, 240, 0.08) !important;
    }


  // btn style: outline, transparent 
    &.blue500--text.btn-outline:hover, &.blue500--text.btn-transparent:hover {
      background: rgba(90, 120, 240, 0.08) !important;
    }
    
    &.blue500--text.btn-outline:active, &.blue500--text.btn-transparent:active {
      background: rgba(90, 120, 240, 0.2) !important;
    }
  

  // BASIC COLOR THEME - active & hover states
  // btn style: default background
    &.textPrimary.btn-background.white--text:hover {
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)), #687699 !important;
    }
    
    &.textPrimary.btn-background.white--text:active {
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #687699 !important;
    }

  // btn style: light
    &.textPrimary--text.btn-light:hover {
      background: linear-gradient(0deg, rgba(104, 118, 153, 0.08), rgba(104, 118, 153, 0.08)), #F0F3F9 !important;
    }
    
    &.textPrimary--text.btn-light:active {
      background: linear-gradient(0deg, rgba(104, 118, 153, 0.2), rgba(104, 118, 153, 0.2)), #F0F3F9 !important;
    }


  // btn style: outline, transparent 
    &.textPrimary--text.btn-outline:hover, &.textPrimary--text.btn-transparent:hover {
      background: linear-gradient(0deg, rgba(104, 118, 153, 0.08), rgba(104, 118, 153, 0.08)), #F0F3F9 !important;
    }
    
    &.textPrimary--text.btn-outline:active, &.textPrimary--text.btn-transparent:active {
      background: linear-gradient(0deg, rgba(104, 118, 153, 0.2), rgba(104, 118, 153, 0.2)), #F0F3F9 !important;
    }

  // ERROR COLOR THEME - active & hover states
  // btn style: default background
    &.error.btn-background.white--text:hover {
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)), #FF445B !important;
    }
    
    &.error.btn-background.white--text:active {
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #FF445B !important;
    }

  // btn style: light
    &.error--text.btn-light:hover {
      background: linear-gradient(0deg, rgba(255, 68, 91, 0.08), rgba(255, 68, 91, 0.08)), rgba(255, 68, 91, 0.08) !important;
    }
    
    &.error--text.btn-light:active {
      background: linear-gradient(0deg, rgba(255, 68, 91, 0.2), rgba(255, 68, 91, 0.2)), rgba(255, 68, 91, 0.08) !important;
    }

  // btn style: outline, transparent 
    &.error--text.btn-outline:hover, &.error--text.btn-transparent:hover {
      background: linear-gradient(0deg, rgba(255, 68, 91, 0.08), rgba(255, 68, 91, 0.08)), rgba(255, 68, 91, 0.08) !important;
    }
    
    &.error--text.btn-outline:active, &.error--text.btn-transparent:active {
      background: linear-gradient(0deg, rgba(255, 68, 91, 0.2), rgba(255, 68, 91, 0.2)), rgba(255, 68, 91, 0.08) !important;
    }

   // DISABLED THEME 
   // btn style: light
   &.disabled-light {
     background-color: var(--v-tableHeader-base) !important;
     color: var(--v-disabled-base) !important;
   }
   // btn style: bg
   &.disabled-bg {
     background-color: var(--v-disabled-base) !important;
     color: var(--v-white-base) !important;
   }
  }
}
</style>
