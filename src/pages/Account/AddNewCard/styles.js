export default function({ colors, values, breakpoints, palette }) {
  return {

    root: {
      display: 'flex',
      background: colors.WHITE,

      [breakpoints.down( 'sm' )]: {
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

    headLine: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: '55px',
    },

    backButton: {
      display: 'flex',
      cursor: 'pointer',
      alignItems: 'center',
    },

    backLink: {
      textDecoration: 'none',
      padding: '10px',
    },

    backLabel: {},

    backIcon: {
      fontSize: '20px',
      transform: 'rotate(90deg)',
      marginLeft: values.MOBILE_SMALL_SIDE_INDENT,
    },

    row: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    field: {},

    detailsRoot: {
      display: 'flex',
      flexDirection: 'column',
      margin: `0 ${values.MOBILE_MEDIUN_SIDE_INDENT}`,

      [breakpoints.up( 'md' )]: {
        margin: `0 ${values.MOBILE_SMALL_SIDE_INDENT}`,
      },
    },

    title: {
      marginTop: '20px',
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

    formControlDate: {
      display: 'flex',
      width: '60%',
      marginRight: '5px',
    },
    formControlCCV: {
      display: 'flex',
      width: '20%',
    },

    formIcon: {
      display: 'flex',
      width: '15%',
      justifyContent: 'center',
      fontSize: '22px',
    },

    questionIcon: {
      padding: '10px',
    },
  }
}
