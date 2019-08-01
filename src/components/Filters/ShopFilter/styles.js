export default function({ colors, values, breakpoints, palette }) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
    },

    head: {
      display: 'flex',
      flexDirection: 'row',
      boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2)',
    },

    labelColumn: {
      display: 'flex',
      width: '50%',
      alignItems: 'center',
      flexGrow: '1',
      justifyContent: 'flex-start',
    },

    viewModeColumn: {
      display: 'flex',
      width: '50%',
      alignItems: 'center',
      flexGrow: '1',
      justifyContent: 'flex-end',
    },

    filterIcon: {
      fontSize: '15px',
      margin: '0 10px',
    },

    expandIcon: {
      fontSize: '3px',
      margin: '0 5px',
    },

    expandLessIcon: {
      fontSize: '3px',
      margin: '0 5px',
      transform: 'rotate(180deg)',
    },

    singleModeIcon: {
      fontSize: '15px',
      padding: '10px',
      marginRight: '10px',
      color: colors.GRAY500,
    },

    multiModeIcon: {
      fontSize: '15px',
      padding: '10px',
      color: colors.GRAY500,
    },

    activeIcon: {
      color: colors.BLACK,
    },

    expandButton: {
      display: 'flex',
      height: '43px',
      alignItems: 'center',
      flexDirection: 'row',
      margin: '0 10px',
    },

    // ---- Expanded filter

    expandedContainer: {
      display: 'flex',
      position: 'relative',
      width: '100%',
      height: '0px',

      transition: 'all .15s ease-in-out',
      visibility: 'hidden',
      opacity: 0,
    },

    showExpanded: {
      visibility: 'visible',
      opacity: 1,
      zIndex: 10,
    },

    absoluteBlock: {
      display: 'flex',
      position: 'absolute',

      width: '100%',
      background: colors.WHITE,
      boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2)',


    },
  }
}
