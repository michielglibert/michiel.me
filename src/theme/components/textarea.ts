import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const outline = defineStyle({
  bg: "white",
});

const textareaTheme = defineStyleConfig({
  variants: { outline },
});

export default textareaTheme;
