import palette from '../../palette';
import colors from '../../colors';

export default {

  textPrimary: {
    color: palette.secondary.main,
    backgroundColor: palette.primary.main,

    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: 0,
    borderColor: colors.BLACK_BORDER,

    '&:hover': {
      backgroundColor: palette.primary.main,
      color: palette.secondary.main,
    }
  },

  textSecondary: {
    color: palette.primary.main,
    backgroundColor: palette.secondary.main,

    '&:hover': {
      backgroundColor: palette.primary.main,
      color: palette.secondary.main,
    }
  },

  root: {
    padding: '11px 16px',

    borderRadius: 0,
  }
};
