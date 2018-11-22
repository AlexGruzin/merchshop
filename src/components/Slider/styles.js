export default function({ colors, values, breakpoints, palette }) {
  return {

    slidesContainer: {
      height: '408px',
      width: '100%',
      position: 'relative',
    },

    item: {
      height: '408px',
      position: 'absolute',
      width: '100%',
      float: 'left',
      background: '#CCC',
      transition: 'all 1s',
      color: '#FFFFFF',
    },

    slideWrapper: {
      display: 'flex',
      justifyContent: 'center',
      height: '408px',
      overflow: 'hidden',

      position: 'relative',
      width: '100%',
    },

    SliderImage: {
      margin: '0 auto',
      width: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
    },

    'level-1': {
      left: '-100%',
    },
    'level0': {
      left: '0px',
    },
    'level1': {
      left: '100%',
    },

    // ---- background of image on slider each per image ----
    slide0: {
      background: '#81898c',
    },
    slide1: {
      background: '#81898c',
    },
    slide2: {
      background: '#81898c',
    },
    slide3: {
      background: '#81898c',
    },

    sliderButtonLink: {
      //color: colors.BLACK,
    },

    sliderLabel: {
      marginRight: '46px',
    },

    sliderButton: {
      position: 'absolute',
      bottom: '33px',
      padding: '8px 12px 8px 14px'
    },

    arrowSliderIcon: {},

    // ---- Indicator ----

    sliderIndicatorContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '408px', // slider height
      width: '100%',
      height: '50px',
    },

    sliderIndicatorWrapper: {
      display: 'flex',
      alignItems: 'center',
      width: '10%',
      height: '50px',
    },

    indicator: {
      flexGrow: 1,
      margin: '0 2px',
      width: '12px',
      height: '2px',
    },

    activated: {
      backgroundColor: colors.BLACK,
      boxShadow: '0px 0px 3px 2px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
    },

    disactivated: {
      backgroundColor: colors.GRAY400,
    },

    sliderContainer: {
      display: 'flex',
      overflow: 'hidden',
      width: '100%',
      height: '458px',
      margin: 'auto',
      justifyContent: 'center',
    },
  }
}
