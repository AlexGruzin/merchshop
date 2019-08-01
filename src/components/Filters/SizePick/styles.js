export default function({ colors, values, breakpoints, palette }) {
  return {

    wrapper: {
      display: 'flex',
      width: '40px',
      height: '40px',

      '& input': {
        position: 'absolute',
        visibility: 'hidden',
      },

      '& input:focus + label': {
        // backgroundColor: 'rgba(255, 255, 255, .2)',
      },

      '& input:checked + label': {
        color: colors.BLACK,
        borderColor: colors.BLACK,
      },

      '& label': {
        display: 'flex',
        width: '100%',

        padding: 'auto auto',

        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Avenir',
        fontSize: '12px',
        color: colors.GRAY500,
        borderColor: colors.GRAY500,

        border: '1px solid',
      },

      '& label:hover': {
        // backgroundColor: 'rgba(255, 255, 255, .2)',
      },

    },
  }
}
