<template>
  <div>
    <mew-button
      title="Title"
      subtitle="Subtitle"
      tag="tag"
      color-theme="light-green"
      :is-new="true"
      :right-icon="makerDao"
      :titleIcon="iconChecked"
    />
    <br />
    <div class="code-wrapper">
      <code>{{ greenSuperBtn }}</code>
    </div>
  </div>
</template>

<script>
import MewSuperButton from "@/components/MewSuperButton/MewSuperButton.vue";
import makerDao from "@/assets/images/dapps/icon-makerdao.png";
import iconChecked from "@/assets/images/icons/icon-checked.png";

export default {
  title: "Green",
  components: {
    "mew-button": MewSuperButton
  },
  data() {
    return {
      makerDao: makerDao,
      iconChecked: iconChecked,
      greenSuperBtn:
        '<mew-super-button title="Title" subtitle="Subtitle" tag="tag" color-theme="light-green" :is-new="true" :right-icon="makerDao" :titleIcon="iconChecked"/>'
    };
  }
};
</script>
