<template>
  <v-card class="pa-10 info-card">
    <img :src="icon">
    <v-card-title :class="[ 'font-weight-bold', 'mew-heading-2', 'titlePrimary--text', icon ? 'pt-0' : '' ]">
      {{ title }}
      <slot name="titleIconContainer" />
    </v-card-title>
    <v-card-subtitle class="titlePrimary--text truncate subtitle">
      {{ desc }}
    </v-card-subtitle>
    <v-card-text v-if="link.url && link.title">
      <a
        class="link font-weight-medium"
        :href="link.url"
      >{{ link.title }}<v-icon
        class="mew-body"
        color="primary"
      >mdi-arrow-right</v-icon></a>
    </v-card-text>
    <slot name="cardImg" />
  </v-card>
</template>

<script>
export default {
  props: {
    /**
     * Title of card
     */
    title: {
      type: String,
      default: ''
    },
    /**
     * The description of the card.
     */
    desc: {
      type: String,
      default: ''
    },
    /**
     * The icon url. Inserts an icon on top.
     */
    icon: {
      type: [ String, Array],
      default: ''
    },
    /**
     * The link object. Takes the link title and the url.
     */
    link: {
      type: Object,
      default: function () {
        return {
          title: '',
          url: ''
        }
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.info-card {
  .subtitle {
    max-width: 90%;
  }

  .link {
    text-decoration: none;

    i {
      font-size: 20px;
    }
  }
}
</style>