import { rgba } from 'css-functions';

export default ({ colors, values }) => ({
  root: {
    width: '600px',
  },
  title: {
    lineHeight: '64px',
    fontSize: 14,
    color: colors.GREY800,
  },
  close: {
    color: colors.GRAY,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: '100%',
    right: 0,
    cursor: 'pointer',

    '&:hover': {
      opacity: 0.7,
    },
  },
});
