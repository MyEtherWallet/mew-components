<template>
  <div class="d-flex align-center"> 
    <span
      @click="onToggle()"
      class="mew-body textPrimary--text mr-2 cursor-pointer"
    >{{ label }}</span>
    <v-switch
      inset
      v-model="isSwitchOn"
    />
  </div>
</template>

<script>

export default {
  name: 'MewSwitch',
  data() {
    return {
      isSwitchOn: false
    }
  },
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  methods: {
    onToggle() {
      this.isSwitchOn = !this.isSwitchOn;
    }
  }
}
</script>