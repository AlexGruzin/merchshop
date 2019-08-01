export default function({ values }) {
  return {
    swipingNavLabel: {
      textTransform: 'uppercase',
      padding: '5px 0',
    },

    listItemWithSubroutes: {
      justifyContent: 'space-between',
    },

    mobileSubRouteContainer: {
      width: '100%',
      boxShadow: 'none',
    },

    textTransform: {
      textTransform: 'none',
    },

    expandIcon: {
      fontSize: values.EXPAND_ICON_SIZE,
    },
  }
}
