<template>
  <!--
  =====================================================================================
    Mew Overlay
  =====================================================================================
  -->
  <v-bottom-sheet
    :value="isOverlayShown" 
    :fullscreen="true"
    persistent
  >
    <v-sheet 
      height="100%"
      color="overlayBg"
      class="mew-overlay-container d-flex align-center flex-column "
    >
      <!--
  =====================================================================================
    Mew Overlay action buttons (back and close)
  =====================================================================================
  -->
      <v-row
        class="icon-container full-width ma-0"
        align="center"
        :justify="back ? 'space-between' : 'end'"
      > 
        <v-icon
          v-if="back"
          class="cursor-pointer d-flex align-center ma-5 pa-2"
          @click="back"
          size="16"
          color="textBlack2"
        >
          mdi-arrow-left
        </v-icon>
        <v-icon
          v-if="close"
          class="cursor-pointer d-flex align-center ma-5 pa-2"
          @click="close"
          size="16"
          color="textBlack2"
        >
          mdi-close
        </v-icon>
      </v-row>
      <v-container
        ref="white-sheet-container"
        class="pa-0 d-flex align-center justify-center flex-column"
        fluid
      >
        <!--
  =====================================================================================
    White sheet (displays on the overlay - size is based on the contentSize prop)
  =====================================================================================
  -->
        <v-row class="ma-0">
          <v-sheet
            ref="white-sheet-container"
            :width="sheetWidth"
            height="100%"
            color="white"
            class="white-sheet-container pa-8 mt-4"
          >
            <v-row 
              align="center"
              justify="center"
              class="ma-0"
            >
              <!--
    =====================================================================================
    Title displayed on white sheet
    =====================================================================================
    -->
              <span
                class="mew-subtitle titlePrimary--text text-center"
              >{{ title }}</span>
              {{ hasScrollBar }}
            </v-row>
            <!--
      =====================================================================================
        Slot: used to place custom ui content
      =====================================================================================
      -->
            <div class="d-flex flex-column align-center justify-center">
              <slot />
            </div>
          </v-sheet>
        </v-row>
        <v-row class="ma-0 py-8 footer-text">
          {{ footer.text }} 
          <a
            v-if="footer && footer.linkTitle && footer.link"
            rel="noopener noreferrer"
            class="cursor-pointer font-weight-medium ml-1"
            :href="footer.link"
            target="_blank"
          >
            {{ footer.linkTitle }}
          </a>
        </v-row>
      </v-container>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>
const sizes = {
  mobile: 'mobile',
  small: 'small',
  medium: 'medium',
  large: 'large',
  xlarge: 'xlarge'
}

export default {
  name: 'MewOverlay',
  data() {
    return {
      isOverlayShown: false
    }
  },
  props: {
    /**
     * Displays on the outside bottom of the white sheet.
     * takes an object, i.e {text: 'Need help?', linkTitle: 'Contact support',
     * link: 'mailto:support@myetherwallet.com'}
     */
    footer: {
      type: Object,
      default: () => {
        return {};
      }
    },
    /**
     * Opens the overlay from 
     * the bottom of the screen.
     */
    showOverlay: {
      type: Boolean,
      default: false
    },
    /**
     * Overlay title.
     * Displays on the white sheet.
     */
    title: {
      type: String,
      default: ''
    },
    /**
     * Function that gets triggered 
     * by close icon on the right.
     *
     */
    close: {
      type: Function,
      default: () => {
        return {};
      }
    },
    /**
     * Function that gets triggered
     * by left arrow icon on the left.
     */
    back: {
      type: Function,
      default: () => {
        return {};
      }
    },
    /**
     * Applies the size of the white sheet on the overlay.
     * options: 'mobile' - < 344, 'small' - 384px, 
     * 'medium' - 504px, 'large' - 624px, 'xlarge' - 744px.
     */
    contentSize: {
      type: String,
      default: 'small'
    },
  },
  computed: {
    sheetWidth() {
      if (this.contentSize) {
        switch(this.contentSize.toLowerCase()) {
          case sizes.mobile || this.$vuetify.breakpoint.xs:
            return '100%';
          case sizes.small: 
            return '384px';
          case sizes.medium: 
            return '504px';
          case sizes.large: 
            return '624px';
          case sizes.xlarge:
            return '744px';
          default: 
            return '384px';
        }
      }
      return '384px';
    },
    hasScrollBar() {

      return '';
    }
  },
  watch: {
    showOverlay(newVal) {
          console.error('adsfadsf', this.$refs)

      this.isOverlayShown = newVal;
    }
  },
  mounted() {
    this.isOverlayShown = this.showOverlay;
  }
}
</script>

<style lang="scss" scoped>
.mew-overlay-container {
  overflow: auto;
  .white-sheet-container {
    border-radius: 12px;
    box-shadow: 0px 12px 17px rgba(21, 29, 63, 0.0332441);
  }
  .icon-container {
    position: absolute;
    top: 0;
    .v-icon:hover {
    background-color: rgba(95, 99, 104, 0.06);
    border-radius: 50%;
    }
  }
  .footer-text {
    color: rgba(11, 40, 64, 0.72);
  }
}
</style>