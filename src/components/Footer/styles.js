export default function({ colors }) {
  return {

    footerContainer: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      background: colors.GREY300,
    },

    footerColumn: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
    },

    footerButton: {
      height: '36px',
      background: colors.GREY300,
      margin: '0 10%'
    },

    footerButtonLabel: {
      justifyContent: 'flex-start',
    },

    servicesContainer: {
      marginRight: '7%',
      display: 'flex',
      flexDirection: 'row',
      height: '50%',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },

    servicesWrapper: {
      display: 'flex',
      margin: 'auto 0',
    },

    subscribeContainer: {
      display: 'flex',
      flexDirection: 'column',
    },

    serviceIcon: {
      margin: '0 10px',
    },

    subscribeButton: {
      justifyContent: 'space-between',
      width: '290px',
      height: '40px',
      margin: '5px 0',

      fontFamily: 'Avenir-Book',
      fontSize: '12px',
      fontWeight: '300',
      textTransform: 'capitalize',
      letterSpacing: '0.5px',
      color: colors.GREY600,
    },

    underlined: {
      textDecoration: 'underline',
    },

  }
}
