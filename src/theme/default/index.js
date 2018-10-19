import { createMuiTheme } from '@material-ui/core/styles';
import palette from './palette';
import colors from './colors';
import typography from './typography';
import button from './muiComponents/Button';
import expansionPanel from './muiComponents/ExpansionPanel';
import expansionPanelSummary from './muiComponents/ExpansionPanelSummary';
import expansionPanelActions from './muiComponents/ExpansionPanelActions';
import iconButton from './muiComponents/IconButton';
import collapseArea from './muiComponents/Collapse';
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
    MuiButton: button,
    MuiCollapse: collapseArea,
    MuiIconButton: iconButton,
    MuiExpansionPanel: expansionPanel,
    MuiExpansionPanelSummary: expansionPanelSummary,
    MuiExpansionPanelActions: expansionPanelActions,
  },

  props: {
    MuiButtonBase: {
      disableRipple: true, // No more ripple
    },
  },
});
