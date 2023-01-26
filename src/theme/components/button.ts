import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const outline = defineStyle({
  border: "2px solid",
  borderColor: "secondary",
  px: "12",
  py: "3",
  textStyle: "large",
  borderRadius: "full",
  transition: "300ms",
  _hover: {
    bg: "secondary.100",
  },
});

const buttonTheme = defineStyleConfig({
  variants: { outline },
  defaultProps: { variant: "outline" },
});

export default buttonTheme;
