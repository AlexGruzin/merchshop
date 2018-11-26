export default function({ colors, breakpoints, palette }) {
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

    'headerlinks:promo': {
      color: colors.CORAL,
    },
  }
}
