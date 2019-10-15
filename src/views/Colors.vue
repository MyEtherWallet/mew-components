<template>
  <v-container>
    <div class="title">Primary Colors</div>
    <v-row class="mb-12">
      <CardColor color="#05c0a5" colorName="Emerald" />
      <CardColor color="#5a78f0" colorName="Royal Blue" />
      <CardColor color="#003945" colorName="Dark Sacramento" />
      <CardColor color="#0b2840" colorName="Dark Space" />
    </v-row>

    <div class="title">Secondary Colors</div>
    <v-row class="mb-12">
      <CardColor color="#7070e3" colorName="Violet" />
      <CardColor color="#25b0e8" colorName="Police Strobe" />
      <CardColor color="#536d8b" colorName="Independence" />
      <CardColor color="#334758" colorName="Dark Independence" />
      <CardColor color="#e96071" colorName="Cerise" />
      <CardColor color="#a70015" colorName="Cardinal" />
      <CardColor color="#fcb755" colorName="Naples Yellow" />
      <CardColor color="#f2f4fa" colorName="Primary Silver" />
      <CardColor color="#cdf2ee" colorName="Mint" />
      <CardColor color="#f2fafa" colorName="Light Mint" />
    </v-row>

    <div class="title">Text Colors</div>
    <v-row class="mb-12">
      <CardColor color="#506175" colorName="Spruce" />
      <CardColor color="#cecece" colorName="Silver" />
    </v-row>
  </v-container>
</template>

<script>
import CardColor from "@/views/components/CardColor";

export default {
  components: {
    CardColor
  },
  data: () => ({})
};
</script>
