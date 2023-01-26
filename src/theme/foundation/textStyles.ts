const headingsBase = {
  lineHeight: "120%",
};

const bodyBase = {
  lineHeight: "150%",
};

const textStyles = {
  // ****************************
  // * Heading
  // ****************************
  h1: {
    ...headingsBase,
    fontSize: "3.815rem",
    fontWeight: "bold",
  },
  h2: {
    ...headingsBase,
    fontSize: "3.052rem",
    fontWeight: "semibold",
  },
  h3: {
    ...headingsBase,
    fontSize: "2.441rem",
    fontWeight: "medium",
  },
  h4: {
    ...headingsBase,
    fontSize: "1.953rem",
  },
  h5: {
    ...headingsBase,
    fontSize: "1.563rem",
  },

  // ****************************
  // * Normal text
  // ****************************
  large: {
    ...bodyBase,
    fontSize: "1.25rem",
  },
  regular: {
    ...bodyBase,
    fontSize: "1rem",
  },
  small: {
    ...bodyBase,
    fontSize: "0.8rem",
  },
  extraSmall: {
    ...bodyBase,
    fontSize: "0.64rem",
  },
};

export default textStyles;
