<template>
  <div>
    <v-combobox
      class="address-select"
      v-model="addressValue"
      color="titlePrimary"
      :items="items"
      :label="label"
      item-value="address"
      item-text="address"
      :placeholder="placeholder"
      :disabled="disabled"
      :menu-props="{ value: autoSelectMenu, closeOnClick: true }"
      ref="addressInput"
      outlined
    >
      <template v-slot:prepend-inner>
        <div
          v-if="!isValidAddress"
          class="blockie-placeholder"
        />
        <div
          v-if="isValidAddress"
          class="blockie-container"
        >
          <blockie
            :address="addressValue.address"
            width="25px"
            height="25px"
          />
        </div>
      </template>

      <template v-slot:append>
        <div class="icon-container">
          <v-tooltip
            color="white titlePrimary--text"
            top
          >
            <template v-slot:activator="{ on }">
              <img
                @click="copyToClipboard"
                class="copy-icon"
                v-on="on"
                src="@/assets/images/icons/icon-copy-enable.png"
                alt="copy"
              >
            </template>
            <span>Copy</span>
          </v-tooltip>
          <v-tooltip
            color="white titlePrimary--text"
            top
          >
            <template v-slot:activator="{ on }">
              <img
                @click="saveAddress"
                :class="['save-icon', getSaveBtnClasses()]"
                src="@/assets/images/icons/icon-saved-enable.png"
                v-on="on"
                alt="save"
              >
            </template>
            <span>Save Address</span>
          </v-tooltip>
        </div>
        <div class="border" />
        <v-icon @click="toggle">
          mdi-chevron-down
        </v-icon>
      </template>

      <template v-slot:item="{ item }">
        <div
          class="item-container d-flex align-center justify-space-between"
          @click="selectAddress(item)"
        >
          <div class="address-container d-flex align-center justify-space-between">
            <blockie
              class="blockie"
              :address="item.address"
              width="25px"
              height="25px"
            />
            <div class="mew-address address">
              {{ item.address }}
            </div>
          </div>
          <div class="nickname">
            {{ item.nickname }}
          </div>
        </div>
      </template>
    </v-combobox>
    <toast
      :show-toast="showToast"
      toast-type="success"
      text="Success!"
    />
  </div>
</template>

<script>
import Blockie from '@/components/Blockie/Blockie.vue';
import Toast from '@/components/Toast/Toast.vue';

export default {
  name: 'AddressSelector',
  props: {
    /**
     * Disables the input.
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Enables save address button.
     */
    enableSaveAddress: {
      type: Boolean,
      default: false
    },
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
      default: 'To Address'
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
      default: 'Please enter an address'
    },
    /**
     * The function applied to save the address.
     */
    saveAddress: {
      type: Function,
      default: function() {}
    }
  },
  components: {
    blockie: Blockie,
    toast: Toast
  },
  data() {
    return {
      showToast: false,
      addressValue: '',
      autoSelectMenu: false
    };
  },
  watch: {
    addressValue(newValue) {
      console.log('address value:', newValue);
    }
  },
  methods: {
    toggle() {
      this.autoSelectMenu = !this.autoSelectMenu;
    },
    copyToClipboard() {
      this.$refs.addressInput.$el.querySelector('input').select();
      document.execCommand('copy');
      this.toastType = 'success';
      this.showToast = true;
    },
    selectAddress(data) {
      this.autoSelectMenu = false;
      this.addressValue = data.address;
      this.$emit('emitSelectedValue', data);
    },
    getSaveBtnClasses() {
      if (!this.enableSaveAddress) {
        return 'disable-icon';
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.v-application,
.v-application--is-ltr {
  .item-container {
    padding: 15px 0;
    width: 100%;

    .address-container {
      .blockie {
        margin-right: 10px;
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
      height: 25px;
      width: 25px;
      border-radius: 50%;
      background-color: var(--v-selectHover-base);
      margin-right: 5px;
    }

    .blockie-container {
      margin-right: 5px;
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
      border-right: 1px solid var(--v-disabled-base);
      margin: 0 15px;
    }

    .mdi-chevron-down {
      margin-right: 5px;
    }
  }
}
</style>
