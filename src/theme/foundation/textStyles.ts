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
    fontSize: { base: "2.441rem", laptop: "3.052rem", laptopL: "3.815rem" },
    fontWeight: "bold",
  },
  h2: {
    ...headingsBase,
    fontSize: { base: "1.953rem", laptop: "2.441rem", laptopL: "3.052rem" },
    fontWeight: "semibold",
  },
  h3: {
    ...headingsBase,
    fontSize: { base: "1.563rem", laptop: "1.953rem", laptopL: "2.441rem" },
    fontWeight: "medium",
  },
  h4: {
    ...headingsBase,
    fontSize: { base: "1.25rem", laptop: "1.563rem", laptopL: "1.953rem" },
  },
  h5: {
    ...headingsBase,
    fontSize: { base: "1.25rem", laptop: "1.563rem", laptopL: "1.563rem" },
  },

  // ****************************
  // * Normal text
  // ****************************
  large: {
    ...bodyBase,
    fontSize: { base: "1rem", laptop: "1.25rem", laptopL: "1.25rem" },
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
