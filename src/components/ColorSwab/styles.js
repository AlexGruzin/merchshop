export default ({ palette, values }) => ({
  root: {
    borderRadius: 1000,
    display: 'inline-block',
    cursor: 'pointer',
    position: 'relative'
  },
  Tick: {
    color: palette.textPrimary.main,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate3d(-50%, -50%, 0)',
    fontSize: values.SMALL_FONT_SIZE
  }
})
