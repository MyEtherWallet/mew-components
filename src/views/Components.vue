<template>
  <v-container class="py-12">
    <!--================================================================================-->
    <v-snackbar
      v-model="snackbarOpen"
      color="success"
      :timeout="1000"
      top
      class="text-capitalize"
    >
      {{ snackbarMsg }}
      <v-btn dark text @click="snackbarOpen = false">
        Close
      </v-btn>
    </v-snackbar>

    <!--================================================================================-->
    <v-divider></v-divider>
    <h2 class="mt-4 mb-2">Buttons</h2>
    <v-row>
      <cc title="Primary">
        <mew-button
          class="white--text mr-1"
          color="primary"
          @click.native="
            snackbarOpen = true;
            snackbarMsg = 'Clicked';
          "
          label="Button"
        />
      </cc>
      <cc title="Primary Outline">
        <mew-button
          label="Button"
          color="primary"
          outlined
          @click.native="
            snackbarOpen = true;
            snackbarMsg = 'Clicked';
          "
          class="mr-1"
        />
      </cc>
      <cc title="Secondary">
        <mew-button
          label="Button"
          color="secondary"
          @click.native="
            snackbarOpen = true;
            snackbarMsg = 'Clicked';
          "
          class="mr-1 white--text"
        />
      </cc>
      <cc title="Secondary Outline">
        <mew-button
          label="Button"
          color="secondary"
          outlined
          @click.native="
            snackbarOpen = true;
            snackbarMsg = 'Clicked';
          "
          class="mr-1"
        />
      </cc>
      <cc title="Disabled">
        <mew-button
          label="Button"
          color="secondary"
          disabled
          @click.native="
            snackbarOpen = true;
            snackbarMsg = 'Clicked';
          "
          class="mr-1"
        />
      </cc>
      <cc title="Outline Disabled">
        <mew-button
          label="Button"
          color="secondary"
          outlined
          disabled
          @click.native="
            snackbarOpen = true;
            snackbarMsg = 'Clicked';
          "
          class="mr-1"
        />
      </cc>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <cc subtitle="Switch" title="Switch Toggle">
        <SwitchToggle
          v-model="modelSwitchToggle"
          label-off="Off"
          label-on="On"
        />
        <div>
          <span class="font-weight-light caption">Emitted v-model value </span>
          <code>{{ modelSwitchToggle }}</code>
        </div>
      </cc>
      <cc subtitle="Switch" title="Switch Toggle">
        <SwitchToggle
          v-model="modelSwitchToggleSquare"
          label-off="12 mnemonic phrases"
          label-on="24 mnemonic phrases"
        />
        <div>
          <span class="font-weight-light caption">Emitted v-model value </span>
          <code>{{ modelSwitchToggleSquare }}</code>
        </div>
      </cc>
      <cc subtitle="Checkboxe" title="Checkboxe">
        <checkbox
          v-model="modelCheckbox1"
          label-unchecked="Unchecked"
          label-checked="Checked"
        />
        <div>
          <span class="font-weight-light caption">Emitted v-model value </span>
          <code>{{ modelCheckbox1 }}</code>
        </div>
      </cc>
      <cc subtitle="Checkboxe" title="Checkboxe">
        <radio v-model="modelRadio1" :items="radioItems" />
        <div>
          <span class="font-weight-light caption">Emitted v-model value </span>
          <code>{{ modelRadio1 }}</code>
        </div>
      </cc>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <cc subtitle="Popover" title="Popover">
        <popover
          text="An MD5 hash is created by taking a string of an any length and encoding it into a 128-bit fingerprint. Encoding the same string using the MD5 algorithm will always result in the same 128-bit hash output. MD5 hashes are commonly used with smaller strings when storing passwords, credit card numbers or other sensitive data in databases such as the popular MySQL. This tool provides a quick and easy way to encode an MD5 hash from a simple string of up to 256 characters in length."
        />
        <span class="ml-3">Hover to see tooltip</span>
      </cc>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <cc subtitle="Input" title="Input Normal">
        <InputNormal
          v-model="modelInputNormal"
          title="Eth to send"
          placeholder="Eth amount"
          :showhint="true"
          hint="Amount must be larger than 1 eth."
        />
        <div class="mt-3">
          <span class="font-weight-light caption">Emitted v-model value </span>
          <code>{{ modelInputNormal }}</code>
        </div>
      </cc>
      <cc subtitle="Input" title="Input Password">
        <InputPassword
          v-model="modelInputPassword"
          title1="Password"
          title2="Confirm"
          placeholder1="Enter password..."
          placeholder2="Re-enter password..."
          errorMinimum="At least 8 characters"
          errorPasswordNoMatch="The password you entered don't match"
        />
        <div class="mt-3">
          <span class="font-weight-light caption">Emitted v-model value </span>
          <code>{{ modelInputPassword }}</code>
        </div>
      </cc>
      <cc subtitle="Input" title="Input Search1">
        <p class="mb-7 caption">
          ** For more information, visit
          <a
            href="https://vuetifyjs.com/en/components/autocompletes"
            target="_balnk"
            >https://vuetifyjs.com/en/components/autocompletes</a
          >
        </p>
        <InputSearch1
          v-model="modelInputSearch1"
          title="Cryptocurrency"
          placeholder="Search for a coin..."
          :items="searchItems1"
        />
        <div class="mt-3">
          <span class="font-weight-light caption">Emitted v-model value </span>
          <code>{{ modelInputSearch1 }}</code>
        </div>
      </cc>
      <cc subtitle="Input" title="Input Search2">
        <p class="mb-7 caption">
          ** For more information, visit
          <a
            href="https://vuetifyjs.com/en/components/autocompletes"
            target="_balnk"
            >https://vuetifyjs.com/en/components/autocompletes</a
          >
        </p>
        <InputSearch2
          v-model="modelInputSearch2"
          title="Contract"
          placeholder="Search for a contract..."
          :items="searchItems2"
        />
        <div class="mt-3">
          <span class="font-weight-light caption">Emitted v-model value </span>
          <code>{{ modelInputSearch2 }}</code>
        </div>
      </cc>
      <cc subtitle="Input" title="Input Search3">
        <p class="mb-7 caption">
          ** For more information, visit
          <a
            href="https://vuetifyjs.com/en/components/autocompletes"
            target="_balnk"
            >https://vuetifyjs.com/en/components/autocompletes</a
          >
        </p>
        <InputSearch3
          v-model="modelInputSearch3"
          placeholder="Choose existing contract"
          maxwidth="250"
          :singleline="true"
          :items="searchItems3"
        />
        <div class="mt-3">
          <span class="font-weight-light caption">Emitted v-model value </span>
          <code>{{ modelInputSearch3 }}</code>
        </div>
      </cc>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <cc subtitle="Help Center" title="Help Center Buttons">
        <Community class="mb-4" maxwidth="400" />
        <CustomerSupport maxwidth="400" />
      </cc>
      <cc subtitle="Warning" title="Warning Box">
        <Warningbox
          text="WARNING: You and only you are responsible for your security."
        />
      </cc>
      <cc subtitle="Community" title="Community Buttons">
        <CommunityButtons />
      </cc>
      <cc subtitle="Reminder" title="Reminder Box">
        <ReminderBox
          title="Don't share it"
          text="Your funds could be in danger if you use this file on malicious sites."
        />
      </cc>
      <cc subtitle="Social" title="Social Buttons" class="icon-container">
        <v-btn icon class="mr-2" color="grey lighten-1">
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn icon class="mr-2" color="grey lighten-1">
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
        <v-btn icon class="mr-2" color="grey lighten-1">
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
        <v-btn icon class="mr-2" color="grey lighten-1">
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
        <v-btn icon class="mr-2" color="grey lighten-1">
          <v-icon>mdi-github-circle</v-icon>
        </v-btn>
        <v-btn icon class="mr-2" color="grey lighten-1">
          <v-icon>mdi-reddit</v-icon>
        </v-btn>
        <v-btn icon class="mr-2" color="grey lighten-1">
          <v-icon>mdi-medium</v-icon>
        </v-btn>
      </cc>
      <cc subtitle="Social" title="Flags">
        <v-btn height="50" width="50" icon class="mr-2" color="grey lighten-1">
          <img width="30" src="@/assets/icons/Flags/china.png" />
        </v-btn>
        <v-btn height="50" width="50" icon class="mr-2" color="grey lighten-1">
          <img width="30" src="@/assets/icons/Flags/japan.png" />
        </v-btn>
        <v-btn height="50" width="50" icon class="mr-2" color="grey lighten-1">
          <img width="30" src="@/assets/icons/Flags/korea.png" />
        </v-btn>
        <v-btn height="50" width="50" icon class="mr-2" color="grey lighten-1">
          <img width="30" src="@/assets/icons/Flags/russia.png" />
        </v-btn>
        <v-btn height="50" width="50" icon class="mr-2" color="grey lighten-1">
          <img width="30" src="@/assets/icons/Flags/uk.png" />
        </v-btn>
        <v-btn height="50" width="50" icon class="mr-2" color="grey lighten-1">
          <img width="30" src="@/assets/icons/Flags/germany.png" />
        </v-btn>
      </cc>
      <cc subtitle="News" title="News Box">
        <NewsBox />
      </cc>
      <cc subtitle="Ad" title="Ad Slider">
        <p>** All the images must be in same size!</p>
        <AdSlider />
      </cc>
      <cc subtitle="TX" title="TX Status">
        <TxStatus />
      </cc>
    </v-row>
  </v-container>
