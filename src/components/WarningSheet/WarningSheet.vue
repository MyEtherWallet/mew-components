<template>
  <div class="mt-4">
    <v-row
      align="end"
      justify="center"
    >
      <v-sheet
        class="px-10 py-3"
        color="warning"
        height="100%"
        width="100%"
      >
        <v-row
          align="start"
          justify="start"
        >
          <v-icon
            class="title"
            color="warning darken-1"
          >
            mdi-alert
          </v-icon>
          <div class="d-flex flex-column ml-2 titlePrimary--text">
            <span class="text-uppercase font-weight-bold">{{ title }}</span>
            <span>{{ description }}</span>
          </div>
        </v-row>
      </v-sheet>
    </v-row>
  </div>
</template>

<script>

export default {
  name: 'WarningSheet',
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>
