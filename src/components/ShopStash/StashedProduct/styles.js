export default function({ colors, palette, breakpoints }) {
  return {
    // -- scaleable
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
    },

    image: {
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      height: '100%',
      position:'relative',
      margin: 0,
      backgroundRepeat: 'no-repeat',
    },

    imageWrapper: {
      margin: 0,
      alignSelf: 'center',
      position: 'relative',
    },

    likeWrapper: {
      position: 'relative',
      height: '0px',
    },

    like: {
      fontSize: '15px',
      position: 'absolute',
      top: 0,
      marginTop: '1.2vw',
      marginLeft: '1.2vw',
      padding: 0,
    },

    likeEnabled: {
      color: colors.CORAL,
    },

    likeDisabled: {
      color: colors.GREY400,
    },

    soldOutLabel: {
      zIndex: 10,
      textAlign: 'center',
      color: colors.BLACK,
      position: 'absolute',

      right: '4%',
      fontWeight: '900',
      top: '2%',

      backgroundColor: palette.primary.main,
      textTransform: 'uppercase',
      cursor: 'default',
    },

    informationWrapper: {
      display: 'flex',
      flexDirection: 'column',
    },

    amountColorsWrapper: {
      display: 'flex',
      flexDirection: 'row',
    },

    number: {},

    hr: {
      width: '100%',
      margin: '1px 0',
      height: '1px',
      background: colors.GREY100,
    },

    colors: {
      textTransform: 'capitalize',
      margin: '0 5px',
    },

    label: {
      cursor: 'pointer',
      color: colors.BLACK,
      textTransform: 'uppercase',
      fontSize: '15px',
      margin: '12px 0 1px 0',
    },

    cost: {
      letterSpacing: '0.5px',
      fontSize: '15px',
      margin: '3px 0',
    },

    rating: {
      display: 'flex',
      alignItems: 'flex-end',
    },

    reviewsCount: {
      fontFamily: 'HelveticaNeue-Bold',
      fontSize: '11px',
      color: palette.secondary.main,
      marginLeft: '4.4px',
    },

    star: {
      fontSize: '11px',
    },

  };
}
