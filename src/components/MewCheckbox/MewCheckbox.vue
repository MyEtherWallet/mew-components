<template>
  <div class="d-flex align-center"> 
    <v-checkbox
      class="titlePrimary--text"
      v-model="isChecked"
      @click="checkboxToggle"
    />
    <span
      class="titlePrimary--text mr-2 cursor-pointer"
      @click="checkboxToggle"
    >{{ label }}
      <a
        v-if="link.url && link.title"
        :href="link.url"
      >{{ link.title }}</a>
    </span>
  </div>
</template>

<script>

export default {
  name: 'MewCheckbox',
  props: {
    label: {
      type: String,
      default: ''
    },
    link: {
      type: Object,
      default: function() {
        return { title: '', url: ''};
      }
    },
    value: {
      type: Boolean,
      default: false
    },
    checkboxToggle: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    isChecked: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>