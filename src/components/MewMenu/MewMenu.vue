<template>
  <v-menu
    v-model="isMenuOpen"
    open-on-hover
    content-class="mew-menu-content elevation-2"
    offset-y
  >
    <template v-slot:activator="{ on }">
      <span
        :class="[textColor, styleClasses, 'cursor-pointer', isMenuOpen ? 'font-weight-medium' : '']"
        v-on="on"
      >
        {{ listObj.name }}
        <v-icon
          v-if="!isMenuOpen"
          :class="['title', textColor]"
        >mdi-chevron-down</v-icon>
        <v-icon
          v-if="isMenuOpen"
          :class="['title', textColor]"
        >mdi-chevron-up</v-icon>
      </span>
    </template>
    <v-list
      v-for="(item, index) in listObj.items"
      :key="index"
    >
      <v-list-item
        @click="goTo(item.to)"
        class="cursor-pointer"
      >
        <v-list-item-title>{{ item.title }} </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'MewMenu',
  data() {
    return {
      isMenuOpen: false
    }
  },
  props: {
    /**
     * Menu content.
     */
    listObj: {
      type: Object,
      default: function() {
        return {};
      }
    },
    /**
     * Text color. Accepts a class. 
     */
    textColor: {
      type: String,
      default: 'basic--text'
    },
    /**
     * Classes to style the content
     */
    styleClasses: {
      type: String,
      default: ''
    }
  },
  methods: {
    goTo(link) {
      this.$emit('goToPage', link);
    }
  }
}
</script>

<style lang="scss">
.mew-menu-content {
  border: none !important;

  .v-list {
    border-radius: 0;
  }
  .v-list-item__title {
    color: var(--v-basic-base);
    font-size: 14px;
  }

  .v-list-item--link {
    border-top: none;

    &:hover {
      background-color: var(--v-primary-base);
    }
  }
}
</style>