export default function({ breakpoints, palette, colors, values }) {
  return {

    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      marginRight: '11px',

      [breakpoints.down( 'xs' )]: {
        marginRight: '8px',
      },
    },

    image: {
      width: '100%',
      height: '100%',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      position: 'absolute',
      top: 0,
      left :0
    },

    imageWrapper: {
      width: '100%',
      position: 'relative',
      paddingTop: '100%',
      [breakpoints.down( 'xs' )]: {
      },
    },

    soldOut: {
      color: palette.secondary.main,
      position: 'absolute',
      fontSize: '11px',
      right: '8px',
      fontWeight: '900',
      top: '7px',
      height: '12px',
      padding: '3px 12px',
      backgroundColor: palette.primary.main,
      textTransform: 'uppercase',
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
      background: colors.GRAY300,
    },

    colors: {
      textTransform: 'capitalize',
      margin: '0 5px',
    },

    name: {
      color: palette.secondary.main,
      height: '15px',
      margin: '12px 0 1px 0',
    },
    rating: {
      display: 'flex',
      alignItems: 'center',
    },

    cost: {
      margin: '3px 0',
    },

    reviewsCount: {
      fontSize: values.SMALL_FONT_SIZE,
      color: colors.GRAY_DARK,
      marginLeft: '4.4px',
    },

    starEmpty: {
      fontSize: values.SMALL_FONT_SIZE,
      color: colors.GRAY_LIGHT,
    },

    starActivated: {
      fontSize: values.SMALL_FONT_SIZE,
      color: colors.GRAY600,
    },

    starHalf: {
      fontSize: values.SMALL_FONT_SIZE,
    },
  };
}
