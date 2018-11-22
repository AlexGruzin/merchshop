export default function({ colors, values, breakpoints, palette }) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },

    formRoot: {
      display: 'flex',
      flexDirection: 'column',
      margin: '0 17px',
    },

    productLabel: {
      margin: '24px 0 16px 0',
      fontSize: '20px',
    },

    dropDownField: {
      height: '40px',
      border: `1px solid ${colors.BLACK}`,
      flexGrow: 3,
    },

    colorLabel: {
      margin: '5px 0',
    },

    dotsWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginBottom: '27px',
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
      width: '100%',
      background: colors.BLACK,
      color: colors.WHITE,
      margin: '25px 0',
    },

    row: {
      display: 'flex',
      flexDirection: 'row',
    },

  }
}
