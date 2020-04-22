<template>
  <div>
    <v-snackbar
      bottom="true"
      :timeout="duration" 
      v-model="showToast" 
      :color="toastType"
    >
      {{ toast }}
    </v-snackbar>
  </div>
</template>

<script>
export default {
  props: {
    toastType: {
      type: String,
      default: ''
    },
    showToast: {
      type: Boolean,
      default: true
    },
    duration: {
      type: String,
      default: '0'
    }
  }
}
</script>