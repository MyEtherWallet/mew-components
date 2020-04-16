<template>
  <div>
    <v-btn
      @click="onBtnClick()"
      :class="getClasses()"
      :color="getColor()"
      :outlined="colorTheme.toLowerCase() === colorThemes.outline"
      :ripple="false"
      :disabled="disabled"
      depressed
    >
      <div
        class="btn-container"
        :class="rightIcon ? 'center-align' : ''"
      >
        <div class="left-container">
          <div class="title-wrapper">
            <div class="title font-weight-bold">
              {{ title }}
            </div>
            <div
              class="body-2"
              v-if="titleIcon"
            >
              <img
                v-if="titleIcon"
                class="icon title-icon"
                :src="titleIcon"
                alt="Icon"
              >
            </div>
          </div>
          <div
            class="mt-2"
            v-if="subtitle"
          >
            {{ subtitle }}
          </div>
          <div class="body-2 mt-1">
            #{{ tag }}
          </div>
        </div>
        <div class="right-container">
          <div
            v-if="isNew"
            class="label"
            alt="label"
          >
            <div>NEW</div>
          </div>
          <div
            v-if="!rightIcon && note"
            class="text-uppercase caption mt-1 note"
          >
            {{ note }}
          </div>
          <img
            v-if="rightIcon"
            class="icon right-icon"
            :src="rightIcon"
            alt="Icon"
          >
        </div>
      </div>
    </v-btn>
  </div>
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
      type: String,
      default: ''
    },
    /**
     * The right-icon url. Inserts an icon on the right container of the button.
     */
    rightIcon: {
      type: String,
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
     * Applies the button color theme: basic, lightGreen, or outline.
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
    }
  },
  data() {
    return {
      colorThemes: {
        outline: 'outline',
        basic: 'basic'
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
      return this.colorTheme;
    },
    getClasses() {
      const classes = ['text-capitalize'];
      if (this.colorTheme.toLowerCase() === this.colorThemes.basic) {
        classes.push('basic--text');
      }

      if (this.disabled) {
        classes.push('disabled-btn');
      }

      if (this.active && !this.disabled) {
        classes.push('green-border');
      }

      return classes;
    }
  }
};
</script>

<style lang="scss" scoped>
.v-application {
  .v-btn {
    border-radius: 12px;
  }

  .disabled-btn {
    color: var(--v-disabled-super-base) !important;
  }

  .green-border {
    border: 2px solid var(--v-primary-base) !important;
  }

  .btn-container {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    width: 100%;
  }

  .center-align {
    align-items: center;
  }

  .left-container {
    text-align: left;
    .title-wrapper {
      align-items: center;
      display: flex;
      .title-icon {
        max-height: 20px;
        margin-left: 2px;
      }
    }
  }

  .right-container {
    .label {
      align-items: center;
      border-right: 25px solid red;
      border-top: 25px solid red;
      border-left: 25px solid transparent;
      border-bottom: 25px solid transparent;
      border-radius: 0 12px 0 0;
      display: flex;
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
      color: var(--v-yellow-1-base) !important;
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
