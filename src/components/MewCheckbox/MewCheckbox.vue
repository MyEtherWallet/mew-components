<template>
    <!--
  =====================================================================================
    Mew Checkbox
  =====================================================================================
  -->
  <div class="d-flex align-center"> 
    <v-checkbox
      :dense="dense"
      class="titlePrimary--text"
      v-model="isChecked"
    />
    <span
      class="titlePrimary--text mr-2 cursor-pointer"
      @click="toggleCheckbox"
    >{{ label }}
      <a
        target="_blank"
        v-if="link.url && link.title"
        :href="link.url"
      >{{ link.title }}</a>
      <slot name="contentSlot" />
    </span>
  </div>
</template>

<script>

export default {
  name: 'MewCheckbox',
  props: {
    /**
     * Checkbox label
     */
    label: {
      type: String,
      default: ''
    },
    /**
     * Adds a link to the checkbox label.
     */
    link: {
      type: Object,
      default: () => {
        return { title: '', url: ''};
      }
    },
    /**
     * Controls the value of the checkbox (checked or not)
     */
    value: {
      type: Boolean,
      default: false
    },
    /**
     * Reduces the input height
     */
    dense: {
      type: Boolean,
      default: false
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
  },
  methods: {
    toggleCheckbox() {
      this.$emit('input', !this.value);
    }
  }
}
</script>