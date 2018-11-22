export default function({ colors, palette }) {
  return {
    paginationContainer: {
      display: 'flex',
      alignSelf: 'center',
      padding: 0,
      flexDirection: 'row',
      textDecoration: 'none',
    },
    pageName: {
      textDecoration: 'none',
      margin: 'auto 10px',
      listStyleType: 'none',
      cursor: 'pointer',
    },
    activeClassName: {
      color: colors.CORAL,
    },
    paginationFont: {
      fontFamily: 'Avenir-Book',
      fontWeight: 300,
      fontSize: '14px',
      fontStyle: 'normal',
      fontStretch: 'normal',
      letterSpacing: '0.3px',
      textTransform: 'none',
    },

    nextPreviousButton: {
      '& a:focus': {
        outline: 'none',
      },

      cursor: 'pointer',
      width: '90px',
      listStyleType: 'none',
      textTransform: 'uppercase',
      padding: '3px',
      border: `1px solid ${colors.BLACK}`,
      textAlign: 'center',
    },

    break: {
      textDecoration: 'none',
      listStyleType: 'none',
      textAlign: 'center',

      '& a': {
        textDecoration: 'none',
      },
    },
  };
}
