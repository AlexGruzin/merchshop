export default function({ colors, values, breakpoints, palette }) {
  return {
    headLine: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: '55px',
    },

    backButton: {
      display: 'flex',
      cursor: 'pointer',
      alignItems: 'center',
    },

    backLabel: {
      fontSize: '15px',
    },

    backIcon: {
      fontSize: '25px',
      transform: 'rotate(90deg)',
      margin: '0 2px 0 10px',
    },

    interactiveCan: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      marginRight: '10px',
    },

    canNumberWrapper: {
      position: 'absolute',
      height: '0px',
    },

    canNumberLabel: {
      userSelect: 'none',
      cursor: 'pointer',
      height: '10px',
      position: 'relative',
      color: colors.BLACK,
      fontFamily: 'Avenir',
      fontSize: '10px',
      bottom: '5px',
    },

    mobileIconCan: {
      fontSize: values.EXTRA_LARGE_FONT_SIZE,
      padding: '0 10px',
    },

    stepperWrapper: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height: '55px',
      background: colors.GRAY200,
    },

    stageWrap: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      alignItems: 'center',

    },

    line: {
      background: colors.BLACK,
      width: '100%',
      height: '1px',
    },

    // ---- label
    stageLabel: {
      color: colors.GREY400,
      fontSize: '20px',
      marginTop: '15px',
      marginBottom: '5px',
    },

    commonlabel: {
      color: colors.GREY400,
    },

    activelabel: {
      fontWeight: 900,
      color: colors.BLACK,
    },

    passedlabel: {
      color: colors.BLACK,
    },

    // ---- rounds
    round: {
      background: colors.WHITE,
      position: 'relative',
      top: '-4px',
      border: '1px solid',
      borderRadius: '50%',
      width: '5px',
      height: '5px',
    },

    commonRound: {
      background: colors.WHITE,
    },

    activeRound: {
      background: colors.BLACK,
      width: '9px',
      height: '9px',
      top: '-6px',
    },

    passedRound: {
      background: colors.BLACK,
    },

  }
}
