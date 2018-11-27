export default function({ colors, breakpoints, values }) {
  return {

    footerColumn: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
    },

    footerButton: {
      display: 'flex',
      alignItems: 'center',
      height: '36px',
      width: '150px',
    },

    ulList: {
      listStyleType: 'none',
      paddingLeft: '9%',
      margin: 0,
    },

    footerButtonLabel: {
      justifyContent: 'flex-start',
    },

    servicesWrapper: {
      display: 'flex',
      width: '160px',
      justifyContent: 'space-between',
    },

    serviceIcon: {
      fontSize: values.GIANT_FONT_SIZE,
    },

    underlined: {
      textDecoration: 'underline',
      fontSize: '0.83rem',
    },

    privacy: {
      fontSize: '0.83rem',

      textAlign: 'center',
      margin: '0 15px',
      marginTop: '8px',

      [breakpoints.up( 'sm' )]: {
        display: 'inline-flex',
      },
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
        margin: '0 6%',
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
        margin: '0 6%',
      },
    },

    subscribeWrapper: {
      display: 'flex',
      flexDirection: 'column',

      [breakpoints.down( 'sm' )]: {
        width: '100%',
        alignItems: 'center',
      },

      [breakpoints.up( 'sm' )]: {
        width: 'auto',
        alignItems: 'flex-end',
      },
    },

    subscribeButton: {
      justifyContent: 'space-between',
      height: '40px',
      backgroundColor: colors.WHITE,

      [breakpoints.down( 'sm' )]: {
        width: '100%',
      },
      [breakpoints.up( 'sm' )]: {
        width: '290px',
      },
    },

    subscribeButtonLabel: {
      color: colors.GRAY400,
    },

    arrowIcon: {
      fontSize: values.EXTRA_SMALL_FONT_SIZE,
    },

  }
}
