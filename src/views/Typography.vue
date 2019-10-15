<template>
  <v-container>
    <v-row no-gutters class="justify-space-between">
      <v-col cols="12" sm="6" md="4">
        <h1>H1 Heading</h1>
        <h2>H2 Heading</h2>
        <h3>H3 Heading</h3>
        <h4>H4 Heading</h4>
        <h5>H5 Heading</h5>
        <p>Body</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="display-1 font-weight-light mb-8">
          <div>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
          <div>abcdefghijklmnopqrstuvwxyz</div>
          <div>0123456789!@#$%^&*()</div>
        </div>
        <div class="display-1 font-weight-bold">
          <div>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
          <div>abcdefghijklmnopqrstuvwxyz</div>
          <div>0123456789!@#$%^&*()</div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({})
};
</script>
