export default function({ colors, values, breakpoints, palette }) {
  return {
    selectRoot: {
      width: '100%',
      backgroundColor: colors.TRANSPARENT,
    },

    root: {
      width: '100%',
    },
    formControl: {
      width: '70%',
      margin: '1em 0'
    },

    select: {
      padding: 12,
      '&:focus': {
        backgroundColor: colors.TRANSPARENT,
      },
    },

    icon: {
      margin: '0 8px',
      top: '50%',
      transform: 'translate3d(0, -50%, 0)'
    },

    menuPaper: {
      boxShadow: 'none',
    },

    notchedOutline: {},
  }
}
