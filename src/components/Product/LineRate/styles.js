export default function({ colors, breakpoints, palette }) {
  return {

    line: {
      display: 'flex',
      width: '120px',
      height: '15px',
    },

    loaded: {
      display: 'flex',
      height: '100%',
      backgroundColor: colors.BLACK,
    },

    empty: {
      display: 'flex',
      height: '100%',
      backgroundColor: colors.GREY300,
    },


  }
}
