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
      flexGrow: 1,

      [breakpoints.up( 'sm' )]: {
        flexDirection: 'column',
        width: '58%',
        margin: '40px 50px'
      },
    },

    trashWrapper: {
      display: 'flex',
      fontSize: '25px',
      alignItems: 'center',
      justifyContent: 'flex-end',
      width: '10%',
    },

    trashIcon: {
      marginRight: '10px',
      fontSize: '16px',
    },

    paymentItemWrapper: {
      display: 'flex',
      maxHeight: '68px',
      flexGrow: 1,
      flexDirection: 'row',
      margin: '0 7px',
      marginBottom: '10px',
      boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.2)',
    },

    infoColumn: {
      display: 'flex',
      justifyContent: 'center',

      flexDirection: 'column',
      flexGrow: 1,
      padding: '9px',
    },

    typeLabel: {
      color: colors.GRAY500,
      fontSize: '12px',
      letterSpacing: '0.5px',
      fontWeight: '900',
    },

    cardLabel: {
      fontSize: '15px',
    },

    addCardButton: {
      display: 'flex',
      flexGrow: '1',
      height: '40px',
      background: colors.BLACK,
      color: colors.WHITE,
      margin: '15px 17px',
      marginTop: 'auto',

      [breakpoints.up( 'sm' )]: {
        margin: '30px 5px',
        width: '50%',
      },
    },

  }
}
