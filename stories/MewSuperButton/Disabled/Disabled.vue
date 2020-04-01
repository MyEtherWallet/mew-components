<template>
  <div>
    <mew-button
      title="Title"
      subtitle="Subtitle"
      tag="tag"
      color-theme="disabled"
      :right-icon="timerIcon"
      :titleIcon="iconChecked"
    />
    <br />
    <div class="code-wrapper">
      <code>{{ disabledSuperBtn }}</code>
    </div>
  </div>
</template>

<script>
import MewSuperButton from "@/components/MewSuperButton/MewSuperButton.vue";
import timerIcon from "@/assets/images/icons/icon-timer-enable.png";
import iconChecked from "@/assets/images/icons/icon-checked.png";

export default {
  title: "Green",
  components: {
    "mew-button": MewSuperButton
  },
  data() {
    return {
      timerIcon: timerIcon,
      iconChecked: iconChecked,
      disabledSuperBtn:
        '<mew-super-button title="Title" subtitle="Subtitle" tag="tag" color-theme="disabled" :right-icon="timerIcon" :titleIcon="iconChecked"/>'
    };
  }
};
</script>
