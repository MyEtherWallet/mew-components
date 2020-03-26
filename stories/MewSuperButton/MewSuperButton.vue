<template>
  <div>
    <v-btn
      @click="onBtnClick()"
      :class="getClasses()"
      :color="getColor()"
      :ripple="false"
      depressed
    >
      <div class="btn-container">
        <div class="left-container">
          <div class="title-wrapper">
            <div class="title font-weight-bold">{{ title }}</div>
            <div class="body-2" v-if="titleIcon"><img :src="titleIcon" alt="Icon" /></div>
          </div>
          <div class="mt-2" v-if="subtitle">{{ subtitle }}</div>
          <div class="body-2 mt-1">{{ tag }}</div>
        </div>
        <div class="right-container">
          <img v-if="rightIcon" class="icon" :src="rightIcon" alt="Icon" />
        </div>
      </div>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "MewSuperButton",
  props: {
    title: String,
    subtitle: String,
    tag: String,
    titleIcon: String,
    rightIcon: String,
    note: String,
    label: String,
    colorTheme: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      colorThemes: {
        basic: "basic"
      },
      active: false
    };
  },
  mounted() {
    console.error("sfdfs", this.rightIcon);
  },
  methods: {
    onBtnClick() {
      console.error("in here");
      this.active = !this.active;
    },
    getColor() {
      if (this.colorTheme.toLowerCase() === this.colorThemes.basic) {
        return "white";
      }
    },
    getClasses() {
      const classes = ['text-capitalize'];
      if (this.colorTheme.toLowerCase() === this.colorThemes.basic) {
        console.error("inhere");
        classes.push("basic--text");
      }

      if (this.active) {
        console.error("in hereeee");
        classes.push("green-border");
      }

      return classes;
    }
  }
};
</script>

<style lang="scss" scoped>
.v-application {
  .v-btn {
    border-radius: 10px;
    height: 100% !important;
  }

  .green-border {
    border: 2px solid var(--v-primary-base) !important;
  }

  .btn-container {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 3px 10px;
  }

  .left-container {
    margin-right: 146px;
    text-align: left;

    .title-wrapper {
      align-items: center;
      display: flex;
      img {
        height: 18px;
        margin-left: 2px;
      }
    }
  }

  .right-container {
    img {
      height: 101px;
    }
  }

  .title-wrapper {
    .title {
      font-size: 22px;
    }
  }
}
</style>
