<template>
  <!--
      =====================================================================================
        Mew Popup
        =====================================================================================
      -->
  <v-dialog
    :max-width="width"
    :value="show"
    :fullscreen="scrollable ? $vuetify.breakpoint.xs : false"
    content-class="ma-0"
    :scrollable="scrollable"
    @click:outside="handleClickOutside"
  >
    <v-card
      color="white"
      class="pa-0"
    >
      <!--
      =====================================================================================
        Dialog Header
        =====================================================================================
      -->
      <v-card-title class="justify-center py-5 py-md-8 px-5 px-md-7">
        <div
          v-if="title"
          class="mew-heading-2 break-word text-center"
        >
          {{ title }}
        </div>
        <v-btn
          icon
          class="header-close-icon"
        >
          <v-icon
            size="x-large"
            color="grey cursor--pointer"
            @click="close"
          >
            mdi-close
          </v-icon>
        </v-btn>
      </v-card-title>
      <!--
      =====================================================================================
        Dialog Body
      =====================================================================================
      -->
      <v-card-text
        :class="['tableHeader', hasPadding ? 'py-3 px-5 px-md-7' : 'pa-0']"
      >
        <slot />
      </v-card-text>
      <!--
      =====================================================================================
        Dialog action
      =====================================================================================
      -->
      <v-card-actions class="py-5 py-md-8">
        <v-row
          v-if="hasButtons"
          class="pa-0"
          justify="space-around"
          dense
        >
          <v-col
            cols="12"
            :sm="!hasActionBtn ? '12' : '6'"
            :class="!hasActionBtn ? 'text-left' : 'text-right'"
            :order="!hasActionBtn ? '1' : '2'"
            order-sm="1"
          >
            <mew-button
              btn-style="outline"
              btn-size="xlarge"
              :title="btnTexts.close"
              :has-full-width="!hasActionBtn ? true :$vuetify.breakpoint.xs"
              @click.native="close"
            />
          </v-col>
          <v-col
            v-if="hasActionBtn"
            cols="12"
            sm="6"
            class="text-left"
            order="1"
            order-sm="2"
          >
            <mew-button
              btn-size="xlarge"
              :title="btnTexts.action"
              :disabled="!btnEnabled"
              :has-full-width="$vuetify.breakpoint.xs"
              @click.native="btnAction"
            />
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import MewButton from '@/components/MewButton/MewButton.vue';

export default {
  components: { MewButton },
  props: {
    /**
     * Title of popup.
     */
    title: {
      type: String,
      default: ''
    },
    /**
     * Function used to close popup. 
     */
    close: {
      type: Function,
      default: () => {}
    },
    /**
     * Controls popup visibility.
     */
    show: {
      type: Boolean,
      default: false
    },
    /**
     * Enables the action button. 
     * It will be displayed as the second button, next to 
     * close button on the footer.
     */
    btnEnabled: {
      type: Boolean,
      default: true
    },
    /**
     * Function used on click of action button.
     */
    btnAction: {
      type: Function,
      default: () => {}
    },
    /**
     * Object of button title strings.
     * Close key value will be used as the close button title.
     * Action key value will be used as the action button title.
     */
    btnTexts: {
      type: Object,
      default: () => {
        return {
          close: 'Cancel',
          action: 'Confirm'
        }
      }
    },
    /**
     * Makes the popup content scrollable.
     */
    scrollable: {
      type: Boolean,
      default: false
    },
    /**
     * Max width of the popup.
     */
    width: {
      type: String,
      default: '600'
    },
    /**
     * Displays buttons on footer if true.
     * Will only display the close button if 
     * there is no btnAction method passed.
     */
    hasButtons: {
      type: Boolean,
      default: true
    },
    /**
     * Will display popup content padding if true
     */
    hasPadding: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    hasActionBtn() {
      return this.btnAction && this.btnTexts.action
    }
  },
  methods: {
    handleClickOutside() {
      this.close();
    }
  }
};
</script>

<style lang="scss" scoped>
.header-close-icon {
  right: 10px;
  top: 10px;
  position: absolute;
}
</style>
