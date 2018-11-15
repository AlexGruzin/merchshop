export default function({ colors, values, breakpoints, palette }) {
  return {
    root: {},

    cartItemWrapper: {
      display: 'flex',
      flexDirection: 'row',
      height: '105px',
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
      fontSize: '15px',
    },

    costLabel: {
      fontSize: '12px',
    },

    amount: {
      marginTop: 'auto',
      marginBottom: '10px',
    },

    emptyColumn: {
      display: 'flex',
      width: '10%',
    },
  }
}
