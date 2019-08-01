export default function({ colors, values, breakpoints, palette }) {
  return {

    root: {
      display: 'flex',
      background: colors.WHITE,

      [breakpoints.up( 'md' )]: {
        flexDirection: 'row',
      },

      [breakpoints.down( 'sm' )]: {
        flexDirection: 'column',
        minHeight: 'calc(100% - 70px)',
      },
    },

    listContainer: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,

      [breakpoints.down( 'md' )]: {
        margin: `0 ${values.MOBILE_SMALL_SIDE_INDENT}`,
      },

      [breakpoints.up( 'md' )]: {
        flexDirection: 'column',
        margin: '40px 50px',
        marginRight: '15vw',
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
      padding: '10px',
      fontSize: values.GIANT_FONT_SIZE,
    },

    paymentItemWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      flexDirection: 'row',
      marginBottom: '10px',
      boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.2)',
    },

    infoColumn: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      padding: '20px 10px',
    },

    typeLabel: {
      color: colors.GRAY500,
    },

    cardLabel: {},

    addCardButton: {
      display: 'flex',
      margin: '15px 17px',
      marginTop: 'auto',

      [breakpoints.up( 'md' )]: {
        margin: '30px 0',
        width: '33%',
      },
    },

  }
}
