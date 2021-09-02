<template>
  <!--
  =====================================================================================
    Mew Button
  =====================================================================================
  -->
  <v-btn
    :target="btnLink ? '_blank' : ''"
    :href="btnLink"
    :ripple="rippleColor ? { class: `${rippleColor}--text` } : !isTransparent"
    :class="[getClasses(), 'mew-button', `${textColor}--text`]"
    :color="btnColor ? btnColor : colorTheme"
    :disabled="disabled"
    depressed
    :outlined="isOutline"
    :text="isTransparent"
    :style="hoverColor ? hoverColorStyle : ''"
    @click="onBtnClick"
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
      :color="isTransparent || isOutline ? 'primary' : 'white'"
    />
    <!--
    =====================================================================================
      Loaded Button Content 
    =====================================================================================
    -->
    <div v-if="!loading" class="d-flex justify-center align-center">
      <!--
      =====================================================================================
        Img content - uses img src (Left)
      =====================================================================================
      -->
      <img
        v-if="showIcon('img') && !showIconAlignRight"
        class="icon mr-1"
        :src="icon"
        alt="icon"
      />
      <!--
      =====================================================================================
      V-Icon Content - uses material design icons (Left)
      =====================================================================================
      -->
      <v-icon v-if="showIcon('mdi') && !showIconAlignRight" class="icon mr-1">
        {{ icon }}
      </v-icon>
      <!--
      =====================================================================================
      Mew Icon Content - uses mew icons (Left)
      =====================================================================================
      -->
      <mew-icon
        v-if="showIcon('mew') && !showIconAlignRight"
        :img-height="30"
        class="icon mr-1"
        :icon-name="icon"
      />
      <!--
      =====================================================================================
      Button text
      =====================================================================================
      -->
      <span>{{ title }}</span>
      <!--
      =====================================================================================
        Img content - uses img src (Right)
      =====================================================================================
      -->
      <img
        v-if="showIcon('img') && showIconAlignRight"
        class="icon ml-1"
        :src="icon"
        alt="icon"
      />
      <!--
      =====================================================================================
      V-Icon Content - uses material design icons (Right)
      =====================================================================================
      -->
      <v-icon v-if="showIcon('mdi') && showIconAlignRight" class="icon mr-1">
        {{ icon }}
      </v-icon>
      <!--
      =====================================================================================
      Mew Icon Content - uses mew icons (Right)
      =====================================================================================
      -->
      <mew-icon
        v-if="showIcon('mew') && showIconAlignRight"
        :img-height="30"
        class="icon mr-1"
        :icon-name="icon"
      />
    </div>
  </v-btn>
</template>

<script>
import MewIcon from '@/components/MewIcon/MewIcon.vue';

export default {
  name: 'MewButton',
  components: {
    MewIcon
  },
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
      type: [String, Array],
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
     * The type of icon: mew, mdi, or img
     */
    iconType: {
      type: String,
      default: 'mew'
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
    },
    btnColor: {
      type: String,
      default: ''
    },
    textColor: {
      type: String,
      default: ''
    },
    // white as default hover color
    hoverColor: {
      type: String,
      default: 'white'
    },
    // white as default ripple color
    rippleColor: {
      type: String,
      default: 'white'
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
      btnSizes: {
        small: 'small',
        medium: 'medium',
        large: 'large',
        xlarge: 'xlarge'
      },
      iconTypes: {
        mew: 'mew',
        mdi: 'mdi',
        img: 'img'
      },
      active: false
    };
  },
  computed: {
    isTransparent() {
      return this.btnStyle.toLowerCase() === this.btnStyles.transparent;
    },
    isOutline() {
      return this.btnStyle.toLowerCase() === this.btnStyles.outline;
    },
    isBackground() {
      return this.btnStyle.toLowerCase() === this.btnStyles.background;
    },
    isPlain() {
      return this.colorTheme.toLowerCase() === this.colorThemes.white;
    },
    showIconAlignRight() {
      return this.iconAlign.toLowerCase() === this.iconAlignments.right;
    },
    hoverColorStyle() {
      // If hoverColor is set, create a css variable
      return {
        '--hover-color': this.hoverColor
      };
    }
  },
  methods: {
    showIcon(val) {
      return (
        this.iconType.toLowerCase() === this.iconTypes[val] &&
        this.hasSrc(this.icon)
      );
    },
    onBtnClick() {
      this.active = !this.active;
    },
    getClasses() {
      const classes = [];

      if (this.btnSize.toLowerCase()) {
        classes.push(this.btnSize.toLowerCase() + '-btn');
      }

      if (this.hasFullWidth === true) {
        classes.push('full-width');
      }

      if (this.isBackground && !this.isPlain) {
        classes.push('white--text');
      }

      if (this.isBackground && this.isPlain) {
        classes.push('primary--text');
      }

      if (this.active && !this.disabled && this.showsActiveState) {
        classes.push('active');
      }

      if (
        this.active &&
        this.showsActiveState &&
        !this.disabled &&
        this.isOutline
      ) {
        classes.push('bg-white');
      }

      if (this.isTransparent) {
        classes.push('mew-transparent');
      }

      return classes;
    },
    hasSrc(src) {
      if (src === '' || src.length <= 0) {
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
      display: flex;
      justify-content: center;
      flex-direction: column;
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

// If hoverColor is set, use css variable to set hover color
// otherwise use default hover color
.v-btn::before {
  background-color: var(--hover-color, currentColor);
}
</style>
