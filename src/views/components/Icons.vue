<template>
  <v-row>
    <v-col cols="12" sm="2" md="2" v-for="(i, key) in icons" :key="key" class="mb-8">
      <v-img :src="i" :max-height="imageSize" :max-width="imageSize" />
    </v-col>
  </v-row>
</template>

<script>
import i01 from "@/assets/icons/icon01.png";
import i02 from "@/assets/icons/icon02.png";
import i03 from "@/assets/icons/icon03.png";
import i04 from "@/assets/icons/icon04.png";
import i05 from "@/assets/icons/icon05.png";
import i06 from "@/assets/icons/icon06.png";
import i07 from "@/assets/icons/icon07.png";
import i08 from "@/assets/icons/icon08.png";
import i09 from "@/assets/icons/icon09.png";
import i10 from "@/assets/icons/icon10.png";
import i11 from "@/assets/icons/icon11.png";
import i12 from "@/assets/icons/icon12.png";
import i13 from "@/assets/icons/icon13.png";
import i14 from "@/assets/icons/icon14.png";
import i15 from "@/assets/icons/icon15.png";
import i16 from "@/assets/icons/icon16.png";
import i17 from "@/assets/icons/icon17.png";
import i18 from "@/assets/icons/icon18.png";
import i19 from "@/assets/icons/icon19.png";
import i20 from "@/assets/icons/icon20.png";
import i21 from "@/assets/icons/icon21.png";
import i22 from "@/assets/icons/icon22.png";
import i23 from "@/assets/icons/icon23.png";
import i24 from "@/assets/icons/icon24.png";
import i25 from "@/assets/icons/icon25.png";
import i26 from "@/assets/icons/icon26.png";
import i27 from "@/assets/icons/icon27.png";
import i28 from "@/assets/icons/icon28.png";
import i29 from "@/assets/icons/icon29.png";
import i30 from "@/assets/icons/icon30.png";

export default {
  props: {},
  data: () => ({
    imageSize: 70,
    icons: [
      i01,
      i02,
      i03,
      i04,
      i05,
      i06,
      i07,
      i08,
      i09,
      i10,
      i11,
      i12,
      i13,
      i14,
      i15,
      i16,
      i17,
      i18,
      i19,
      i20,
      i21,
      i22,
      i23,
      i24,
      i25,
      i26,
      i27,
      i28,
      i29,
      i30
    ]
  }),
  computed: {}
};
</script>

<style lang="scss" scoped>
@import "@/global.scss";
</style>
