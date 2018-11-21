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
      flexGrow: 3,
    },

    colorLabel: {
      margin: '5px 0',
    },

    dotsWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginBottom: '15px',
    },

    dotWrapper: {
      height: '22px',
      width: '22px',
      marginRight: '20px',
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

    guideLabel: {
      flexGrow: 1,
      alignSelf: 'center',
      textAlign: 'center',
      height: '40px',
    },

    buttonWrapper: {
      display: 'flex',
      marginTop: '15px',
    },

    nextButton: {
      height: '40px',
      background: colors.BLACK,
      color: colors.WHITE,
      width: '100%',
    },

    row: {
      display: 'flex',
      flexDirection: 'row',
    },

  }
}
