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

const ghost = defineStyle({
  borderRadius: "full",
  _hover: {
    opacity: "0.7",
    bg: "transparent",
  },
  _active: {
    bg: "transparent",
  },
});

const buttonTheme = defineStyleConfig({
  variants: { outline, ghost },
  defaultProps: { variant: "outline" },
});

export default buttonTheme;
