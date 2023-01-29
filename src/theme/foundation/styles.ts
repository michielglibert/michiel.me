import { Manrope } from "@next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

const styles = {
  global: {
    "html,body,div#__next,div#__next > div": {
      height: "100%",
      overflowX: "hidden",
      fontFamily: `${manrope.style.fontFamily}`,
    },
    input: {
      color: "black",
    },
    a: {
      textDecoration: "none",
      _hover: {
        textDecoration: "none !important",
      },
    },
  },
};

export default styles;
