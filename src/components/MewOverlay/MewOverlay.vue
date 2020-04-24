<template>
  <div>
    <v-bottom-sheet
      :value="showsOverlay" 
      :fullscreen="true"
    >
      <v-sheet 
        height="100%" 
        color="superPrimaryHover"
      >
        <v-container>
          <v-row
            align="center"
            class="pt-5"
            :justify="hasBackBtn ? 'space-between' : 'end'"
          > 
            <div
              v-if="hasBackBtn"
              class="close-container d-flex align-center"
              @click="close()"
            > 
              <v-icon
                color="titlePrimary"
              >
                mdi-arrow-left-circle-outline
              </v-icon>
              <!-- need to translate this -->
              <span class="titlePrimary--text font-weight-medium ml-2">Back</span>
            </div>
            <div
              class="close-container d-flex align-center"
              @click="close()"
            > 
              <v-icon
                color="error"
              >
                mdi-close-circle-outline
              </v-icon>
              <!-- need to translate this -->
              <span class="error--text font-weight-medium ml-2">Cancel</span>
            </div>
          </v-row>
          <v-row 
            align="center"
            class="pt-5"
            justify="center"
          >
            <span
              color="titlePrimary--text"
              class="mew-subtitle"
            >{{ title }}</span>
          </v-row>
          <div class="body-container d-flex flex-column align-center justify-center">
            <slot name="mewComponent" />
            <mew-button
              class="mt-4"
              v-if="btnText"
              color-theme="primary"
              btn-type="background"
              :title="btnText"
            />
            <warning-sheet
              v-if="warningTitle || warningDesc"
              :title="warningTitle"
              :description="warningDesc"
            />
          </div>
        </v-container>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
import mewButton from '@/components/MewButton/MewButton.vue';
import warningSheet from '@/components/WarningSheet/WarningSheet.vue';

export default {
  name: 'MewOverlay',
  data() {
    return {
      showsOverlay: false
    }
  },
  components: {
    'mew-button': mewButton,
    'warning-sheet': warningSheet
  },
  props: {
    /**
     * Shows the overlay.
     */
    showOverlay: {
      type: Boolean,
      default: false
    },
    /**
     * Title of overlay.
     */
    title: {
      type: String,
      default: ''
    },
    /**
     * Displays and shows the button text.
     */
    btnText: {
      type: String,
      default: ''
    },
    /**
     * Displays the back button.
     */
    hasBackBtn: {
      type: Boolean,
      default: false
    },
    /**
     * Displays and shows the warning title.
     */
    warningTitle: {
      type: String,
      default: ''
    },
    /**
     * Displays and shows the warning description.
     */
    warningDesc: {
      type: String,
      default: ''
    },
  },
  watch: {
    showOverlay(newVal) {
      this.showsOverlay = newVal;
    }
  },
  methods: {
    close() {
      this.showsOverlay = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.close-container {
  cursor: pointer;
}
</style>