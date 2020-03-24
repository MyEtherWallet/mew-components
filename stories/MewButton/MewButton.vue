<template>
  <div>
    <v-btn
      :color="getColor()"
      depressed
      :disabled="disabled"
      :outlined="btnStyle === 'outline'"
      :text="btnStyle === 'transparent'"
    >
      <span>{{ text }}</span>
      <!-- <v-icon>mdi-star</v-icon> -->
      <!-- <span v-if="!onlyIcon"> -->
      <!-- <span v-if="iconLeft">{{ iconLeft }}</span> -->
      <!-- <span>{{ text }}</span> -->
      <!-- <span v-if="iconLeft">{{ iconRight }}</span> -->
      <!-- </span> -->
      <!-- <v-icon>mdi-heart</v-icon> -->
      <!-- <img @click="hello()" class="icon" :src="icon" alt="Icon" /> -->
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    icon: String,
    iconAlign: {
      type: String,
      default: "none"
    },
    disabled: Boolean,
    colorTheme: {
      type: String,
      default: ""
    },
    btnStyle: {
      type: String,
      default: ""
    }
  },
  mounted() {
    console.error('this', this.colorTheme)
  },
  methods: {
    getColor() {
      if (this.colorTheme === "mew") {
        console.error('in here')
        return "primary";
      }
    }
  }
};
</script>