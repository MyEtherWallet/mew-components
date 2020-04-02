<template>
  <div class="wrapper">
    <br />
    <mew-button
      btn-style="transparent"
      title="White Transparent"
      color-theme="white"
    />
    <div class="code-wrapper">
      <code>{{ whiteTransparent }}</code>
    </div>
    <br />
    <mew-button btn-style="outline" title="White Outline" color-theme="white" />
    <div class="code-wrapper">
      <code>{{ whiteOutline }}</code>
    </div>
    <br />
    <mew-button
      btn-style="background"
      title="White Background"
      color-theme="white"
    />
    <div class="code-wrapper">
      <code>{{ whiteBackground }}</code>
    </div>
    <br />
    <mew-button
      :icon="iconEdit"
      icon-align="left"
      btn-style="background"
      title="White Background Left Icon"
      color-theme="white"
    />
    <div class="code-wrapper">
      <code>{{ whiteBackgroundLeftIcon }}</code>
    </div>
    <br />
    <mew-button
      :icon="iconEdit"
      icon-align="right"
      btn-style="outline"
      title="White Outline Right Icon"
      color-theme="white"
    />
    <div class="code-wrapper">
      <code>{{ whiteOutlineRightIcon }}</code>
    </div>
  </div>
</template>

<script>
import MewButton from "@/components/MewButton/MewButton.vue";
import iconEdit from "@/assets/images/icons/icon-edit-green.png";

export default {
  title: "White",
  components: {
    "mew-button": MewButton
  },
  data() {
    return {
      iconEdit: iconEdit,
      whiteTransparent:
        '<mew-button btn-style="transparent" title="White Transparent" color-theme="white"/>',
      whiteOutline:
        '<mew-button btn-style="outline" title="White Outline" color-theme="white"/>',
      whiteBackground:
        '<mew-button btn-style="background" title="White Background" color-theme="white"/>',
      whiteBackgroundLeftIcon:
        '<mew-button :icon="iconEdit" icon-align="left" btn-style="background" title="White Background Left Icon" color-theme="white"/>',
      whiteOutlineRightIcon:
        '<mew-button :icon="iconEdit" icon-align="right" btn-style="outline" title="White Outline Right Icon" color-theme="white"/>'
    };
  }
};
</script>

<style lang="scss">
.wrapper {
  height: 100%;
}
</style>
