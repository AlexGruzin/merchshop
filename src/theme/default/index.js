import { createMuiTheme } from '@material-ui/core/styles';
import palette from './palette';
import colors from './colors';
import typography from './typography';
import button from './muiComponents/Button';
import iconButton from './muiComponents/IconButton';
import collapseArea from './muiComponents/Collapse';
import inputBase from './muiComponents/InputBase';
import buttonBase from './muiComponents/ButtonBase';
import values from './values';

export default createMuiTheme({
  typography,
  colors,
  palette,
  values,
  overrides: {
    MuiButtonBase: buttonBase,
    MuiInputBase: inputBase,
    MuiButton: button,
    MuiCollapse: collapseArea,
    MuiIconButton: iconButton,
  },

  props: {
    MuiButtonBase: {
      disableRipple: true, // No more ripple
    },
  },
});
