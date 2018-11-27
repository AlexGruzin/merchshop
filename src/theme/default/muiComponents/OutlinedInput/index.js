export default {
  root: {
    '& $notchedOutline': {
      borderColor: 'black',
      borderRadius: 0
    },
    '&$focused': {
      '& $notchedOutline': {
        borderColor: 'black',
        borderRadius: 0,
        borderWidth: 1
      }
    },
  },
}
