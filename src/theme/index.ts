import "@fontsource/manrope";

import { extendTheme } from "@chakra-ui/react";
import components from "./components";

import fonts from "./foundation/fonts";
import styles from "./foundation/styles";
import sizes from "./foundation/sizes";
import space from "./foundation/space";
import textStyles from "./foundation/textStyles";
import breakpoints from "./foundation/breakpoints";
import radii from "./foundation/radii";
import baseColors from "./foundation/baseColors";

const theme = extendTheme({
  colors: baseColors,
  fonts,
  space,
  sizes,
  textStyles,
  styles,
  radii,
  components,
  breakpoints,
});

export default theme;
