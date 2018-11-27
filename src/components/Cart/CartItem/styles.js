export default function({ colors, values, breakpoints, palette }) {
  return {
    root: {},

    // -- Items

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
      marginLeft: '10px',
    },

    nameLabel: {
      marginTop: '10px',
    },

    costLabel: {},

    addRemoveSection: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      border: '1px solid',
      padding: '0 2px',

      marginTop: 'auto',
      marginBottom: '10px',
      width: '80px',
      height: '26px',

      fontSize: values.GIANT_FONT_SIZE,
    },

    amountLabel: {
      fontSize: '13px',
    },

    removeColumn: {
      display: 'flex',
      fontSize: '25px',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      width: '10%',

      marginBottom: '15px',
    },

    trashIcon: {
      marginRight: '10px',
      fontSize: '16px',
    },
  }
}
