<template>
  <div>
    <br />
    <mew-button
      btn-style="transparent"
      title="Disabled Transparent"
      color-theme="disabled"
    />
    <div class="code-wrapper">
      <code>{{ disabledTransparent }}</code>
    </div>
    <br />
    <mew-button
      btn-style="outline"
      title="Disabled Outline"
      color-theme="disabled"
    />
    <div class="code-wrapper">
      <code>{{ disabledOutline }}</code>
    </div>
    <br />
    <mew-button
      btn-style="background"
      title="Disabled Background"
      color-theme="disabled"
    />
    <div class="code-wrapper">
      <code>{{ disabledBackground }}</code>
    </div>
    <br />
    <mew-button
      :icon="iconEdit"
      icon-align="left"
      btn-style="background"
      title="Disabled Background Left Icon"
      color-theme="disabled"
    />
    <div class="code-wrapper">
      <code>{{ disabledBackgroundLeftIcon }}</code>
    </div>
    <br />
    <mew-button
      :icon="iconEdit"
      icon-align="right"
      btn-style="outline"
      title="Disabled Outline Right Icon"
      color-theme="disabled"
    />
    <div class="code-wrapper">
      <code>{{ disabledOutlineRightIcon }}</code>
    </div>
  </div>
</template>

<script>
import MewButton from "/Users/jessicapeng/mew-components/src/components/MewButton/MewButton.vue";
import iconEdit from "/Users/jessicapeng/mew-components/src/assets/images/icons/icon-edit-green.png";

export default {
  title: "Disabled",
  components: {
    "mew-button": MewButton
  },
  data() {
    return {
      iconEdit: iconEdit,
      disabledTransparent:
        '<mew-button btn-style="transparent" title="Disabled Transparent" color-theme="disabled"/>',
      disabledOutline:
        '<mew-button btn-style="outline" title="Disabled Outline" color-theme="disabled"/>',
      disabledBackground:
        '<mew-button btn-style="background" title="Disabled Background" color-theme="disabled"/>',
      disabledBackgroundLeftIcon:
        '<mew-button :icon="iconEdit" icon-align="left" btn-style="background" title="Disabled Background Left Icon" color-theme="disabled"/>',
      disabledOutlineRightIcon:
        '<mew-button :icon="iconEdit" icon-align="right" btn-style="outline" title="Disabled Outline Right Icon" color-theme="disabled"/>'
    };
  }
};
</script>
