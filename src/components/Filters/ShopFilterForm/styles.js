export default function({ colors, values, breakpoints, palette }) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      margin: '0 5%',
      marginBottom: '5%',

      [breakpoints.up( 'sm' )]: {
        margin: '0 2%',
        marginBottom: '2%',
      },
    },

    blocksContainer: {
      display: 'flex',
      flexDirection: 'row',

      [breakpoints.up( 'sm' )]: {
        alignItems: 'flex-end',
      },

      [breakpoints.down( 'sm' )]: {
        flexDirection: 'column',
      },
    },

    filterBlock: {
      display: 'flex',
      flexDirection: 'column',
      marginRight: '40px',
      marginBottom: '15px',
    },

    selectBlock: {
      width: '34%',

      [breakpoints.down( 'sm' )]: {
        width: '100%',
      },
    },

    colorBlock: {
      width: '40%',

      [breakpoints.down( 'sm' )]: {
        width: '100%',
      },
    },

    sizeBlock: {
      width: '26%',

      [breakpoints.down( 'sm' )]: {
        width: '100%',
      },
    },

    dropDownField: {
      width: '100%',
      height: '40px',
    },

    colorLabel: {
      margin: '5px 0',
    },

    dotsWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    dotWrapper: {
      height: '22px',
      width: '22px',
    },

    sizesLabel: {
      margin: '5px 0',
    },

    sizesWrapper: {
      display: 'flex',
    },

    size: {
      display: 'flex',
      marginRight: '5px',
      justifyContent: 'center',
      alignItems: 'center',
    },

    sizeEnabled: {
      border: `1px solid ${colors.BLACK}`,
      color: colors.BLACK,
    },

    sizeLabel: {
      color: 'inherit',
    },

    buttonWrapper: {
      display: 'flex',
      marginTop: '15px',

      [breakpoints.up( 'sm' )]: {
        alignSelf: 'center',
        width: '30%',
      },
    },

    filterButton: {
      flexGrow: '3',
      marginRight: '5px',
    },

    clearButton: {
      flexGrow: '5',
    },
  }
}
