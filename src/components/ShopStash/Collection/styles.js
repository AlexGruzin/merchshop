export default function({ colors, palette, breakpoints }) {
  return {
    root: {
      display: 'flex',
      width: '100%',
    },

    itemWrapper: {
      display: 'flex',
      justifyContent: 'center',
      margin: '30px 30px',
    },

    // --- Mobile

    // ------------------------------------- Single View Mode ----------------------------
    singleItemsWrapper: {
      display: 'flex',

      width: '100%',
      justifyContent: 'center',

      [breakpoints.down( 'xs' )]: {
        justifyContent: 'center',
        flexDirection: 'column',
      },
      [breakpoints.up( 'xs' )]: {
        justifyContent: 'space-around',
        WebkitFlexWrap: 'wrap',
        flexDirection: 'row',
      },
    },

    singleItemWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      [breakpoints.down( 'xs' )]: {
        width: '90%',
        justifyContent: 'center',
        margin: '25px auto',
      },
      [breakpoints.up( 'xs' )]: {
        margin: '30px 15px',
      },
    },

    singleDestinationItem: {
      [breakpoints.down( 'sm' )]: {
        height: '300px',
        width: '100%',
      },
      [breakpoints.up( 'sm' )]: {
        height: '300px',
        width: '310px',
      },
    },

    singleLikeClass: {
      fontSize: '22px',
    },

    singleSoldClass: {
      height: '21px',
      width: '96px',

      fontSize: '14px',
    },

    // ------------------------------------- Multi View Mode --------------------------------
    multiItemsWrapper: {
      display: 'flex',
      flexDirection: 'row',

      [breakpoints.down( 'md' )]: {
        justifyContent: 'space-around',
        WebkitFlexWrap: 'wrap',
        flexWrap: 'wrap',
        width: '94%',
        margin: '0 3%',
      },

      [breakpoints.up( 'md' )]: {
        justifyContent: 'space-around',
        WebkitFlexWrap: 'wrap',
        width: '100%',
        margin: '10px 0',
      },
    },

    multiItemWrapper: {
      flexDirection: 'row',

      [breakpoints.down( 'sm' )]: {
        width: '48%',
        marginTop: '25px',
      },
      [breakpoints.up( 'sm' )]: {
        width: '175px',
        margin: '5px 7px',
      },
    },

    multiLikeClass: {
      fontSize: '14px',
    },

    multiSoldClass: {
      height: '17px',
      width: '66px',

      fontSize: '10px',
    },

    multiDestinationItem: {
      [breakpoints.down( 'md' )]: {
        width: '100%',
        height: '150px',
      },
      [breakpoints.up( 'md' )]: {
        width: '175px',
        height: '175px',
      },
    },
  };
}
