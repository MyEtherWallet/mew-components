<template>
  <div>
    <br />
    <mew-button
      btn-style="transparent"
      title="Error Transparent"
      color-theme="error"
    />
    <div class="code-wrapper">
      <code>{{ errorTransparent }}</code>
    </div>
    <br />
    <mew-button btn-style="outline" title="Error Outline" color-theme="error" />
    <div class="code-wrapper">
      <code>{{ errorOutline }}</code>
    </div>
    <br />
    <mew-button
      btn-style="background"
      title="Error Background"
      color-theme="error"
    />
    <div class="code-wrapper">
      <code>{{ errorBackground }}</code>
    </div>
    <br />
    <mew-button
      :icon="iconPrinter"
      icon-align="left"
      btn-style="background"
      title="Error Background Left Icon"
      color-theme="error"
    />
    <div class="code-wrapper">
      <code>{{ errorBackgroundLeftIcon }}</code>
    </div>
    <br />
    <mew-button
      :icon="iconPrinter"
      icon-align="right"
      btn-style="outline"
      title="Error Outline Right Icon"
      color-theme="error"
    />
    <div class="code-wrapper">
      <code>{{ errorOutlineRightIcon }}</code>
    </div>
  </div>
</template>

<script>
import MewButton from "@/components/MewButton/MewButton.vue";
import iconPrinter from "@/assets/images/icons/icon-printer.png";

export default {
  title: "Error",
  components: {
    "mew-button": MewButton
  },
  data() {
    return {
      iconPrinter: iconPrinter,
      errorTransparent:
        '<mew-button btn-style="transparent" title="Error Transparent" color-theme="error"/>',
      errorOutline:
        '<mew-button btn-style="outline" title="Error Outline" color-theme="error"/>',
      errorBackground:
        '<mew-button btn-style="background" title="Error Background" color-theme="error"/>',
      errorBackgroundLeftIcon:
        '<mew-button :icon="iconPrinter" icon-align="left" btn-style="background" title="Error Background Left Icon" color-theme="error"/>',
      errorOutlineRightIcon:
        '<mew-button :icon="iconPrinter" icon-align="right" btn-style="outline" title="Error Outline Right Icon" color-theme="error"/>'
    };
  }
};
</script>