</template>

<script>
import cc from "@/views/components/ComponentContainer";

import MewButton from "@/components/MewButton/MewButton";
import SwitchToggle from "@/components/Switch/SwitchToggle";
import Checkbox from "@/components/Checkbox/Checkbox";
import Radio from "@/components/Radio/Radio";
import Popover from "@/components/Popover/Popover";
import Warningbox from "@/components/Warningbox/Warningbox";
import InputNormal from "@/components/Input/InputNormal";
import InputPassword from "@/components/Input/InputPassword";
import InputSearch1 from "@/components/Input/InputSearch1";
import InputSearch2 from "@/components/Input/InputSearch2";
import InputSearch3 from "@/components/Input/InputSearch3";
import Community from "@/components/HelpCenter/Community";
import CustomerSupport from "@/components/HelpCenter/CustomerSupport";
import CommunityButtons from "@/components/Community/CommunityButtons";
import ReminderBox from "@/components/Reminder/ReminderBox";
import NewsBox from "@/components/News/NewsBox";
import AdSlider from "@/components/Ad/AdSlider";
import TxStatus from "@/components/Tx/TxStatus";

import btc from "@/assets/coins/btc.png";
import eth from "@/assets/coins/eth.png";
import bch from "@/assets/coins/bch.png";
import xrp from "@/assets/coins/xrp.png";

