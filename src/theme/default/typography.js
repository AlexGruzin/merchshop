import colors from './colors';
import palette from './palette';

export default {
  useNextVariants: true,

  button: {
    fontFamily: 'Avenir-Heavy',
    fontSize: '12px',
    fontWeight: 900,
    letterSpacing: '0.5px',
    fontStyle: 'normal',
    fontStretch: 'normal',
    textTransform: 'uppercase',
  },

  h5: {
    fontFamily: [
      'HelveticaNeue-Medium',
    ].join( ',' ),
    fontSize: '12px',
    textTransform: 'uppercase',
    padding: 0,
    color: colors.BLACK,
  },

  h2: {
    fontFamily: 'Avenir',
    fontSize: '10px',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.3px',
    color: colors.BLACK,
  },

  h3: {
    fontFamily: 'Avenir',
    fontSize: '12px',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.5px',
    color: colors.BLACK,
    fontWeight: '500',
  },

  h4: {
    fontFamily: 'HelveticaNeue-Light',
    fontSize: '12px',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.5px',
  },

  body1: {
    fontFamily: 'Avenir',
    fontSize: '12px',
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: '0.5px',
    textTransform: 'none',
  },

  h1: {
    fontFamily: 'HelveticaNeue-Bold',
    fontWeight: 900,
    fontSize: '20px',
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: 'normal',
    textTransform: 'none',
    color: palette.secondary.main
  },

  subtitle1: {
    fontFamily: 'HelveticaNeue',
    fontWeight: 300,
    fontSize: '8px',
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: '0.3px',
    textTransform: 'none',
  },


  fontFamily: [
    'sofia-pro',
    'Arial',
    'sans-serif',
  ].join( ',' ),
  color: colors.BLACK,
  fontWeight: 'normal',
  fontStyle: 'normal',
  htmlFontSize: 16,
};

