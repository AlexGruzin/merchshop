export default ({ values, colors }) => ({
  root: {
    position: 'relative'
  },
  expand: {
    padding: 0
  },
  cardRoot: {
    boxShadow: 'none'
  },
  cardHeaderRoot: {
    padding: `${values.SLIGHTLY_SMALLER_RELATIVE_SIZE} ${values.LARGE_RELATIVE_SIZE}rem`,
    borderStyle: 'solid',
    borderColor: colors.STEPPER_BORDER,
    borderWidth: 1.5,
  },
  collapseContainer: {
    boxShadow: 'none'
  },
  headerAction: {
    margin: 0
  },
  name: {
    textTransform: 'capitalize'
  }
})
