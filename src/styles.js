export default {
  '@global': {
    '@font-face':  [
      {
        fontFamily: "HelveticaNeue",
        src: 'url("/fonts/HelveticaNeue.ttf") format("truetype")',
        fontWeight: 400,
        fontStyle: 'italic',
      },
      {
        fontFamily: "HelveticaNeue-Italic",
        src: 'url("/fonts/HelveticaNeue-Italic.ttf") format("truetype")',
        fontWeight: 400,
        fontStyle: 'italic',
      },
      {
        fontFamily: "HelveticaNeue-BoldItalic",
        src: 'url("/fonts/HelveticaNeue-BoldItalic.ttf") format("truetype")',
        fontWeight: 700,
        fontStyle: 'italic',
      },
      {
        fontFamily: "HelveticaNeue-LightItalic",
        src: 'url("/fonts/HelveticaNeue-LightItalic.ttf") format("truetype")',
        fontWeight: 300,
        fontStyle: 'italic',
      },
      {
        fontFamily: "HelveticaNeue-UltraLight",
        src: 'url("/fonts/HelveticaNeue-UltraLight.ttf") format("truetype")',
        fontWeight: 300,
        fontStyle: 'italic',
      },
      {
        fontFamily: "HelveticaNeue-BlackItalic",
        src: 'url("/fonts/HelveticaNeue-BlackItalic.ttf") format("truetype")',
        fontWeight: 900,
        fontStyle: 'italic',
      },
      {
        fontFamily: "HelveticaNeue-Medium",
        src: 'url("/fonts/HelveticaNeue-Medium.ttf") format("truetype")',
        fontWeight: 500,
        fontStyle: 'normal',
      },
      {
        fontFamily: "HelveticaNeue_Bold",
        src: 'url("/fonts/HelveticaNeue_Bold.ttf") format("truetype")',
        fontStyle: 'normal',
      },
      {
        fontFamily: "HelveticaNeue_Medium",
        src: 'url("/fonts/HelveticaNeue_Medium.ttf") format("truetype")',
        fontStyle: 'normal',
      },
      {
        fontFamily: "HelveticaNeue_Light",
        src: 'url("/fonts/HelveticaNeue_Light.ttf") format("truetype")',
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
