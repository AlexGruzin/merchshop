export default function({ colors, palette }) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '183px',
    },

    image: {
      width: '100%',
      height: '183px',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },

    imageWrapper: {
      width: '100%',
      height: '183px',
      position: 'relative'
    },

    label: {
      color: colors.BLACK,
      textTransform: 'uppercase',
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
      color: 'yellow',
      width: '8.2px',
      height: '7.5px',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }
  };
}
