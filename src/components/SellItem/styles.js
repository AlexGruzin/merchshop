export default function({ breakpoints, palette, colors, values }) {
  return {

    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '183px',
      marginRight: '11px',

      [breakpoints.down( 'xs' )]: {
        width: '128px',
        marginRight: '8px',
      },
    },

    image: {
      width: '100%',
      height: '100%',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },

    imageWrapper: {
      width: '100%',
      height: '183px',
      position: 'relative',

      [breakpoints.down( 'xs' )]: {
        height: '128px',
      },
    },

    soldOut: {
      color: palette.secondary.main,
      backgroundColor: palette.primary.main,
      textTransform: 'uppercase',
      fontSize: '0.916rem',  // to const
      position: 'absolute',

      right: '8px',
      top: '7px',
      height: '12px',
      lineHeight: '2px',
      padding: '2px 12px 5px 12px',
    },

    name: {
      margin: '12px 0 1px 0',
    },

    rating: {
      display: 'flex',
      alignItems: 'flex-end',
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
