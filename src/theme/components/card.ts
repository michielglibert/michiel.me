import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    backgroundColor: "gray.background",
    boxShadow: "none",
    borderRadius: "lg",
  },
});

const cardTheme = defineMultiStyleConfig({ baseStyle });

export default cardTheme;
