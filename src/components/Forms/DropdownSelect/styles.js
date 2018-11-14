export default function({ colors, values, breakpoints, palette }) {
  return {
    selectRoot: {
      width: '100%',
      height: 'inherit',
      backgroundColor: colors.WHITE,
    },

    root: {
      width: '100%',
    },

    select: {

      '&:focus': {
        backgroundColor: colors.WHITE,
      },
    },

    icon: {
      color: colors.BLACK,
      fontSize: '12px',
      lineHeight: '43px',
      margin: '0 17px',
    },

    menuPaper: {
      left: '0!important',
      borderRadius: 0,
      boxShadow: 'none',
    },

    dropLink: {
      textDecoration: 'none',
      color: 'inherit',
    },

  }
}
