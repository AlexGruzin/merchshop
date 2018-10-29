export default function({ colors, values, breakpoints, palette }) {
  return {
    rootFilters: {
      display: 'flex',
      width: '100%',
      height: '500px',
      background: colors.GREY300,
      borderRight: '1px solid black',
    },

    filtersWrapper: {
      display: 'flex',
      flexDirection: 'column',
      margin: '0 30px',
    },

    label: {
      margin: '5px',
    },

    oneFilterWrapper: {
      margin: '15px 0',
    },

    textFieldFocused: {
      color: colors.CORAL,
    },

    // cost
    rangeInputWrapper: {
      display: 'flex',
    },
  }
}
