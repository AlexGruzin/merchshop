export default function({ colors, breakpoints, palette }) {
  return {

    navigationRow: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      height: '50px',
      background: palette.primary.main,
    },

    navRowWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '80%',
      height: '50px',
      margin: 'auto',
    },

  }
}
