export default function({ colors, values, breakpoints, palette }) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
    },

    infoBlock: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      margin: '0 17px',
    },

    cost: {
      fontSize: '15px',
    },

    buildButton: {
      width: '100%',
      alignSelf: 'center',
      height: '40px',
      flexGrow: '1',
      background: colors.BLACK,
      color: colors.WHITE,
      margin: '20px 0',
    },

    // -------------  expanded  --------------

    expandedBlock: {
      display: 'flex',
      flexWrap: 'wrap',
      flexGrow: 1,
      boxShadow: '0 1px 3px 0 rgba(211, 211, 211, 0.5)',
    },

    collapseContainer: {
      width: '100%',
    },

    expandHead: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '45px',
      flexGrow: 1,
      margin: '0 17px',
    },

    productLabel: {
      fontSize: '20px',
    },

    category: {
      flexGrow: 1,
    },

    expandSwitch: {

    },

    expandedBody: {
      display: 'flex',
      width: '100%',
    },

    expandedContent: {
      flexGrow: 1,
      margin: '10px 17px',
    },

    expandedContentText: {
      whiteSpace: 'pre-line',
    },

    pandedIcon: {
      fontSize: '2px',
    },

    expandedIcon: {
      color: colors.BLACK,
      fontSize: '10px',
    },

    rateStars: {
      height: '16px',
    },

    reviewsCount: {

      fontFamily: 'HelveticaNeue-Bold',
      fontSize: '11px',
      marginLeft: '5px',
    },

  };
}
