<template>
  <v-container>
    <div class="title">Typography</div>
    <v-row no-gutters class="justify-space-between">
      <v-col cols="12">
        <h1>Roboto Regular h1 (42px)</h1>
        <h2>Roboto Regular h2 (30px)</h2>
        <h3>Roboto Regular h3 (24px)</h3>
        <h4>Roboto Regular h4 (20px)</h4>
        <h5>Roboto Regular h5 (16px)</h5>
        <p>Roboto Regular p (14px)</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="display-1 font-weight-light mb-8">
          <div>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
          <div>abcdefghijklmnopqrstuvwxyz</div>
          <div>0123456789!@#$%^&*()</div>
          <p>
            <code>{{ lightFontCode }}</code>
          </p>
        </div>
        <div class="display-1 font-weight-bold">
          <div>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
          <div>abcdefghijklmnopqrstuvwxyz</div>
          <div>0123456789!@#$%^&*()</div>
          <p>
            <code>{{ boldFontCode }}</code>
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      lightFontCode: "<div class='display-1 font-weight-light'></div>",
      boldFontCode: "<div class='display-1 font-weight-bold'></div>"
    };
  }
};
</script>
