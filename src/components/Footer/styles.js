export default function({ colors, breakpoints }) {
  return {

    footerColumn: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
    },

    footerButton: {
      height: '36px',
      width: '150px',
      background: colors.GREY300,
      margin: '0 10%'
    },

    footerButtonLabel: {
      justifyContent: 'flex-start',
    },

    servicesWrapper: {
      display: 'flex',
      margin: 'auto 0',
    },

    serviceIcon: {
      margin: '0 10px',
    },



    underlined: {
      textDecoration: 'underline',
    },

    privacy: {
      margin: '0 auto',
    },

    // ---- scaled styles ----

    footerContainer: {
      display: 'flex',
      width: '100%',
      background: colors.GREY300,

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
      alignItems: 'center',

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
        margin: '20px 10%',
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

    },

    subscribeButton: {
      justifyContent: 'space-between',
      height: '40px',
      margin: '5px 0',

      [breakpoints.down( 'sm' )]: {
        width: '100%',
      },
      [breakpoints.up( 'sm' )]: {
        width: '290px',
      },

      fontFamily: 'Avenir-Book',
      fontSize: '12px',
      fontWeight: '300',
      textTransform: 'capitalize',
      letterSpacing: '0.5px',
      color: colors.GREY600,
    },

  }
}
