<template>
  <!--
  =====================================================================================
    Mew Checkbox
  =====================================================================================
  -->
  <div class="d-flex align-center mew-checkbox"> 
    <v-checkbox
      hide-details
      :dense="dense"
      off-icon="mdi-check-circle-outline"
      on-icon="mdi-check-circle"
      class="titlePrimary--text"
      v-model="isChecked"
    />
    <span
      :class="['mr-2 cursor-pointer', colorText]"
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
     * Changes the label text color (i.e error--text)
     */
    colorText: {
        type: String,
        default: 'titlePrimary--text'
    },
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
<style lang="scss" scoped>
.mew-checkbox {
  .v-input--checkbox {
    margin-top: 0;
    padding-top: 0;
  }
}
</style>