export default function({ colors, values, breakpoints, palette }) {
  return {
    orderRoot: {
      display: 'flex',
      width: '100%',

      [breakpoints.down( 'xs' )]: {
        flexDirection: 'column',
      },
    },

    listContainer: {
      display: 'flex',
      flexDirection: 'column',

      [breakpoints.up( 'sm' )]: {
        flexDirection: 'column',
        width: '58%',
        margin: '20px 50px'
      },
    },

    trackBlock: {
      display: 'flex',
      flexGrow: 1,
      height: '90px',
      boxShadow: '0 1px 3px 0 rgba(211, 211, 211, 0.5)',
      flexDirection: 'column',
      padding: '19px',
    },

    orderLabel: {
      fontSize: '20px',
    },

    link: {
      textDecoration: 'none',
    },

    dateLabel: {
      marginTop: '5px',
      fontSize: '15px',
    },

    statusLabel: {
      marginTop: 'auto',
      fontSize: '12px',
      fontFamily: 'Avenir',
      letterSpacing: '0.3px',
    },

    trackRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 'auto',
    },
    trackLabel: {
      textTransform: 'uppercase',
      fontSize: '13px',
      fontWeight: 900,
      fontFamily: 'HelveticaNeue-Medium',
      color: colors.BLACK,
    },
    trackLink: {

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

    itemsColumn: {
      display: 'flex',
      flexDirection: 'column',
      width: '94%',
      margin: '0 3%',
    },

    bagTitle: {
      width: '92%',
      margin: '0 4%',
    },

    title: {
      marginTop: '25px',
      marginBottom: '15px',

      fontSize: '15px',
      fontFamily: 'HelveticaNeue-Medium',
      fontWeight: '500',
      letterSpacing: '0.6px',
      textTransform: 'uppercase',
    },

    heading: {
      marginBottom: '5px',
    },

    submitButton: {
      width: '100%',
      height: '40px',
      background: colors.BLACK,
      color: colors.WHITE,
      marginTop: '30px',
      marginBottom: '5px',
    },

    infoBlock: {
      display: 'flex',
      flexDirection: 'column',
      padding: '0 20px',
      paddingBottom: '5px',
      margin: '10px 0',

      boxShadow: '0 1px 3px 0 rgba(211, 211, 211, 0.5)',
    },

    subCategoryLabel: {
      color: colors.GRAY_TEXT,
    },

    subCategoryData: {
      fontFamily: 'HelveticaNeue-Medium',
      fontWeight: 600,
      marginBottom: '15px',
    },

    totalBlock: {
      display: 'flex',
      flexDirection: 'column',
      width: '94%',
      background: colors.GRAY200,
      padding: '0 3%',
    },

    wrappingRow: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: '10px',
      fontSize: '25px',
    },

    row: {
      display: 'flex',
      flexDirection: 'row',
      margin: '0 10px',
      marginTop: '15px',
    },

    totalLabel: {
      fontFamily: 'HelveticaNeue-Medium',
      fontSize: '16px',
      textTransform: 'uppercase',
      letterSpacing: '0.6px',
      margin: '0 15px',
      marginTop: '30px',
    },

    cost: {
      marginLeft: '3px',
    },

    totalSum: {
      fontFamily: 'HelveticaNeue-Light',
      fontSize: '30px',
      margin: '10px 15px 25px 15px',
      fontWeight: '100',
    },

    giftIcon: {
      fontSize: '18px',
      marginRight: '5px',
    },
  }
}
