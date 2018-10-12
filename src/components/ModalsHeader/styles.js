import { rgba } from 'css-functions';

export default ({ colors, values }) => ({
  head: {
    height: '64px',
    borderBottom: `1px solid ${colors.BORDER_COLOR}`,
    background: colors.GREY200,
    display: 'flex',
    justifyContent: 'space-between',
    boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
  },
  content: {
    height: '236px',
  },
  title: {
    lineHeight: '64px',
    margin: '0 auto',
    color: colors.GREY800,
  },
  close: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.RED,
    background: colors.BLACK,
    height: '20px',
    width: '50px',
  },
});