export default {
  components: {
    cc,
    "mew-button": MewButton,
    SwitchToggle,
    Checkbox,
    Radio,
    Popover,
    Warningbox,
    InputNormal,
    InputPassword,
    InputSearch1,
    InputSearch2,
    InputSearch3,
    Community,
    CustomerSupport,
    CommunityButtons,
    ReminderBox,
    NewsBox,
    AdSlider,
    TxStatus
  },
  data: () => ({
    snackbarOpen: false,
    snackbarMsg: "",
    modelSwitchToggle: false,
    modelSwitchToggleSquare: false,
    modelCheckbox1: false,
    modelRadio1: false,
    radioItems: [
      { label: "Item1", value: 1 },
      { label: "Item2", value: 2 },
      { label: "Item3", value: 3 }
    ],
    modelInputNormal: "",
    modelInputPassword: false,
    modelInputSearch1: "",
    searchItems1: [
      { header: "Major Cryptocurrency" },
      { name: "Bitcoin", value: "btc", group: "Group 1", avatar: btc },
      { name: "Ethereum", value: "eth", group: "Group 1", avatar: eth },
      { header: "Miner Cryptocurrency" },
      { name: "Bitcoin Cash", value: "bch", group: "Group 2", avatar: bch },
      { name: "XRP", value: "xrp", group: "Group 2", avatar: xrp }
    ],
    modelInputSearch2: "",
    searchItems2: [
      { header: "My Contracts" },
      { name: "Battle of thermopylae", value: "thermopylae" },
      { name: "BattleDrome ICO", value: "drome" },
      { header: "Others" },
      { name: "ADST - AdShares", value: "adst", group: "Cloud" },
      {
        name: "Athenian: Warrior for Bathroom",
        value: "athenian",
        group: "Game"
      }
    ],
    searchItems3: [
      { header: "My Contracts" },
      { name: "Battle of thermopylae", value: "thermopylae" },
      { name: "BattleDrome ICO", value: "drome" },
      { header: "Others" },
      { name: "ADST - AdShares", value: "adst", group: "Cloud" },
      {
        name: "Athenian: Warrior for Bathroom",
        value: "athenian",
        group: "Game"
      }
    ],
    modelInputSearch3: ""
  })
};
</script>

<style lang="scss" scoped>
.icon-container {
  i {
    font-size: 30px;
  }
}
</style>
