import palette from '../../palette';

export default {
  textPrimary: {
    backgroundColor: palette.primary.main,
    color: palette.secondary.main,
    borderStyle: 'solid',
    '&:hover': {
      backgroundColor: palette.primary.main,
      color: palette.secondary.main,
    }
  },

  textSecondary: {
    backgroundColor: palette.secondary.main,
    color: palette.primary.main,
    borderRadius: 0,
    '&:hover': {
      backgroundColor: palette.secondary.main,
      color: palette.primary.main,
    }
  },

  root: {
    padding: '12px 16px',
    borderColor: palette.secondary.main,
    borderWidth: 1,
    borderRadius: 0,
  }
};
