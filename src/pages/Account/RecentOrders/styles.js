export default function({ colors, values, breakpoints, palette }) {
  return {

    root: {
      display: 'flex',
      background: colors.WHITE,
      marginBottom: '50px',

      [breakpoints.down( 'xs' )]: {
        flexDirection: 'column',
      },
    },

    listContainer: {
      display: 'flex',
      flexDirection: 'column',

      [breakpoints.up( 'sm' )]: {
        flexDirection: 'column',
        width: '65%',
        margin: '40px 50px'
      },
    },

    ordersItemWrapper: {
      display: 'flex',
      minHeight: '86px',
      minWidth: '291px',
      flexGrow: 1,
      flexDirection: 'row',
      margin: '7px 2vw',
      boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.2)',
    },

    infoColumn: {
      display: 'flex',
      flexDirection: 'column',
      width: '50%',
      padding: '9px',
    },

    orderLabel: {},

    link: {
      textDecoration: 'none',
    },

    dateLabel: {
      textTransform: 'none',
      marginTop: '5px',
    },

    statusLabel: {
      marginTop: 'auto',
      color: colors.GRAY500,
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
