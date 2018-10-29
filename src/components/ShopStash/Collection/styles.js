export default function({ colors, palette }) {
  return {
    root: {
      display: 'flex',
    },

    itemsWrapper: {
      display: 'flex',
      position: 'relative',
      justifyContent: 'flex-start',
      WebkitFlexWrap: 'wrap',
      flexWrap: 'wrap',
      marginLeft: '85px',

    },


    itemWrapper: {
      maxWidth: '190px',
      display: 'flex',
      justifyContent: 'center',
      margin: '30px 30px',
    },
  };
}
