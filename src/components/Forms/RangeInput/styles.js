export default ({ colors }) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textFieldMinCost: {
    border: `1px solid ${colors.GREY400}`,
    padding: '0 3px',
    background: colors.WHITE,

    '&:hover': {
      borderColor: colors.GREY800,
    },

    width: '35%',
  },

  textFieldMaxCost: {
    border: `1px solid ${colors.GREY400}`,
    padding: '0 3px',
    background: colors.WHITE,

    '&:hover': {
      borderColor: colors.GREY800,
    },

    width: '35%',
  },

  input: {
    '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
      webkitAappearance: 'none',
      margin: '0',
    },
  },

  minLabel: {
    alignSelf: 'center',
  },

  maxLabel: {
    alignSelf: 'center',
  }

});
