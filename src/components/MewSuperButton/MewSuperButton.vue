<template>
  <v-btn
    @click="onBtnClick()"
    :class="[ getClasses() , 'mew-button']"
    :color="getColor()"
    :outlined="colorTheme.toLowerCase() === colorThemes.outline"
    :ripple="false"
    :disabled="disabled"
    :text="disabled" 
    depressed
  >
    <v-row
      class="btn-container"
      justify="space-between"
      :class="showIcon(rightIcon) ? 'center-align' : ''"
    >
      <v-col
        class="left-container"
        cols="6"
      >
        <div class="title-wrapper d-flex align-center">
          <div class="title font-weight-bold truncate">
            {{ title }}
          </div>
          <div
            class="body-2"
            v-if="showIcon(titleIcon)"
          >
            <img
              v-if="showIcon(titleIcon)"
              class="icon title-icon"
              :src="titleIcon"
              alt="Icon"
            >
          </div>
        </div>
        <div
          class="mt-2 truncate"
          v-if="subtitle"
        >
          {{ subtitle }}
        </div>
        <div class="body-2 mt-1">
          #{{ tag }}
        </div>
      </v-col>
      <v-col
        cols="6"
        class="right-container"
      >
        <slot name="swapTokens" />
        <div
          v-if="isNew"
          class="label d-flex align-center text-uppercase"
          alt="label"
        >
          <div>{{ newLabel }}</div>
        </div>
        <div
          v-if="!showIcon(rightIcon) && note"
          class="text-uppercase caption mt-1 note"
        >
          {{ note }}
        </div>
        <img
          v-if="showIcon(rightIcon)"
          class="icon right-icon"
          :src="rightIcon"
          alt="Icon"
        >
      </v-col>
    </v-row>
  </v-btn>
</template>

<script>
export default {
  name: 'MewSuperButton',
  props: {
    /**
     * The text that will go in the button.
     */
    title: {
      type: String,
      default: ''
    },
    /**
     * The text that will go under the button title.
     */
    subtitle: {
      type: String,
      default: ''
    },
    /**
     * The text that will go under the button subtitle.
     */
    tag: {
      type: String,
      default: ''
    },
    /**
     * The title-icon url. Inserts an icon next to the button title.
     */
    titleIcon: {
      type: [String, Array],
      default: ''
    },
    /**
     * The right-icon url. Inserts an icon on the right container of the button.
     */
    rightIcon: {
      type:[String, Array],
      default: ''
    },
    /**
     * The text that will go on the upper right corner. Will not display if right-icon is true.
     */
    note: {
      type: String,
      default: ''
    },
    /**
     * Applies a new badge to the button.
     */
    isNew: {
      type: Boolean,
      default: false
    },
    /**
     * Applies the button color theme: basic, primary, or outline.
     */
    colorTheme: {
      type: String,
      default: ''
    },
    /**
     * Removes the ability to click or target the component.
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Label for new badge.
     */
    newLabel: {
      type: String,
      default: 'new'
    }
  },
  data() {
    return {
      colorThemes: {
        outline: 'outline',
        basic: 'basic',
        primary: 'primary'
      },
      active: false
    };
  },
  methods: {
    onBtnClick() {
      this.active = !this.active;
    },
    getColor() {
      const colorThemesWhite = ['outline', 'basic'];
      if (colorThemesWhite.indexOf(this.colorTheme) >= 0) {
        return 'white';
      }
      
      if (this.colorTheme === this.colorThemes.primary) {
        return 'superPrimary'
      }

      return this.colorTheme;
    },
    getClasses() {
      const classes = ['text-capitalize'];
      if (this.colorTheme.toLowerCase() === this.colorThemes.basic || this.colorTheme.toLowerCase() === this.colorThemes.primary) {
        classes.push('basic--text');
      }

      if (this.disabled) {
        classes.push('disabled-btn');
      }

      if (this.active && !this.disabled) {
        classes.push('active');
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
    border-radius: 12px;
    width: 100%;
  }

  .disabled-btn {
    color: var(--v-disabled-super-base) !important;
  }

  .basic--text.active {
    background-color: var(--v-primaryOutlineActive-base) !important;
    border: 2px solid var(--v-primary-base) !important;
  }

  .v-btn.basic--text {
    &:hover {
      background-color: var(--v-superPrimaryHover-base) !important;
    }
  }

  .btn-container {
    padding: 20px;
    width: 100%;
  }

  .center-align {
    align-items: center;
  }

  .left-container {
    text-align: left;
    width: 100%;
    .title-wrapper {
      .title-icon {
        max-height: 20px;
        margin-left: 2px;
      }
    }
  }

  .right-container {
    .label {
      border-right: 25px solid red;
      border-top: 25px solid red;
      border-left: 25px solid transparent;
      border-bottom: 25px solid transparent;
      border-radius: 0 12px 0 0;
      height: 46px;
      position: absolute;
      right: -16px;
      top: 0;
      width: 0;
      div {
        color: #fff;
        font-size: 12px;
        margin-top: -15px;
        margin-left: -8px;
        transform: rotate(45deg);
      }
    }

    .note {
      color: var(--v-warning-darken1) !important;
    }
    .right-icon {
      max-height: 80px;
    }
  }

  .title-wrapper {
    .title {
      font-size: 22px;
    }
  }
}
</style>
