export default function({ colors, breakpoints, values }) {
  return {

    footerColumn: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
    },

    footerButton: {
      height: '36px',
      width: '150px',
      background: colors.GRAY300,
      margin: '0 6%'
    },

    footerButtonLabel: {
      justifyContent: 'flex-start',
    },

    servicesWrapper: {
      display: 'flex',
      width: '170px',
      justifyContent: 'space-between',
    },

    serviceIcon: {
      fontSize: '18px',
    },

    underlined: {
      textDecoration: 'underline',
    },

    privacy: {
      textAlign: 'center',
      margin: '0 15px',
      marginTop: '8px',
    },

    // ---- scaled styles ----

    footerContainer: {
      display: 'flex',
      width: '100%',
      padding: '25px 0',

      background: colors.GRAY300,

      [breakpoints.down( 'sm' )]: {
        flexDirection: 'column',
      },
      [breakpoints.up( 'sm' )]: {
        flexDirection: 'row',
        height: '150px',
      },
    },

    iconsServicesContainer: {
      display: 'flex',
      flexDirection: 'row',
      height: '50%',
      paddingTop: '8px',

      [breakpoints.down( 'sm' )]: {
        justifyContent: 'flex-start',
        margin: '3% 10%',
      },
      [breakpoints.up( 'sm' )]: {
        justifyContent: 'flex-end',
        margin: '0 7%',
      },

    },

    servicesSubscribeContainer: {
      display: 'flex',
      flexDirection: 'row',
      height: '50%',
      alignItems: 'center',

      [breakpoints.down( 'sm' )]: {
        justifyContent: 'center',
        margin: '0 10%',
        marginTop: '30px',
        marginBottom: '25px',
      },
      [breakpoints.up( 'sm' )]: {
        justifyContent: 'flex-end',
        margin: '0 7%',
      },
    },

    subscribeWrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',

      [breakpoints.down( 'sm' )]: {
        width: '100%',
      },

      [breakpoints.up( 'sm' )]: {
        width: 'auto',
      },
    },

    subscribeButton: {
      justifyContent: 'space-between',
      height: '40px',

      [breakpoints.down( 'sm' )]: {
        width: '100%',
      },
      [breakpoints.up( 'sm' )]: {
        width: '290px',
      },

      fontFamily: values.AVENIR_BOOK_FONT,
      fontSize: values.MEDIUM_FONT_SIZE,
      fontWeight: '300',
      textTransform: 'capitalize',
      letterSpacing: '0.5px',
      color: colors.GRAY400,
    },

    arrowIcon: {
      fontSize: values.EXTRA_SMALL_FONT_SIZE,
      color: colors.BLACK,
    },

  }
}
