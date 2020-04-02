<template>
  <div>
    <br />
    <mew-button
      btn-style="transparent"
      title="Basic Transparent"
      color-theme="basic"
    />
    <div class="code-wrapper">
      <code>{{ basicTransparent }}</code>
    </div>
    <br />
    <mew-button btn-style="outline" title="Basic Outline" color-theme="basic" />
    <div class="code-wrapper">
      <code>{{ basicOutline }}</code>
    </div>
    <br />
    <mew-button
      btn-style="background"
      title="Basic Background"
      color-theme="basic"
    />
    <div class="code-wrapper">
      <code>{{ basicBackground }}</code>
    </div>
    <br />
    <mew-button
      :icon="iconPrinter"
      icon-align="left"
      btn-style="background"
      title="Basic Background Left Icon"
      color-theme="basic"
    />
    <div class="code-wrapper">
      <code>{{ basicBackgroundLeftIcon }}</code>
    </div>
    <br />
    <mew-button
      :icon="iconPrinter"
      icon-align="right"
      btn-style="outline"
      title="Basic Outline Right Icon"
      color-theme="basic"
    />
    <div class="code-wrapper">
      <code>{{ basicOutlineRightIcon }}</code>
    </div>
    <br />
    <mew-button
      btn-style="outline"
      title="Basic Outline Disabled"
      color-theme="basic"
      disabled="true"
    />
    <div class="code-wrapper">
      <code>{{ basicOutlineRightIcon }}</code>
    </div>
  </div>
</template>

<script>
import MewButton from "@/components/MewButton/MewButton.vue";
import iconPrinter from "@/assets/images/icons/icon-printer.png";

export default {
  title: "Basic",
  components: {
    "mew-button": MewButton
  },
  data() {
    return {
      iconPrinter: iconPrinter,
      basicTransparent:
        '<mew-button btn-style="transparent" title="Basic Transparent" color-theme="basic"/>',
      basicOutline:
        '<mew-button btn-style="outline" title="Basic Outline" color-theme="basic"/>',
      basicBackground:
        '<mew-button btn-style="background" title="Basic Background" color-theme="basic"/>',
      basicBackgroundLeftIcon:
        '<mew-button :icon="iconPrinter" icon-align="left" btn-style="background" title="Basic Background Left Icon" color-theme="basic"/>',
      basicOutlineRightIcon:
        '<mew-button :icon="iconPrinter" icon-align="right" btn-style="outline" title="Basic Outline Right Icon" color-theme="basic"/>'
    };
  }
};
</script>
