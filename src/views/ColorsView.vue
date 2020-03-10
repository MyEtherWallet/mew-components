<template>
  <v-container>
    <div class="title">Theme Colors</div>
    <h5 class="mt-2">Green</h5>
    <color-container :colors="greenShades" />
    <h5 class="mt-2">Blue</h5>
    <color-container :colors="blueShades" />
    <h5 class="mt-2">Grey/White</h5>
    <color-container :colors="greyShades" />
    <h5 class="mt-2">Red</h5>
    <color-container :colors="redShades" />
    <h5 class="mt-2">Yellow/Orange</h5>
    <color-container :colors="orangeShades" />
    <h5 class="mt-2">Purple</h5>
    <color-container :colors="purpleShades" />
  </v-container>
</template>

<script>
import ColorContainer from "./containers/ColorContainer";

export default {
  data() {
    return {
      greenShades: [
        {
          type: "primary",
          hex: "#05c0a5"
        },
        {
          type: "success",
          hex: "#4CAF50"
        },
        {
          type: "info",
          hex: "#003945"
        }
      ],
      blueShades: [
        {
          type: "secondary",
          hex: "#5a78f0"
        },
        {
          type: "police-strobe",
          hex: "#25b0e8"
        },
        {
          type: "accent",
          hex: "#cdf2ee"
        },
        {
          type: "light-mint",
          hex: "#f2fafa"
        },
        {
          type: "dark-space",
          hex: "#0b2840"
        }
      ],
      redShades: [
        {
          type: "error",
          hex: "#a70015"
        },
        {
          type: "cerise",
          hex: "#e96071"
        }
      ],
      orangeShades: [
        {
          type: "warning",
          hex: "#ff9800"
        },
        {
          type: "naples-yellow",
          hex: "#fcb755"
        },
        {
          type: "yellow-1",
          hex: "#ffe9c5"
        }
      ],
      purpleShades: [
        {
          type: "violet",
          hex: "#7070e3"
        }
      ],
      greyShades: [
        {
          type: "white",
          hex: "fff"
        },
        {
          type: "primary-silver",
          hex: "#f2f4fa"
        },
        {
          type: "silver",
          hex: "#cecece"
        },
        {
          type: "disabled-1",
          hex: "d8d8d8"
        },
        {
          type: "disabled-2",
          hex: "#999"
        },
        {
          type: "grey-1",
          hex: "#96a8b6"
        },
        {
          type: "independence",
          hex: "#536d8b"
        },
        {
          type: "dark-independence",
          hex: "#334758"
        },
        {
          type: "spruce",
          hex: "#506175"
        }
      ]
    };
  },
  components: {
    "color-container": ColorContainer
  }
};
</script>
