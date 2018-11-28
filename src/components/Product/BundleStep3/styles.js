export default function({ colors, values, breakpoints, palette }) {
  return {

    root: {
      display: 'flex',
      margin: '0 17px',
      marginTop: '8px',

      [breakpoints.up( 'sm' )]: {
        flexDirection: 'row',
        margin: 0,
        marginBottom: '100px'
      },
      [breakpoints.down( 'sm' )]: {
        flexDirection: 'column',
      },
    },

    leftSide: {
      display: 'flex',

      [breakpoints.up( 'sm' )]: {
        width: '63%',
        padding: '40px 2%',

        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      [breakpoints.down( 'sm' )]: {
        flexDirection: 'column',
      },
    },

    rightSide: {
      display: 'flex',
      flexDirection: 'column',

      [breakpoints.up( 'sm' )]: {
        width: '37%',
        justifyContent: 'center',

        paddingTop: '20px',
        paddingRight: '1%',
      },
    },

    finalItemContainer: {
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 1px 3px 0 rgba(211, 211, 211, 0.5)',
      padding: '17px',
      marginBottom: '7px',

      [breakpoints.up( 'sm' )]: {
        marginLeft: '11px',
      },
    },

    imageWrapper: {
      display: 'flex',
      width: '251px',
      height: '251px',
    },

    image: {
      margin: '0 auto',
      width: '100%',
      height: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
    },

    row: {
      display: 'flex',
      flexDirection: 'row',
    },

    rowLabel: {
      marginTop: '9px',
      marginRight: '17px',
    },

    itemProductLabel: {
      marginTop: '23px',
    },

    productLabel: {
      marginTop: '23px',
      marginLeft: '17px',
    },

    cost: {
      marginTop: '7px',
      marginLeft: '17px',
    },

    nextButton: {
      height: '40px',
      width: '100%',
      background: colors.BLACK,
      color: colors.WHITE,
      margin: '25px 0',
    },

    backLink: {


      alignSelf: 'center',
      textDecoration: 'underline',
      marginBottom: '30px',
    },

  }
}
