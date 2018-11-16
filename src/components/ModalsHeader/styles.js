export default function({ breakpoints, palette, colors, values }) {
  return {

    head: {
      height: '30px',
      background: colors.WHITE,
      display: 'flex',
      justifyContent: 'flex-end',
    },

    crossIcon: {
      color: colors.BLACK,
      fontSize: '7px',
    },

    crossWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0 11px',
    },
  }
}
