import { createMuiTheme } from '@material-ui/core/styles';
import palette from './palette';
import colors from './colors';
import typography from './typography';
import button from './muiComponents/Button';
import iconButton from './muiComponents/IconButton';
import collapseArea from './muiComponents/Collapse';
import inputBase from './muiComponents/InputBase';
import buttonBase from './muiComponents/ButtonBase';
import outlinedInput from './muiComponents/OutlinedInput';
import values from './values';

const breakpointValues = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 1024,
  xl: 1200,
};

export default createMuiTheme({
  typography,
  colors,
  palette,
  values,
  breakpoints: { values: breakpointValues },
  overrides: {
    MuiButtonBase: buttonBase,
    MuiInputBase: inputBase,
    MuiButton: button,
    MuiCollapse: collapseArea,
    MuiIconButton: iconButton,
    MuiOutlinedInput: outlinedInput
  },
});
