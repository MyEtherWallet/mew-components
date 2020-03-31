<template>
  <div>
    <v-btn
      @click="onBtnClick()"
      :class="getClasses()"
      :color="getColor()"
      :outlined="colorTheme.toLowerCase() === colorThemes.outline"
      :ripple="false"
      depressed
    >
      <div class="btn-container" :class="rightIcon ? 'center-align' : ''">
        <div class="left-container">
          <div class="title-wrapper">
            <div class="title font-weight-bold">{{ title }}</div>
            <div class="body-2" v-if="titleIcon">
              <img class="title-icon" :src="titleIcon" alt="Icon" />
            </div>
          </div>
          <div class="mt-2" v-if="subtitle">{{ subtitle }}</div>
          <div class="body-2 mt-1">#{{ tag }}</div>
        </div>
        <div class="right-container">
          <img v-if="isNew" class="label" :src="newLabel" alt="label" />
          <div
            v-if="!rightIcon && note"
            class="text-uppercase caption mt-1 note"
          >
            {{ note }}
          </div>
          <img
            v-if="rightIcon"
            class="right-icon"
            :src="rightIcon"
            alt="Icon"
          />
        </div>
      </div>
    </v-btn>
  </div>
</template>

<script>
import newLabel from "/Users/jessicapeng/mew-components/src/assets/images/icons/new-label.svg";

export default {
  name: "MewSuperButton",
  props: {
    title: String,
    subtitle: String,
    tag: String,
    titleIcon: String,
    rightIcon: String,
    note: String,
    isNew: Boolean,
    colorTheme: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      colorThemes: {
        outline: "outline",
        basic: "basic",
        disabled: "disabled"
      },
      active: false,
      newLabel: newLabel
    };
  },
  methods: {
    onBtnClick() {
      this.active = !this.active;
    },
    getColor() {
      const colorThemesWhite = ["outline", "basic", "disabled"];
      if (colorThemesWhite.indexOf(this.colorTheme) >= 0) {
        return "white";
      }
      return this.colorTheme;
    },
    getClasses() {
      const classes = ["text-capitalize"];
      if (this.colorTheme.toLowerCase() === this.colorThemes.basic) {
        classes.push("basic--text");
      }

      if (this.colorTheme.toLowerCase() === this.colorThemes.disabled) {
        classes.push("disabled");
      }

      if (
        this.active &&
        this.colorTheme.toLowerCase() !== this.colorThemes.disabled
      ) {
        classes.push("green-border");
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
    height: 100% !important;
    width: 100%;
  }

  .disabled {
    color: var(--v-disabled-super-base) !important;
    pointer-events: none;

    .right-icon {
      filter: grayscale(100%);
    }

    .title-icon {
      filter: grayscale(100%);
    }
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
      position: absolute;
      right: -16px;
      height: 46px;
      top: 0;
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
