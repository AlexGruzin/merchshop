export default function({ colors, palette, breakpoints, values }) {
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
      fontSize: values.LARGE_GIANT_FONT_SIZE,
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
      color: colors.GRAY400,
    },

    soldOutLabel: {
      zIndex: 10,
      textAlign: 'center',
      color: colors.BLACK,
      position: 'absolute',

      right: '4%',
      fontWeight: '900',
      top: '4%',

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
      background: colors.GRAY100,
    },

    colors: {
      textTransform: 'capitalize',
      margin: '0 5px',
    },

    label: {
      cursor: 'pointer',
      color: colors.BLACK,
      textTransform: 'uppercase',
      margin: '12px 0 1px 0',
    },

    cost: {
      margin: '3px 0',
    },

    rootRate: {
      display: 'flex',
    },

    rating: {
      display: 'flex',
      alignItems: 'center',
    },

    reviewsCount: {
      fontSize: '0.83rem',
      marginLeft: '4.4px',
      lineHeight: '1.4',
    },

    star: {
      fontSize: '11px',
    },

  };
}
