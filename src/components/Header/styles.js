export default function({ colors, values }) {
  return {
    root: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    languagesRoot: {
      display: 'flex',
      alignItems: 'center',
    },
    languagesSelect: {
      marginLeft: 10,
    },
    linksContainer: {
      display: 'flex',
      flexDirection: 'row',
    },
    link: {
      padding: 10,
      '&:hover': {
        color: colors.LILAC_BUSH,
      }
    },
    active: {
      color: colors.RED,
    },
    logoutButton: {
      backgroundColor: colors.RED,
      maxWidth: '150px',
      borderRadius: '4px',
      color: colors.WHITE,
      fontSize: '15px',
      fontFamily: values.PRIMARY_FONT,
    },
  };
}
