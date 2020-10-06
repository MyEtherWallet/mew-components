<template>
  <div class="d-flex align-center"> 
    <v-checkbox
      class="titlePrimary--text"
      v-model="isChecked"
    />
    <span
      class="titlePrimary--text mr-2 cursor-pointer"
      @click="toggleCheckbox"
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
      default: () => {
        return { title: '', url: ''};
      }
    },
    value: {
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