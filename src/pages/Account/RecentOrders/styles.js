export default function({ colors, values, breakpoints, palette }) {
  return {

    root: {
      display: 'flex',

      [breakpoints.down( 'xs' )]: {
        flexDirection: 'column',
      },
    },

    listContainer: {
      display: 'flex',
      flexDirection: 'column',

      [breakpoints.up( 'sm' )]: {
        flexDirection: 'column',
        width: '58%',
        margin: '40px 50px'
      },
    },

    ordersItemWrapper: {
      display: 'flex',
      maxHeight: '86px',
      flexGrow: 1,
      flexDirection: 'row',
      margin: '7px 7px',
      boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.2)',
    },

    infoColumn: {
      display: 'flex',
      flexDirection: 'column',
      width: '50%',
      padding: '9px',
    },

    orderLabel: {
      fontSize: '15px',
    },
    link: {
      textDecoration: 'none',
    },

    dateLabel: {
      marginTop: '5px',
      fontSize: '12px',
    },

    statusLabel: {
      marginTop: 'auto',
      fontSize: '12px',
      color: colors.GRAY500,
      letterSpacing: '0.5px',
      fontWeight: '900',
    },

    imagesWrapper: {
      display: 'flex',
      width: '50%',
      padding: '9px',
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },

    imageWrapper: {
      display: 'flex',
      width: '70px',
    },

    image: {
      margin: '0 auto',
      width: '100%',
      height: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
    },

  }
}
