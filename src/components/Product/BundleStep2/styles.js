export default function({ colors, values, breakpoints, palette }) {
  return {
    root: {
      display: 'flex',

      [breakpoints.up( 'sm' )]: {
        flexDirection: 'row',
        marginBottom: '100px'
      },
      [breakpoints.down( 'sm' )]: {
        flexDirection: 'column',
      },
    },

    leftSide: {
      display: 'flex',

      [breakpoints.up( 'sm' )]: {
        width: '50%',
        padding: '40px 8%',
      },
    },

    rightSide: {
      display: 'flex',
      flexDirection: 'column',

      [breakpoints.up( 'sm' )]: {
        width: '50%',
        paddingTop: '20px',
        paddingRight: '1%',
      },
    },

    formRoot: {
      display: 'flex',
      flexDirection: 'column',
      margin: '0 17px',

      [breakpoints.up( 'sm' )]: {
        margin: '0 0',
      },
    },

    productLabel: {
      margin: '24px 0 16px 0',
      fontSize: '20px',
    },

    dropDownField: {
      height: '40px',
      flexGrow: 3,
    },

    colorLabel: {
      margin: '5px 0',
    },

    dotsWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginBottom: '17px',
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

    guideIcon:{
      display: 'flex',
      alignSelf: 'center',
      justifySelf: 'flex-end',
      margin: '0 3px 0 18px',
    },

    guideLabel: {
      display: 'flex',
      flexGrow: 1,
      alignSelf: 'center',
      textAlign: 'center',

      textDecoration: 'underline',
      whiteSpace: 'nowrap',
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
