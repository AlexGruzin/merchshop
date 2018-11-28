export default  ({ breakpoints, palette, colors, values }) => ({
  root: {
    width: '100%',
    position: 'relative'
  },
  LeftArrow: {
    position: 'absolute',
    top: '50%',
    left: '20px',
    padding: '10px'
  },
  RightArrow: {
    position: 'absolute',
    top: '50%',
    right: '20px',
    padding: '10px'
  },
  heart: {
    position: 'absolute',
    left: '20px',
    top: '20px',
    color: colors.GREY800,
    padding: '10px'
  },
  magnifierGlass: {
    position: 'absolute',
    right: '20px',
    bottom: '20px',
    padding: '10px'
  },
  photo: {
    width: '100%',
    position: 'relative'
  },
  bigPhoto: {
    display: 'block',
    fontSize: 0
  },
  previewContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 1.5px',
    marginTop: 3
  },
  preview: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },
  previewWrapper: {
    height: 0,
    position: 'relative',
    margin: '0 1.5px 4px',
    cursor: 'pointer'
  },
  previewActive: {
    '&::after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      left: 0,
      top: 0,
      backgroundColor: '#fff',
      opacity: 0.3,
      pointerEvents: 'none',
      width: '100%',
      height: '100%'
    }
  }
})
