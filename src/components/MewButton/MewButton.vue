<template>
  <!--
  =====================================================================================
    Mew Button
  =====================================================================================
  -->
  <v-btn
    :target="btnLink ? '_blank' : ''"
    :href="btnLink"
    :ripple="!isTransparent"
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
      :color="isTransparent || hasOutline ? 'primary' : 'white'"
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
      <span class="font-weight-regular">{{ title }}</span>
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
     * Makes the button transparent and gives the button a border.
     */
    hasOutline: {
      type: Boolean,
      default: false
    },
    /**
     * Gives the button a subtle color effect.
     */
    isSubtle: {
      type: Boolean,
      default: false
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
     * Applies the button color theme: primary, royal, grey, error
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
        royal: 'royal',
        primary: 'primary',
        grey: 'grey',
        error: 'error'
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
    isRoyalTheme() {
      return this.colorTheme.toLowerCase() === this.colorThemes.royal;
    },
    isGreyTheme() {
      return this.colorTheme.toLowerCase() === this.colorThemes.primary;
    },
    isErrorTheme() {
      return this.colorTheme.toLowerCase() === this.colorThemes.royal;
    },
    buttonColor() {
      if (this.isRoyalTheme) {
        return 'blue500';
      }

      if (this.isPrimaryTheme && this.isSubtle) {
        return 'emerald100'
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
        !this.isSubtle && !this.isOutline
      ) {
        classes.push('white--text');
      }

      if (
        this.isBackground &&
        this.isPlain
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
        this.hasOutline
      ) {
        classes.push('bg-white');
      }

      if (this.isTransparent) {
        classes.push('mew-transparent')
      }

      return classes;
    },
    // isTransparent() {
    //   return this.btnStyle.toLowerCase() === this.btnStyles.transparent
    // },
    // isBackground() {
    //   return this.btnStyle.toLowerCase() === this.btnStyles.background
    // // },
    // isPlain() {
    //   return this.colorTheme.toLowerCase() === this.colorThemes.white
    // }
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.v-application {
  .v-btn {
    border-radius: 10px !important;

    .icon {
      display: flex;
      justify-content: center;
      flex-direction: column;
      height: 45px;
    }

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
    &.basic--text.v-btn--outlined {
      border-color: var(--v-blue100-base) !important;
    }

    // button active states
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

    // disabled btn
    &.v-btn--disabled:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
      background-color: var(--v-disabled-base) !important;
      color: var(--v-white-base) !important;
    }

    &.v-btn--disabled.v-btn--has-bg {
      .v-icon {
        color: var(--v-white-base) !important;
      }
    }

    &.mew-transparent {
      &:before {
        background-color: transparent;
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
