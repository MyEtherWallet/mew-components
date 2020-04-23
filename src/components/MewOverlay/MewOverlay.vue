<template>
  <div>
    <v-bottom-sheet
      :value="showsOverlay" 
      fullscreen="true"
      :persistent="persistent"
    >
      <v-sheet 
        height="100%" 
        color="superPrimaryHover"
      >
        <v-container>
          <v-row
            align="center"
            class="pt-5"
            justify="end"
          > 
            <div
              class="close-container"
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
            >Title</span>
          </v-row>
          <v-row 
            align="center"
            justify="center"
          >
            <slot name="mewComponent" />
          </v-row>
          <v-row
            align="end"
            justify="center"
            v-if="btnText"
          >
            <mew-button
              color-theme="primary"
              btn-type="background"
              :title="btnText"
            />
          </v-row>
        </v-container>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
import mewButton from '@/components/MewButton/MewButton.vue';

export default {
  data() {
    return {
      showsOverlay: false
    }
  },
  components: {
    'mew-button': mewButton
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
     * Button text.
     */
    btnText: {
      type: String,
      default: ''
    }
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
  align-items: center;
  cursor: pointer;
  display: flex;
}
</style>