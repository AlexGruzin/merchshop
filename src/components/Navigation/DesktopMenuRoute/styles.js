export default function({ colors, breakpoints, palette }) {
  return {
    coral: {
      color: colors.CORAL,
    },

    ButtonContainer: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      minWidth: '100px',
      width: '110px',
    },

    ButtonWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    Button: {
      textDecoration: 'none',
      padding: '10px',
    },

    ButtonLabel: {
      fontWeight: 500
    },
  }
}
