export default function({ colors, values, breakpoints, palette }) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '90%',
      margin: '0 5%',

    },

    dropDownField: {
      height: '40px',
      marginBottom: '15px',
    },

    colorLabel: {
      margin: '5px 0',
    },

    dotsWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: '15px',
    },

    dotWrapper: {
      height: '22px',
      width: '22px',
    },

    sizesLabel: {
      margin: '5px 0',
    },

    sizesWrapper: {
      display: 'flex',
      marginBottom: '15px',
    },

    size: {
      display: 'flex',
      marginRight: '5px',
      justifyContent: 'center',
      alignItems: 'center',
    },

    sizeEnabled: {
      border: `1px solid ${colors.BLACK}`,
      color: colors.BLACK,
    },

    sizeLabel: {
      color: 'inherit',
    },

    buttonWrapper: {
      display: 'flex',
      marginTop: '15px',
    },

    filterButton: {
      flexGrow: '3',
      marginRight: '5px',
    },

    clearButton: {
      flexGrow: '5',
    },
  }
}
