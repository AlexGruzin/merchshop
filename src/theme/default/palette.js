import colors from './colors';
export default {
  primary: {
    light: colors.GREY50,
    main: colors.WHITE,
    dark: colors.GREY100,
    contrastText: colors.RED600,
  },

  secondary: {
    light: colors.GREY400,
    main: colors.BLACK,
    dark: colors.GREY800,
    contrastText: colors.RED600,
  },

  textPrimary: {
    main: colors.WHITE,
  },

  textSecondary: {
    main: colors.BLACK,
  },

  error: {
    main: colors.ERROR,
  },

  warning: {
    main: colors.ALERT,
  },

  contrastThreshold: 3,
  tonalOffset: 0.2,
};
