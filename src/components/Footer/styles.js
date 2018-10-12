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

    serviceIcon: {
      margin: '0 10px',
    },

    subscribeButton: {
      width: '250px',
      height: '40px',
    },

    arrowFooterIcon: {
      marginLeft: '150px',
    },

    footerSubscribeLabel: {
      justifyContent: 'flex-start',
      fontFamily: 'Avenir-Book',
      fontSize: '12px',
      fontWeight: '300',
      textTransform: 'none',
      letterSpacing: '0.5px',
      color: colors.GREY800,
    },
  }
}
