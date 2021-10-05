<template>
  <!--
  =====================================================================================
    Mew Alert
  =====================================================================================
  -->
  <v-alert
    :class="alertClasses"
    colored-border
    :color="alertBorderColor"
    border="left"
    min-height="88"
    :icon="alertIcon"
    dismissible
    :close-icon="hideIcons? null : 'mdi-close'"
  > 
    <!--
  =====================================================================================
   Title + Description
  =====================================================================================
  -->
    <div class="ml-1">
      <span
        v-if="title"
        class="mew-body font-weight-bold text"
      >{{ title }}</span>
      <div
        v-if="description"
        class="mew-body text"
      >
        {{ description }}
      </div>
    </div>
    <!--
  =====================================================================================
   Slot (should be used if there is no text or description prop)
  =====================================================================================
  -->
    <div :class="hideIcons ? 'ml-3' : 'ml-1'">
      <slot />
    </div>
  </v-alert>
</template>

<script>


export default {
  name: 'MewAlert',
  props: {
    /**
     * Applies the theme: error, warning, success, info
     */
    theme: {
      type: String,
      default: 'info'
    },
    /**
     * Sets a white background for the entire alert.
     */
    hasWhiteBackground: {
      type: Boolean,
      default: false
    },
    /**
     * Hides top left icon.
     */
    hideIcons: {
      type: Boolean,
      default: false
    },
    /**
     * Adds a alert title. 
     */
    title: {
      type: String,
      default: ''
    },
    /**
     * Adds a alert description. 
     */
    description: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
    /**
     * all theme options
     */
      themes: {
        error: 'error',
        warning: 'warning',
        success: 'success',
        info: 'info'
      },
    }
  },
  computed: {
    /**
     * @returns if its an error theme.
     */
    isErrorTheme() {
      return this.theme.toLowerCase() === this.themes.error;
    },
    /**
     * @returns if its an info theme.
     */
    isInfoTheme() {
      return this.theme.toLowerCase() === this.themes.info;
    },
    /**
     * @returns if its a warning theme.
     */
    isWarningTheme() {
      return this.theme.toLowerCase() === this.themes.warning;
    },
    /**
     * @returns if its a success theme.
     */
    isSuccessTheme() {
      return this.theme.toLowerCase() === this.themes.success;
    },
    /**
     * @returns the alert border color.
     */
    alertBorderColor() {
      if (this.isWarningTheme) {
        return 'warning darken-1';
      }
      if (this.isInfoTheme) {
        return 'blue500';
      }
      return this.theme;
    },
    /**
     * @returns the alert icon. Will not show if hideIcons is true.
     */
    alertIcon() {
      if (this.isWarningTheme) {
        return 'mdi-alert';
      }
      if (this.isInfoTheme) {
        return 'mdi-information';
      }
      if (this.isErrorTheme) {
        return 'mdi-close-circle';
      }
      if (this.hideIcons) {
        return null;
      }
      return 'mdi-checkbox-marked-circle';
    },
    /**
     * @returns specific mew alert classes. Used for styling.
     */
    alertClasses() {
      const classes = ['mew-alert'];
      if (this.hasWhiteBackground) {
        classes.push('white');
      }
      if (this.theme) {
        classes.push(this.theme.toLowerCase() + '-alert');
      }
      return classes;
    }
  }
}

</script>

<style lang="scss" scoped>
// MEW ALERT STYLES (scoped)
.mew-alert {
  border-radius: 8px;
  box-shadow: 0px 1.6px 6px rgba(90, 103, 138, 0.6) !important;
  .text {
    color: rgba(21, 28, 44, 0.87);
  }
  &.success-alert {
    background-color: rgba(44, 196, 121, 0.09);
  }
  &.info-alert {
    background-color: rgba(90, 120, 240, 0.08);
  }
  &.error-alert {
    background-color: rgba(255, 68, 91, 0.09);
  }
  &.warning-alert {
    background-color: rgba(245, 166, 35, 0.09);
  }
}

</style>

<style lang="scss">
// MEW ALERT STYLES (global - the only way to override vuetify styles)
.mew-alert {
  .v-alert__dismissible {
    .mdi-close {
      color: rgba(21, 28, 44, 0.6) !important;
      // top: 16px;
    }
  }
}
</style>