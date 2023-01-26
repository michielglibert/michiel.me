export const bp = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tabletS: 520,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktopS: 1920,
  desktop: 2560,
};

const breakpoints = Object.assign(
  { base: '0px' },
  ...Object.entries(bp).map(([key, value]) => ({
    [key]: `${value}px`,
  })),
);

export default breakpoints;
