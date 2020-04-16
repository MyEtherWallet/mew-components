<template>
  <div>
    <v-combobox
      class="address-select"
      v-model="addressValue"
      :items="items"
      item-text="address"
      item-value="address"
      :label="label"
      :placeholder="placeholder"
      :menu-props="{ value: autoSelectMenu, closeOnClick: true }"
      ref="addressInput"
      return-object
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

      <template v-slot:item="data">
        <div class="item-container" @click="selectAddress(data.item)">
          <div class="address-container">
            <div class="address">{{ data.item.address }}</div>
          </div>
          <div class="nickname">{{ data.item.nickname }}</div>
        </div>
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
    },
    selectAddress(data) {
      this.autoSelectMenu = false;
      this.addressValue = data;
      this.$emit("emitSelectedValue", data);
    }
  }
};
</script>

<style lang="scss" scoped>
.v-application {
  .item-container {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;

    .address-container {
      .address {
        color: var(--v-basic-base);
      }
    }

    .nickname {
      font-size: 10px;
      font-weight: 700;
      text-align: right;
      color: var(--v-primary-base);
    }
  }

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
        &:hover {
          opacity: 0.5;
        }
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
