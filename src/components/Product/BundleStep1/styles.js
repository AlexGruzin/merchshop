export default function({ colors, values, breakpoints, palette }) {
  return {

    root: {
      display: 'flex',

      [breakpoints.up( 'sm' )]: {
        flexDirection: 'row',
        marginBottom: '100px'
      },
      [breakpoints.down( 'sm' )]: {
        flexDirection: 'column',
      },
    },

    leftSide: {
      display: 'flex',

      [breakpoints.up( 'sm' )]: {
        width: '50%',
        padding: '40px 8%',
      },
    },

    rightSide: {
      display: 'flex',
      flexDirection: 'column',

      [breakpoints.up( 'sm' )]: {
        width: '50%',
        paddingTop: '20px',
        paddingRight: '1%',
      },
    },


    infoBlock: {
      display: 'flex',
      flexDirection: 'column',
      //flexGrow: 1,
      margin: '0 17px',

      [breakpoints.up( 'sm' )]: {
        margin: '0 0',
      },
    },

    cost: {},

    buildButton: {
      width: '100%',
      alignSelf: 'center',
      height: '40px',
      maxHeight: '40px',
      flexGrow: '1',
      background: colors.BLACK,
      color: colors.WHITE,
      margin: '25px 0',
    },

    // -------------  expanded  --------------

    expandedBlock: {
      display: 'flex',
      flexWrap: 'wrap',
      //flexGrow: 1,

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
      maxHeight: '50px',
      flexGrow: 1,
      margin: '0 17px',
    },

    productLabel: {
      marginTop: '23px',
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
