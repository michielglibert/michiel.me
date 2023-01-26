import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  field: {
    background: "white",
  },
});

const inputTheme = defineMultiStyleConfig({
  variants: {
    outline: baseStyle,
  },
  defaultProps: { variant: "outline" },
});

export default inputTheme;
