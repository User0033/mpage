import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineRecipe,
} from "@chakra-ui/react";

const buttonRecipe = defineRecipe({
  variants: {
    variant: {
      orangeButton: {
        bg: "#D07A25",
        borderRadius: 0,
        color: "white",
      },
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
