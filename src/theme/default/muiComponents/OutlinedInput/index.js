import colors from '../../colors';

export default {
  root: {
    '& $notchedOutline': {
      borderColor: 'black',
      borderRadius: 0
    },
    '&$focused': {
      '& $notchedOutline': {
        borderColor: colors.BLACK_BORDER,
        borderRadius: 0,
        borderWidth: 1
      }
    },
  },
}
