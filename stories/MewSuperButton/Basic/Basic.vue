<template>
  <div>
    <mew-button
      title="Title"
      subtitle="Subtitle"
      tag="tag"
      color-theme="basic"
      :right-icon="buyEthIcon"
      :titleIcon="iconChecked"
    />
    <br />
    <div class="code-wrapper">
      <code>{{ basicSuperBtn }}</code>
    </div>
  </div>
</template>

<script>
import MewSuperButton from "@/components/MewSuperButton/MewSuperButton.vue";
import buyEthIcon from "@/assets/images/icons/icon-buy-eth.png";
import iconChecked from "@/assets/images/icons/icon-checked.png";

export default {
  title: "Basic",
  components: {
    "mew-button": MewSuperButton
  },
  data() {
    return {
      buyEthIcon: buyEthIcon,
      iconChecked: iconChecked,
      basicSuperBtn:
        '<mew-super-button title="Title" subtitle="Subtitle" tag="tag" color-theme="basic" :right-icon="buyEthIcon" :titleIcon="iconChecked"/>'
    };
  }
};
</script>
