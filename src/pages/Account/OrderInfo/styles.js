export default function({ colors, values, breakpoints, palette }) {
  return {
    orderRoot: {
      display: 'flex',
      width: '100%',
      background: colors.WHITE,

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
      minHeight: '130px',
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
      fontSize: values.LARGE_GIANT_FONT_SIZE,
    },

    statusLabel: {
      marginTop: 'auto',
      fontSize: '1rem',
    },

    trackRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 'auto',
    },
    trackLabel: {
      textTransform: 'uppercase',
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

    backLabel: {},

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

      textTransform: 'uppercase',
    },

    heading: {
      marginBottom: '5px',
    },

    submitButton: {
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
      marginBottom: '20px',
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
      margin: '0 15px',
      marginTop: '30px',
      textTransform: 'uppercase',
    },

    cost: {
      marginLeft: '3px',
    },

    totalSum: {
      fontSize: '30px',
      margin: '10px 15px 25px 15px',
      fontWeight: '100',
    },

    giftIcon: {
      fontSize: values.GIANT_FONT_SIZE,
      marginRight: '5px',
    },
  }
}
