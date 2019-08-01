export default ({ breakpoints }) => ({
  paper: {

    width: '90%',
    margin: 0,
    borderRadius: 0,
    maxHeight: 'none',

    [breakpoints.down( 'sm' )]: {
      width: '90%',
    },
    [breakpoints.up( 'sm' )]: {
      minWidth: '330px',
      width: '25%',
    },
  }
});
