<template>
  <div>
    <v-bottom-sheet
      :value="showToast" 
      :color="toastType"
      :hide-overlay="true"
    >
      <v-sheet 
        class="text-center"
        :tile="true" 
        height="80"
        :color="toastType"
      >
        <v-container fill-height>
          <v-row
            justify="center"
            align="center"
          >
            <div :class="toastType === 'warning' ? 'titlePrimary--text' : 'white--text'">
              {{ text }}
            </div>
          </v-row>
        </v-container>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showsToast: false
    }
  },
  props: {
    toastType: {
      type: String,
      default: ''
    },
    showToast: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 0
    },
    text: {
      type: String,
      default: ''
    }
  },
  mounted() {
    // this.showsToast = this.showToast;
    if(this.duration > 0) {
      setTimeout(function () {
        // this.showsToast = false;
        // console.error('in here', this.showsToast)
      }, this.duration);
    }
  }
}
</script>