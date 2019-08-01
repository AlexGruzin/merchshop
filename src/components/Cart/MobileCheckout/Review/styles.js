export default function({ colors, values, breakpoints, palette }) {
  return {
    reviewRoot: {
      flexDirection: 'column',
      width: '100%',
      margin: '15px 0',
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
    },

    heading: {
      marginBottom: '5px',
    },

    submitButton: {
      width: '100%',
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
      textTransform: 'uppercase',
      margin: '0 15px',
      marginTop: '30px',
    },

    cost: {
      marginLeft: '3px',
    },

    totalSum: {
      fontSize: '30px',
      margin: '0 15px',
      marginTop: '10px',
    },

    giftIcon: {
      fontSize: values.GIANT_FONT_SIZE,
      marginRight: '5px',
    },
  }
}
