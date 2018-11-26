export default ({ breakpoints, values }) => ({
  root: {

  },
  container: {
    maxWidth: 600,
    margin: 'auto',
    padding: `$0 ${values.STANDARD_RELATIVE_SIZE}`
  },
  paragraphContainer: {
    padding: '0 12.5%',
    margin: `${values.MASSIVE_RELATIVE_SIZE} 0`
  },
  heading: {
    fontWeight: 300,
    margin: `${values.MASSIVE_RELATIVE_SIZE} 0`,
    textAlign: 'center'
  },
  paragraph: {
    margin: `${values.STANDARD_RELATIVE_SIZE} 0`,
  },
  image: {
    margin: 'auto',
    display: 'block'
  }
})
