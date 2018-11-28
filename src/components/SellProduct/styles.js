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
      letterSpacing: '0.5px',
      margin: '3px 0',
    },

    reviewsCount: {
      color: palette.secondary.main,
      marginLeft: '4.4px',
    },
    star: {
      fontSize: values.SMALL_FONT_SIZE,
    },
  };
}
