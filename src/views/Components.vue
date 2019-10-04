<template>
  <v-container>
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

    <v-row>
      <cc subtitle="Button" title="Button Green">
        <ButtonGreen
          label="Button"
          @click.native="
            snackbarOpen = true;
            snackbarMsg = 'Clicked';
          "
          class="mr-1"
        />
        <ButtonGreen
          label="Button"
          disabled
          @click.native="
            snackbarOpen = true;
            snackbarMsg = 'Clicked';
          "
        />
      </cc>
      <cc subtitle="Button" title="Button Green Border">
        <ButtonGreenBorder
          label="Button"
          @click.native="
            snackbarOpen = true;
            snackbarMsg = 'Clicked';
          "
          class="mr-1"
        />
        <ButtonGreenBorder
          label="Button"
          disabled
          @click.native="
            snackbarOpen = true;
            snackbarMsg = 'Clicked';
          "
        />
      </cc>
      <cc subtitle="Button" title="Button Blue">
        <ButtonBlue
          label="Button"
          @click.native="
            snackbarOpen = true;
            snackbarMsg = 'Clicked';
          "
          class="mr-1"
        />
        <ButtonBlue
          label="Button"
          disabled
          @click.native="
            snackbarOpen = true;
            snackbarMsg = 'Clicked';
          "
        />
      </cc>
      <cc subtitle="Button" title="Button Blue Border">
        <ButtonBlueBorder
          label="Button"
          @click.native="
            snackbarOpen = true;
            snackbarMsg = 'Clicked';
          "
          class="mr-1"
        />
        <ButtonBlueBorder
          label="Button"
          disabled
          @click.native="
            snackbarOpen = true;
            snackbarMsg = 'Clicked';
          "
        />
      </cc>
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
      <cc subtitle="Popover" title="Popover">
        <popover
          text="An MD5 hash is created by taking a string of an any length and encoding it into a 128-bit fingerprint. Encoding the same string using the MD5 algorithm will always result in the same 128-bit hash output. MD5 hashes are commonly used with smaller strings when storing passwords, credit card numbers or other sensitive data in databases such as the popular MySQL. This tool provides a quick and easy way to encode an MD5 hash from a simple string of up to 256 characters in length."
        />
      </cc>
      <cc subtitle="Popover" title="Popover">
        <Warningbox
          text="WARNING: You and only you are responsible for your security."
        />
      </cc>
      <cc subtitle="Input" title="Input Normal">
        <InputNormal
          v-model="modelInputNormal"
          title="Eth amount to send"
          placeholder="Placeholder111"
          value="0"
        />
        <div>
          <span class="font-weight-light caption">Emitted v-model value </span>
          <code>{{ modelInputNormal }}</code>
        </div>
      </cc>
    </v-row>
  </v-container>
</template>

<script>
import cc from "@/views/components/ComponentContainer";
import ButtonGreen from "@/components/Button/ButtonGreen";
import ButtonGreenBorder from "@/components/Button/ButtonGreenBorder";
import ButtonBlue from "@/components/Button/ButtonBlue";
import ButtonBlueBorder from "@/components/Button/ButtonBlueBorder";
import SwitchToggle from "@/components/Switch/SwitchToggle";
import Checkbox from "@/components/Checkbox/Checkbox";
import Radio from "@/components/Radio/Radio";
import Popover from "@/components/Popover/Popover";
import Warningbox from "@/components/Warningbox/Warningbox";
import InputNormal from "@/components/Input/InputNormal";

export default {
  components: {
    cc,
    ButtonGreen,
    ButtonGreenBorder,
    ButtonBlue,
    ButtonBlueBorder,
    SwitchToggle,
    Checkbox,
    Radio,
    Popover,
    Warningbox,
    InputNormal
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
    modelInputNormal: ""
  })
};
</script>
