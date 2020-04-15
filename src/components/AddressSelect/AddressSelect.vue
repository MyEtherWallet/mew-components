<template>
  <div>
    <v-combobox
      class="address-select"
      v-model="addressValue"
      :items="items"
      :label="label"
      :placeholder="placeholder"
      :menu-props="{ value: autoSelectMenu }"
      ref="addressInput"
      outlined
    >
      <template v-slot:prepend-inner>
        <div v-if="!isValidAddress" class="blockie-placeholder"></div>
        <div v-if="isValidAddress" class="blockie-container">
          <slot name="blockie" />
        </div>
      </template>

      <template v-slot:append>
        <div class="icon-container">
          <img
            @click="copyToClipboard"
            class="copy-icon"
            src="@/assets/images/icons/icon-copy-enable.png"
            alt="copy"
          />
          <img
            @click="saveAddress"
            class="save-icon"
            src="@/assets/images/icons/icon-saved-enable.png"
            alt="save"
          />
        </div>
        <div class="border" />
        <v-icon @click="toggle">mdi-chevron-down</v-icon>
      </template>
    </v-combobox>
  </div>
</template>
<script>
export default {
  name: "AddressSelector",
  props: {
    /**
     * Returns if the address is valid or not.
     */
    isValidAddress: {
      type: Boolean,
      default: false
    },
    /**
     * The input label.
     */
    label: {
      type: String,
      default: "To Address"
    },
    /**
     * The saved addresses in address book.
     */
    items: {
      type: Array,
      default: function() {
        return [];
      }
    },
    /**
     * The input placeholder.
     */
    placeholder: {
      type: String,
      default: "Please enter an address"
    },
    /**
     * The function applied to save the address.
     */
    saveAddress: {
      type: Function,
      default: function() {}
    }
  },
  data() {
    return {
      addressValue: "",
      autoSelectMenu: false
    };
  },
  watch: {
    inputValue(newValue) {
      console.log("input value:", newValue);
    }
  },
  mounted() {
    this.addressValue = this.value;
  },
  methods: {
    toggle() {
      this.autoSelectMenu = !this.autoSelectMenu;
    },
    copyToClipboard() {
      this.$refs.addressInput.$el.querySelector("input").select();
      document.execCommand("copy");
      console.log("copied");
      // Toast.responseHandler(this.$t('common.copied'), Toast.INFO);
    }
  }
};
</script>

<style lang="scss" scoped>
.v-application {
  .address-select {
    .blockie-placeholder {
      height: 30px;
      width: 30px;
      border-radius: 100px;
      background-color: var(--v-light-grey-base);
      margin-bottom: 17px;
      margin-right: 5px;
    }

    .blockie-container {
      max-height: 25px;
    }

    .icon-container {
      .copy-icon {
        height: 23px;
        margin-right: 5px;
      }

      .save-icon {
        height: 25px;
      }

      img {
        cursor: pointer;
      }
    }

    .border {
      border-right: 1px solid var(--v-light-grey-base);
      margin: 0 15px;
    }

    .mdi-chevron-down {
      margin-right: 5px;
    }
  }
}
</style>
