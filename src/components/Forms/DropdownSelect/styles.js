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
      // maxWidth: 195,
      margin: '1em 0'
    },

    select: {
      padding: 12,
      '&:focus': {
        backgroundColor: colors.TRANSPARENT,
      },
    },

    icon: {
      color: colors.BLACK,
      fontSize: values.MEDIUM_FONT_SIZE,
      lineHeight: '43px',
      margin: '0 8px',
      top: '50%',
      transform: 'translate3d(0, -50%, 0)'
    },

    menuPaper: {
      //left: '0!important',
      //borderRadius: 0,
      boxShadow: 'none',
    },
    notchedOutline: {
    },
  }
}
