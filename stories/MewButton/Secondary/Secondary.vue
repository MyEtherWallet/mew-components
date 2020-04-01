<template>
  <div>
    <br />
    <mew-button
      btn-style="transparent"
      title="Secondary Transparent"
      color-theme="secondary"
    />
    <div class="code-wrapper">
      <code>{{ secondaryTransparent }}</code>
    </div>
    <br />
    <mew-button
      btn-style="outline"
      title="Secondary Outline"
      color-theme="secondary"
    />
    <div class="code-wrapper">
      <code>{{ secondaryOutline }}</code>
    </div>
    <br />
    <mew-button
      btn-style="background"
      title="Secondary Background"
      color-theme="secondary"
    />
    <div class="code-wrapper">
      <code>{{ secondaryBackground }}</code>
    </div>
    <br />
    <mew-button
      :icon="iconPrinter"
      icon-align="left"
      btn-style="background"
      title="Secondary Background Left Icon"
      color-theme="secondary"
    />
    <div class="code-wrapper">
      <code>{{ secondaryBackgroundLeftIcon }}</code>
    </div>
    <br />
    <mew-button
      :icon="iconPrinter"
      icon-align="right"
      btn-style="outline"
      title="Secondary Outline Right Icon"
      color-theme="secondary"
    />
    <div class="code-wrapper">
      <code>{{ secondaryOutlineRightIcon }}</code>
    </div>
  </div>
</template>

<script>
import MewButton from "@/components/MewButton/MewButton.vue";
import iconPrinter from "@/assets/images/icons/icon-printer.png";

export default {
  title: "Secondary",
  components: {
    "mew-button": MewButton
  },
  data() {
    return {
      iconPrinter: iconPrinter,
      secondaryTransparent:
        '<mew-button btn-style="transparent" title="Secondary Transparent" color-theme="secondary"/>',
      secondaryOutline:
        '<mew-button btn-style="outline" title="Secondary Outline" color-theme="secondary"/>',
      secondaryBackground:
        '<mew-button btn-style="background" title="Secondary Background" color-theme="secondary"/>',
      secondaryBackgroundLeftIcon:
        '<mew-button :icon="iconPrinter" icon-align="left" btn-style="background" title="Secondary Background Left Icon" color-theme="secondary"/>',
      secondaryOutlineRightIcon:
        '<mew-button :icon="iconPrinter" icon-align="right" btn-style="outline" title="Secondary Outline Right Icon" color-theme="secondary"/>'
    };
  }
};
</script>
