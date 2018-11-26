export default function({ colors, values, breakpoints, palette }) {
  return {

    rootSwipeContainer: {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
    },

    headLine: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: '55px',
      minHeight: '55px',
    },

    backButton: {
      display: 'flex',
      cursor: 'pointer',
      alignItems: 'center',
    },

    backIcon: {
      fontSize: '22px',
      transform: 'rotate(90deg)',
      marginLeft: '10px',
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
      height: '11px',
      position: 'relative',
      color: colors.BLACK,
      fontSize: '11px',
      bottom: '4px',
    },

    mobileIconCan: {
      fontSize: values.EXTRA_GIANT_FONT_SIZE,
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
      marginTop: values.LARGE_GIANT_FONT_SIZE,
      marginBottom: '5px',
    },

    commonlabel: {
      color: colors.GRAY400,
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
      position: 'relative',
      top: '-3px',
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
      top: '-5px',
    },

    passedRound: {
      background: colors.BLACK,
    },
  }
}
