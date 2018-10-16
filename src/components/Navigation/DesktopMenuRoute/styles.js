export default function({ colors, breakpoints, palette }) {
  return {
    'headerlinks:promo': {
      color: colors.CORAL,
    },

    navigationRow: {
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'row',
      height: '50px',
      backgroundColor: palette.primary.main,
    },

    navRowWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '80%',
      height: '50px',
      margin: 'auto',
    },

    expandPanel: {
      '&:before': {
        content: 'none',
      },
      boxShadow: 'none',
      backgroundColor: 'transparent',
      maxWidth: '100px',
      height: '50px',
      zIndex: '2',
    },

    expandPanelExpanded: {
      maxHeight: '50px',
      margin: 0,
    },

    rootSummary: {
      height: '50px',
      maxWidth: '100px',
      maxHeight: '50px',
      margin: 0,
      padding: 0,

      '&$summaryExpanded': {
        minHeight: 'unset',
        margin: '0 0',
      },
    },

    contentSummary: {},

    summaryExpanded: {},

    expandedActionsWrapper: {
      margin: 0,
    },

    expandedActionsRoot: {
      padding: 0,
    },

    expandSubButtonLabel: {
      textAlign: 'left',
    },

    navigationExpandedButton: {
      justifyContent: 'flex-start',
      padding: '0 35px',
      height: '37px',
    },
  }
}
