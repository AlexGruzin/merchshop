export default function({ colors, values, breakpoints, palette }) {
  return {
    root: {
      display: 'flex',
      background: colors.WHITE,

      [breakpoints.down( 'xs' )]: {
        flexDirection: 'column',
        minHeight: 'calc(100% - 70px)',
      },

    },

    listContainer: {
      display: 'flex',
      flexDirection: 'column',

      [breakpoints.up( 'sm' )]: {
        flexDirection: 'column',
        width: '40%',
        margin: '20px 50px'
      },
    },

    field: {
      marginBottom: '12px',
    },

    input: {
      border: `1px solid ${colors.GRAY400}`,
      borderRadius: '3px',
      height: '40px',
    },

    detailsRoot: {
      display: 'flex',
      flexDirection: 'column',
      margin: '0 17px',
    },

    title: {
      marginTop: '15px',
      marginBottom: '15px',
      textTransform: 'uppercase',
    },

    heading: {
      marginBottom: '5px',
    },

    addCardButton: {
      display: 'flex',
      flexGrow: '1',
      height: '40px',
      background: colors.BLACK,
      color: colors.WHITE,
      margin: '25px 17px',
    },

    savedButton: {
      display: 'flex',
      flexGrow: '1',
      height: '40px',
      border: `1px solid ${colors.BLACK}`,
      margin: '25px 17px',
    },

    savedIcon: {
      margin: '0 5px',
      fontSize: values.GIANT_FONT_SIZE,
    },

  }
}
