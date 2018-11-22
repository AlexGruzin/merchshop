export default function({ colors, values, breakpoints, palette }) {
  return {

    root: {
      display: 'flex',
      flexDirection: 'column',
      margin: '0 17px',
      marginTop: '8px',
    },

    finalItemContainer: {
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 1px 3px 0 rgba(211, 211, 211, 0.5)',
      padding: '17px',
      marginBottom: '7px',
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
      fontSize: '20px',
      marginTop: '23px',
    },

    productLabel: {
      fontSize: '20px',
      marginTop: '23px',
      marginLeft: '17px',
    },

    cost: {
      fontSize: '15px',
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
      fontFamily: 'Avenir',
      alignSelf: 'center',
      fontSize: '12px',
      textDecoration: 'underline',
      marginBottom: '30px',
    },

  }
}
