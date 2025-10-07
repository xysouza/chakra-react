// src/theme/theme.js
import { defineConfig, createSystem, defaultConfig } from "@chakra-ui/react";
import { animationStyles } from "./animationStyles";

const config = defineConfig({
  theme: {
    animationStyles,
  },
});

export const system = createSystem(defaultConfig, config);
