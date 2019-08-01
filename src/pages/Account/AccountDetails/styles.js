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

    field: {},

    detailsRoot: {
      display: 'flex',
      flexDirection: 'column',
      margin: `0 ${values.MOBILE_MEDIUN_SIDE_INDENT}`,
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
      margin: '25px 17px',
    },

    savedButton: {
      display: 'flex',
      flexGrow: '1',
      margin: '25px 17px',
    },

    savedIcon: {
      margin: '0 5px',
      fontSize: values.GIANT_FONT_SIZE,
    },

  }
}
