import colors from './colors';
export default {
  primary: {
    light: colors.GRAY100,
    main: colors.WHITE,
    dark: colors.CORAL,
    contrastText: colors.RED600,
  },

  secondary: {
    light: colors.GRAY400,
    main: colors.BLACK,
    dark: colors.GRAY800,
    contrastText: colors.RED600,
  },

  textPrimary: {
    main: colors.WHITE,
  },

  textSecondary: {
    main: colors.BLACK,
  },

  error: {
    main: colors.CORAL,
  },

  warning: {
    main: colors.ALERT,
  },

  action: {
    disabled: colors.WHITE,
  },

  contrastThreshold: 3,
  tonalOffset: 0.2,
};
