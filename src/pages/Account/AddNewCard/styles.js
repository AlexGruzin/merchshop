export default function({ colors, values, breakpoints, palette }) {
  return {

    root: {
      display: 'flex',

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
    },

    backLabel: {
      fontSize: '12px',
    },

    backIcon: {
      fontSize: '20px',
      transform: 'rotate(90deg)',
      marginLeft: '13px',
    },

    row: {
      display: 'flex',
      justifyContent: 'space-between',
    },

    field: {
      marginBottom: '7px',
    },

    input: {
      border: `1px solid ${colors.GRAY400}`,
      borderRadius: '3px',
      height: '40px',

      fontFamily: 'Avenir',
      fontSize: '14px',
      letterSpacing: '0.5px',
    },

    detailsRoot: {
      display: 'flex',
      flexDirection: 'column',
      margin: '0 17px',
    },

    title: {
      marginTop: '20px',
      marginBottom: '15px',

      fontSize: '16px',
      fontFamily: 'HelveticaNeue-Medium',
      fontWeight: '500',
      letterSpacing: '0.6px',
    },

    heading: {
      marginBottom: '5px',
    },

    addCardButton: {
      display: 'flex',
      flexGrow: '1',
      maxHeight: '40px',
      background: colors.BLACK,
      color: colors.WHITE,
      margin: '25px 17px',
    },

    savedButton: {
      display: 'flex',
      flexGrow: '1',
      maxHeight: '40px',
      border: `1px solid ${colors.BLACK}`,
      margin: '25px 17px',
    },

    savedIcon: {
      margin: '0 5px',
      fontSize: '17px',
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
      alignSelf: 'flex-end',
      marginBottom: '17px',
    },
  }
}
