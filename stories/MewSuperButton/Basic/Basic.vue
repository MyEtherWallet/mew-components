<template>
  <div>
    <mew-button
      title="Title"
      subtitle="Subtitle"
      tag="#tag"
      color-theme="basic"
      :right-icon="buyEthIcon"
      :titleIcon="iconChecked"
    />
    <br />
  </div>
</template>

<script>
import MewSuperButton from "../MewSuperButton";
import buyEthIcon from "/Users/jessicapeng/mew-components/src/assets/images/icons/icon-buy-eth.png";
import iconChecked from "/Users/jessicapeng/mew-components/src/assets/images/icons/icon-checked.png";

export default {
  title: "Basic",
  components: {
    "mew-button": MewSuperButton
  },
  data() {
    return {
      buyEthIcon: buyEthIcon,
      iconChecked: iconChecked
    };
  }
};
</script>
