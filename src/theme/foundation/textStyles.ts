const headingsBase = {
  fontWeight: "bold",
  lineHeight: "120%",
};

const bodyBase = {
  lineHeight: "150%",
};

const largeBase = {
  ...bodyBase,
  fontSize: "1.25rem",
};

const regularBase = {
  ...bodyBase,
  fontSize: "1rem",
};

const smallBodyBase = {
  ...bodyBase,
  fontSize: "0.8rem",
};
const extraSmallBodyBase = {
  ...bodyBase,
  fontSize: "0.64rem",
};

const textStyles = {
  // ****************************
  // * Heading
  // ****************************
  h1: {
    ...headingsBase,
    fontSize: "3.815rem",
  },
  h2: {
    ...headingsBase,
    fontSize: "3.052rem",
  },
  h3: {
    ...headingsBase,
    fontSize: "2.441rem",
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
  largeBase: {
    ...bodyBase,
    fontSize: "1.25rem",
  },
  regularBase: {
    ...bodyBase,
    fontSize: "1rem",
  },
  smallBodyBase: {
    ...bodyBase,
    fontSize: "0.8rem",
  },
  extraSmallBodyBase: {
    ...bodyBase,
    fontSize: "0.64rem",
  },
};

export default textStyles;
