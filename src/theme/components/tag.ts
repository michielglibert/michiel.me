import { tagAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tagAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    borderRadius: "full",
  },
});

const outline = definePartsStyle({
  container: {
    bg: "white",
  },
});

const ml = defineStyle({
  px: "3",
  py: "1",
  textStyle: "regular",
});

const sizes = {
  ml: definePartsStyle({ container: ml, label: ml }),
};

const tagTheme = defineMultiStyleConfig({
  baseStyle,
  variants: {
    outline,
  },
  defaultProps: {
    variant: "outline",
    size: "ml",
  },
  sizes,
});

export default tagTheme;
