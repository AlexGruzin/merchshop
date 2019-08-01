export default function({ colors, values, breakpoints, palette }) {
  return {

    root: {
      display: 'flex',
      flexDirection: 'column',

      [breakpoints.up( 'sm' )]: {
        marginBottom: '100px'
      },
      [breakpoints.down( 'sm' )]: {

      },
    },

    rootRow: {
      display: 'flex',

      [breakpoints.up( 'sm' )]: {
        flexDirection: 'row',
      },
      [breakpoints.down( 'sm' )]: {
        flexDirection: 'column',
      },
    },

    leftSide: {
      display: 'flex',
      alignItems: 'flex-start',

      [breakpoints.up( 'sm' )]: {
        width: '50%',
        padding: '40px 40px',
        justifyContent: 'center',
      },
    },

    rightSide: {
      display: 'flex',
      flexDirection: 'column',

      [breakpoints.up( 'sm' )]: {
        width: '50%',
        paddingTop: '20px',
        paddingRight: '4%',
      },
    },


    infoBlock: {
      display: 'flex',
      flexDirection: 'column',
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
      marginLeft: '5px',
    },

    videoWrapper: {
      padding: '7px 0',

      [breakpoints.up( 'sm' )]: {
        marginTop: '18px',
        marginBottom: '34px',
      }
    },

    videoInnerWrapper: {
      paddingTop: '56.25%',
      height: 0,
      width: '100%',
      position: 'relative'
    },
  };
}
