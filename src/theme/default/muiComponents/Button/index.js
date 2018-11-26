import palette from '../../palette';

export default {
  root: {
    background: palette.primary.main,
    color: palette.secondary.main,
    borderRadius: 0,

    '&:hover': {
      backgroundColor: palette.primary.main,
    },
  },
  label: {},
};
