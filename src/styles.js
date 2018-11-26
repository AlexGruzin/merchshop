export default {
  '@global': {
    '@font-face':  [
      {
        fontFamily: "Helvetica Neue",
        src: 'url("/fonts/HelveticaNeue-UltraLight.ttf") format("truetype")',
        fontWeight: 100,
        fontStyle: 'normal',
      },
      {
        fontFamily: "Helvetica Neue",
        src: 'url("/fonts/HelveticaNeue-Medium.ttf") format("truetype")',
        fontWeight: 400,
        fontStyle: 'normal',
      },
      {
        fontFamily: "Helvetica Neue",
        src: 'url("/fonts/HelveticaNeue-Italic.ttf") format("truetype")',
        fontWeight: 400,
        fontStyle: 'italic',
      },
      {
        fontFamily: "Helvetica Neue",
        src: 'url("/fonts/HelveticaNeue-BoldItalic.ttf") format("truetype")',
        fontWeight: 700,
        fontStyle: 'italic',
      },
      {
        fontFamily: "Helvetica Neue",
        src: 'url("/fonts/HelveticaNeue-Light.ttf") format("truetype")',
        fontWeight: 300,
        fontStyle: 'normal',
      },
      {
        fontFamily: "Helvetica Neue",
        src: 'url("/fonts/HelveticaNeue-LightItalic.ttf") format("truetype")',
        fontWeight: 300,
        fontStyle: 'italic',
      },
      {
        fontFamily: "Helvetica Neue",
        src: 'url("/fonts/HelveticaNeue-BlackItalic.ttf") format("truetype")',
        fontWeight: 900,
        fontStyle: 'italic',
      },
      {
        fontFamily: "Helvetica Neue",
        src: 'url("/fonts/HelveticaNeue-Medium.ttf") format("truetype")',
        fontWeight: 500,
        fontStyle: 'normal',
      },
      {
        fontFamily: 'Icomoon',
        src: 'url("/fonts/icomoon.ttf") format("truetype")',
      },
    ],

    body: {
      margin: 0,
      overflowX: 'hidden',
      backgroundColor: '#fff'
    },
    html: {
      overflowX: 'hidden',
      fontSize: 12
    },
    image: {
      userSelect: 'none',
      userDrag: 'none'
    },
    '*:focus': {
      outline: 'none'
    }
  }
};
