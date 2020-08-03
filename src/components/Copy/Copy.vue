<template>
  <div>
    <v-tooltip
      content-class="tooltip-inner"
      color="titlePrimary--text"
      top
    >
      <template v-slot:activator="{ on }">
        <v-icon
          class="copy-icon mr-3 basic--text"
          v-on="on"
          @click="copyToClipboard"
        >
          mdi-content-copy
        </v-icon> 
      </template>
      <span>{{ tooltip }}</span>
    </v-tooltip>
    <toast
      ref="toast"
      :duration="2000"
      toast-type="success"
      :text="successToast"
    />
  </div>
</template>

<script>
import copy from '@/helpers/copy.js';
import Toast from '@/components/Toast/Toast.vue';

export default {
  components: {
    'toast': Toast
  },
  props: {
    isRef: {
      type: Boolean,
      default: false
    },
    copyId: {
      type: [String, HTMLInputElement],
      default: ''
    },
    tooltip: {
      type: String,
      default: 'Copy'
    },
    successToast: {
      type: String,
      default: 'Copied!'
    }
  },
  methods: {
   copyToClipboard() {
      copy(this.copyId, this.isRef)
      this.$refs.toast.showToast();
    }
  }
}
</script>