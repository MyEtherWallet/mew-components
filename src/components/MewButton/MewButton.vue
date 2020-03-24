<template>
  <div>
    <v-btn
      depressed
      :disabled="disabled"
      :outlined="btnStyle === 'outline'"
      :text="btnStyle === 'transparent'"
      :icon="true"
    >
      <!-- <v-icon>mdi-star</v-icon> -->
      <!-- <span v-if="!onlyIcon"> -->
      <!-- <span v-if="iconLeft">{{ iconLeft }}</span> -->
      <!-- <span>{{ text }}</span> -->
      <!-- <span v-if="iconLeft">{{ iconRight }}</span> -->
      <!-- </span> -->
      <!-- <v-icon>mdi-heart</v-icon> -->
      <img @click="hello()" class="icon" :src="icon" alt="Icon" />
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "MewButton",
  data() {
    return {
      onlyText: false,
      onlyIcon: false,
      outlined: false
    };
  },
  props: {
    text: String,
    icon: String,
    iconAlign: {
      type: String,
      default: "none"
    },
    disabled: Boolean,
    themeColor: {
      type: String,
      default: ""
    },
    btnStyle: {
      type: String,
      default: ""
    }
  },
  mounted() {
    // this.checkBtnType();
  },
  methods: {
    hasOnlyIcon() {
      this.style === "transparent" && this.icon && this.iconAlign === "center";
    },
    hello() {
      console.error("in here");
    },
    checkBtnType() {
      switch (this.btnType) {
        case "text":
          console.error("btn", this.btnType);
          this.onlyText = true;
          break;
        case "outline":
          this.outlined = true;
          break;
        case "icon":
          this.onlyIcon = true;
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
  cursor: pointer;
  height: 70px;
  &:hover {
    opacity: 0.6;
  }
}

.theme--light.v-btn.v-btn--disabled:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
  background-color: var(--v-disabled-base) !important;
}
</style>
