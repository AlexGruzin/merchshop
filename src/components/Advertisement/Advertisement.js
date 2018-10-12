import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { translate } from 'react-i18next';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import styles from './styles';

@translate()
@injectSheet( styles )
export default class Advertisement extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  render() {
    const { classes } = this.props;

    const {
      rootAdvert,
      advertismentRow,
      phraze,
      advertIconWrapper,
      advertIcon,
    } = classes;

    return (
      <div className={rootAdvert}>
        <div className={advertismentRow}>
          <Typography className={phraze} variant="display1">Free delivery</Typography>
          <Typography className={phraze} variant="display2">across Indonesia</Typography>
          <Typography className={phraze} variant="display2">|</Typography>
          <Typography className={phraze} variant="display3">Terms & conditions apply</Typography>
        </div>
        <div className={advertIconWrapper}>
          <IconButton aria-label="Close" className={advertIcon}>
            <CloseIcon fontSize='inherit' />
          </IconButton>
        </div>
      </div>
    );
  }
}


