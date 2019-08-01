export default function({ colors, palette, breakpoints, values }) {
  return {

    root: {
      display: 'flex',
      width: '100%',
    },

    itemsWrapper: {
      display: 'flex',
      position: 'relative',
      justifyContent: 'flex-start',
      WebkitFlexWrap: 'wrap',
      flexWrap: 'wrap',
      marginLeft: '85px',
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
    },

    // ------------------------------------- Multi View Mode --------------------------------
    multiItemsWrapper: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',

      [breakpoints.down( 'md' )]: {
        justifyContent: 'space-around',
        WebkitFlexWrap: 'wrap',
        flexWrap: 'wrap',
      },

      [breakpoints.up( 'md' )]: {
        justifyContent: 'space-around',
        WebkitFlexWrap: 'wrap',
      },
    },

    multiItemWrapper: {
      flexDirection: 'row',

      [breakpoints.down( 'sm' )]: {
        width: '48%',
        marginBottom: '25px',
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

      fontSize: values.SMALL_FONT_SIZE,
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
