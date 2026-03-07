import {
  CarouselNextTrigger,
  createSystem,
  defaultConfig,
  defineConfig,
  defineRecipe,
  defineSlotRecipe,
} from "@chakra-ui/react";
import { carouselAnatomy } from "@chakra-ui/react/anatomy";

const buttonRecipe = defineRecipe({
  variants: {
    variant: {
      orangeButton: {
        bg: "#D07A25",
        borderRadius: 0,
        color: "white",
      },
      linkOrangeButton: {
        bg: "transparent",
        borderRadius: 0,
        color: "white",
        fontSize: 16,
      },
    },
  },
});

export const carouselSlotRecipe = defineSlotRecipe({
  slots: carouselAnatomy.keys(),
  base: {
    indicator: {
      outline: "2px solid red",
      outlineOffset: "2px",
    },
    nextTrigger: {
      outline: "2px solid red",
      outlineOffset: "2px",
    },
    prevTrigger: {
      outline: "2px solid red",
      outlineOffset: "2px",
    },
    root: {
      outline: "2px solid red",
      outlineOffset: "2px",
    },
  },
});

const config = defineConfig({
  globalCss: {
    body: {
      bg: "#fffefa",
    },
  },
  theme: {
    tokens: {
      colors: {
        brand: {
          bg: { value: "#fffefa" },
          red: { value: "#E84839" },
          orange: { value: "#D07A25" },
        },
        primary: {
          DEFAULT: { value: "{colors.red.500}" },
        },
      },
    },
    recipes: {
      button: buttonRecipe,
    },
  },
});

export const system = createSystem(defaultConfig, config);
