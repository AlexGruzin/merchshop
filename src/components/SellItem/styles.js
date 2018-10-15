export default function({ breakpoints, palette }) {
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
      right: '18px',
      top: '7px',
      height: '12px',
      lineHeight: '12px',
      padding: '2px 12px 5px 12px',
      backgroundColor: palette.primary.main,
      textTransform: 'uppercase',
      cursor: 'default',
    },
    name: {
      color: palette.secondary.main,
      height: '15px',
      margin: '12px 0 1px 0',
    },
    rating: {
      display: 'flex',
      alignItems: 'flex-end',
    },
    reviewsCount: {
      color: palette.secondary.main,
      marginLeft: '4.4px',
      height: '10px',
      paddingBottom: '2px',
    },
    star: {
      width: '8.2px',
      height: '7.5px',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }
  };
}