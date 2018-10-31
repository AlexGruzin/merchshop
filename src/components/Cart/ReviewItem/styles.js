export default function({ colors, values, breakpoints, palette }) {
  return {
    root: {},

    cartItemWrapper: {
      display: 'flex',
      flexDirection: 'row',
      height: '115px',
      width: '100%',
      boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.2)',
      marginBottom: '10px',
    },

    imageWrapper: {
      display: 'flex',
      width: '35%',
    },

    image: {
      margin: '0 auto',
      width: '100%',
      height: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
    },

    infoColumn: {
      display: 'flex',
      width: '50%',
      flexDirection: 'column',
      marginLeft: '15px',
    },

    nameLabel: {
      marginTop: '10px',
      fontSize: '18px',
    },

    costLabel: {
      fontSize: '15px',
    },

    amount: {
      marginTop: '30px',
    },

    emptyColumn: {
      display: 'flex',
      width: '10%',
    },
  }
}
