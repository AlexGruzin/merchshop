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
      border: `1px solid ${colors.BLACK}`,
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


    chooseWrapper: {
      position: 'relative',
      top: '3px',
      left: '3px',
      height: '0px',
      fontSize: '16px',
    },

    choose: {
      position: 'absolute',
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
      height: '40px',
      background: colors.BLACK,
      color: colors.WHITE,
      flexGrow: '3',
      marginRight: '5px',
    },

    clearButton: {
      height: '40px',
      flexGrow: '2',
      border: `1px solid ${colors.BLACK}`,
    },
  }
}
