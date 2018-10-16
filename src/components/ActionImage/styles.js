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
      minWidth: '190px',
      left: '50%',
      bottom: '34px',
      transform: 'translate3d(-50%, 0, 0)',
      padding: '8px 12px 8px 14px'
    },
    buttonLabel: {
      marginRight: '28px',
    },
  };
}
