<template>
  <div>
    <v-sheet 
      class="elevation-2"
      :color="colorType"
      height="100%"
    >
      <v-container class="header-wrapper">
        <v-row
          align="center"
          justify="space-between"
        >
          <div class="left-wrapper pl-10 pt-2 d-flex flex-row justify-center align-center">
            <div class="left-icon">
              <img
                @click="copyToClipboard"
                class="copy-icon"
                v-on="on"
                src="@/assets/images/icons/icon-copy-enable.png"
                alt="copy"
              >
            </div>
            <div class="d-flex flex-column">
              <span class="mew-heading-3 textPrimary--text text-uppercase">{{ subtitle }}</span>
              <span :class="['titlePrimary--text', titleSize]">{{ title }}</span>
              <span class="mew-body textSecondary--text font-weight-bold">{{ caption }}</span>
            </div>
            <div class="right-icon">
              <img
                @click="copyToClipboard"
                class="copy-icon"
                v-on="on"
                src="@/assets/images/icons/icon-copy-enable.png"
                alt="copy"
              >
            </div>
          </div>
          <div class="right-wrapper pr-10 pt-2">
            <slot name="rightHeaderWapper" />
          </div>
        </v-row>  
      </v-container>
    </v-sheet>
  </div>
  </v-container>
  </div>
</template>

<script>
export default {
  props: {
    /**
     * Background color
     */
    colorType: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    caption: {
      type: String,
      default: ''
    },
    titleSize: {
      type: String,
      default: 'mew-heading-1'
    }
  }
}
</script>