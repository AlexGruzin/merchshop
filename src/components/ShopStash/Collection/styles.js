export default function({ colors, palette }) {
  return {
    root: {
      display: 'flex',
      position: 'relative',
      width: '100%',
      maxWidth: '100%',

      justifyContent: 'space-around',
      WebkitFlexWrap: 'wrap',
      flexWrap: 'wrap',
    },

    itemWrapper: {
      display: 'flex',
      justifyContent: 'center',
      flexGrow: '1',
      margin: '10px 10px',
    },
  };
}
