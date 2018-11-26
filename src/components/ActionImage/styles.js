export default function({ colors, values, breakpoints, palette }) {
  return {

    root: {
      position: 'relative',
      width: '50%',
      height: '320px',

      [breakpoints.down( 'xs' )]: {
        width: '100%',
        height: '200px',
      },
    },

    image: {
      margin: '0 auto',
      width: '100%',
      height: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },

    button: {
      position: 'absolute',
      height: '40px',
      minWidth: '190px',
      left: 'calc(50% - 90px)',
      bottom: '33px',
      justifyContent: 'space-between',
    },

    buttonIcon: {
      fontSize: values.SMALL_FONT_SIZE,
    },

    buttonLabel: {
      marginRight: '28px',
    },
  };
}
