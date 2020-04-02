<template>
  <div>
    <br />
    <mew-button
      btn-style="transparent"
      title="Primary Transparent"
      color-theme="primary"
    />
    <div class="code-wrapper">
      <code>{{ primaryTransparent }}</code>
    </div>
    <br />
    <mew-button
      btn-style="outline"
      title="Primary Outline"
      color-theme="primary"
    />
    <div class="code-wrapper">
      <code>{{ primaryOutline }}</code>
    </div>
    <br />
    <mew-button
      btn-style="background"
      title="Primary Background"
      color-theme="primary"
    />
    <div class="code-wrapper">
      <code>{{ primaryBackground }}</code>
    </div>
    <br />
    <mew-button
      :icon="iconPrinter"
      icon-align="left"
      btn-style="background"
      title="Primary Background Left Icon"
      color-theme="primary"
    />
    <div class="code-wrapper">
      <code>{{ primaryBackgroundLeftIcon }}</code>
    </div>
    <br />
    <mew-button
      :icon="iconPrinter"
      icon-align="right"
      btn-style="outline"
      title="Primary Outline Right Icon"
      color-theme="primary"
    />
    <div class="code-wrapper">
      <code>{{ primaryOutlineRightIcon }}</code>
    </div>
  </div>
</template>

<script>
import MewButton from "@/components/MewButton/MewButton.vue";
import iconPrinter from "@/assets/images/icons/icon-printer.png";

export default {
  title: "Primary",
  components: {
    "mew-button": MewButton
  },
  data() {
    return {
      iconPrinter: iconPrinter,
      primaryTransparent:
        '<mew-button btn-style="transparent" title="Primary Transparent" color-theme="primary"/>',
      primaryOutline:
        '<mew-button btn-style="outline" title="Primary Outline" color-theme="primary"/>',
      primaryBackground:
        '<mew-button btn-style="background" title="Primary Background" color-theme="primary"/>',
      primaryBackgroundLeftIcon:
        '<mew-button :icon="iconPrinter" icon-align="left" btn-style="background" title="Primary Background Left Icon" color-theme="primary"/>',
      primaryOutlineRightIcon:
        '<mew-button :icon="iconPrinter" icon-align="right" btn-style="outline" title="Primary Outline Right Icon" color-theme="primary"/>'
    };
  }
};
</script>

<style lang="scss">
.code-wrapper {
  margin: 15px;
  text-align: center;

  code {
    color: #000;
  }
}
</style>
