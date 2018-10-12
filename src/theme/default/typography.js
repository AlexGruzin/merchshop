import colors from './colors';
import palette from './palette';

export default {
  button: {
    fontFamily: 'Avenir',
    fontSize: '12px',
    fontWeight: 900,
    letterSpacing: '0.5px',
    fontStyle: 'normal',
    fontStretch: 'normal',
    textTransform: 'uppercase',
  },

  headline: {
    fontFamily: [
      'HelveticaNeue-Medium',
    ].join( ',' ),
    fontSize: '12px',
    textTransform: 'uppercase',
    padding: 0,
    color: colors.BLACK,
  },

  display3: {
    fontFamily: 'Avenir',
    fontSize: '10px',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.3px',
    color: colors.BLACK,
  },

  display2: {
    fontFamily: 'Avenir',
    fontSize: '14px',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.5px',
    color: colors.BLACK,
  },

  display1: {
    fontFamily: 'Avenir',
    fontSize: '12px',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.5px',
    color: colors.CORAL,
    textTransform: 'uppercase',
    fontWeight: '500',
  },

  body2: {
    fontFamily: 'HelveticaNeue',
    fontWeight: 300,
    fontSize: '12px',
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: '0.5px',
    textTransform: 'none',
  },

  display4: {
    fontFamily: 'HelveticaNeue-Bold',
    fontWeight: 900,
    fontSize: '20px',
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: 'normal',
    textTransform: 'none',
    color: palette.secondary.main
  },

  subheading: {
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
