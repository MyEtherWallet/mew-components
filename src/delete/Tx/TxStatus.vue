<template>
  <v-card
    class="pa-4"
    max-width="250"
    outlined
  >
    <v-row
      align="center"
      justify="space-between"
      no-gutters
    >
      <v-col>
        <v-row
          align="center"
          no-gutters
        >
          <!-- <v-img src="@/assets/coins/eth.png" max-width="28" class="mr-2" /> -->
          <div>ETH</div>
        </v-row>
        <div class="caption font-weight-medium">
          1.00000
        </div>
      </v-col>
      <v-col class="text-center">
        <v-icon>mdi-arrow-right</v-icon>
      </v-col>
      <v-col>
        <v-row
          align="center"
          no-gutters
        >
          <!-- <v-img src="@/assets/coins/btc.png" max-width="28" class="mr-2" /> -->
          <div>BTC</div>
        </v-row>
        <div class="caption font-weight-medium">
          1.000
        </div>
      </v-col>
    </v-row>
    <v-progress-linear
      color="teal lighten-2"
      class="mt-1"
      active
      height="15"
      rounded="rounded"
      value="25"
      :striped="false"
    />
    <div class="text-center">
      08:25
    </div>
    <v-sheet class="text-center mt-2">
      <v-btn
        color="grey lighten-3"
        depressed
        small
      >
        Check History
      </v-btn>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  props: {},
  data: () => ({}),
  watch: {}
};
</script>

<style lang="scss" scoped>
@import "@/global.scss";
</style>
