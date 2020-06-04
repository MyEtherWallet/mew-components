<template>
  <v-btn
    :target="btnLink ? '_blank' : ''"
    :href="btnLink"
    @click="onBtnClick()"
    :class="[ getClasses(), 'mew-button' ]"
    :color="colorTheme"
    :disabled="disabled"
    depressed
    :outlined="btnStyle.toLowerCase() === btnStyles.outline"
    :text="btnStyle.toLowerCase() === btnStyles.transparent"
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
import { VBtn } from 'vuetify/lib'
export default {
  name: 'MewButton',
  components: {
    VBtn
  },
  props: {
    /**
     * Button size: small, medium, large, xlarge.
     */
    buttonSize: {
      type: String,
      default: 'large'
    },
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
      default: 'rwerwer'
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
     * Opens up a new page with the link. 
     */
    btnLink: {
      type: String,
      default: ''
    },
    /**
     * Displays the buttons' active state.
     */
    showsActiveState: {
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
        primary: 'primary',
      },
      iconAlignments: {
        left: 'left',
        right: 'right'
      },
      btnSizes: {
        small: 'small',
        medium: 'medium',
        large: 'large',
        xlarge: 'xlarge'
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

      if (this.buttonSize.toLowerCase() === this.btnSizes.small) {
        classes.push('small-btn', 'mew-caption');
      }

      if (this.buttonSize.toLowerCase() === this.btnSizes.medium) {
        classes.push('medium-btn');     
      }

      if (this.buttonSize.toLowerCase() === this.btnSizes.large) {
        classes.push('large-btn');
      }
      
      if (this.buttonSize.toLowerCase() === this.btnSizes.xlarge) {
        classes.push('xlarge-btn');
      }

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
        !this.disabled &&
        this.showsActiveState
      ) {
        classes.push('active');
      }

      if (
        this.active &&
        this.showsActiveState && 
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

    .icon {
      height: 45px;
    }

    // button sizes
    &.small-btn {
      min-height: 28px;
      padding: 0 15px;
    }

    &.medium-btn {
      min-height: 34x;
      padding: 0 20px;
    }

    &.large-btn {
      min-height: 46px;
      padding: 0 32px;
    }

    &.xlarge-btn {
      min-height: 62px;
      padding: 0 46px;
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
  }
}
</style>
