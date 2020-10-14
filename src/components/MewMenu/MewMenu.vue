<template>
  <v-menu
    v-model="isMenuOpen"
    open-on-hover
    :content-class="getContentClasses()"
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
      class="pa-0"
      v-for="(item, index) in listObj.items"
      :key="index"
    >
      <v-list-item>
        <v-list-item-title class="basic--text mew-heading-3">{{item.title}}</v-list-item-title>
      </v-list-item>
      <v-list-item
        v-for="(subItem, index) in item.items"
        :key="subItem + index"
        @click="goTo(subItem.to)"
        class="cursor-pointer"
      >
        <v-list-item-title class="mew-body basic--text">
          {{ subItem.title }}
        </v-list-item-title>
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
     * Applies a white top arrow, Only works with a colored background.
     */
    // hasTopArrow: {
    //   type: Boolean,
    //   default: false
    // },
    /**
     * Menu content.
     */
    listObj: {
      type: Object,
      default: () => {
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
    getContentClasses() {
      let classes = 'mew-menu-content elevation-2 '
      return classes;
    },
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

  .v-list-item--link {
    border-top: none;
    min-height: 35px;

    &:hover {
      background-color: var(--v-primary-base);
    }
  }

  .v-list:first-of-type > .v-list-item--link {
    padding-top: 10px;
  }

 .v-list:last-of-type > .v-list-item--link {
    padding-bottom: 5px;
  }

}
</style>