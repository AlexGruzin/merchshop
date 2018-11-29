export default function({ colors, values, breakpoints, palette }) {
  return {

    wrapper: {
      height: '100%',
      borderRadius: '50%',

      '& input': {
        display: 'block',
        height: '53px',
        margin: '0 0 -53px -9999px',
      },

      '& input:focus + label': {
        // backgroundColor: 'rgba(255, 255, 255, .2)',
      },

      '& input:checked + label::before': {
        content: "'\\e90c'",
      },

      '& label': {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.WHITE,

        fontSize: '7px',
      },

      '& label:hover': {
        // backgroundColor: 'rgba(255, 255, 255, .2)',
      },

      '& label::before': {
        content: '',
        display: 'block',
        position: 'absolute',
        fontFamily: 'Icomoon',
      },
    },
  }
}
