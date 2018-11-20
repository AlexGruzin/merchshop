import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './styles';
import classnames from 'classnames';
import Typography from '@material-ui/core/Typography';

import { BODY2 } from 'constants/typography';

@injectSheet( styles )
export default class Error extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    error: PropTypes.string,
    messageType: PropTypes.string,
  };

  static defaultProps = {
    messageType: 'error',
  };

  render() {
    const { classes, error, messageType } = this.props;

    return (
      <Typography
        className={classes[messageType]}>
        {error}
      </Typography>
    );
  }
}
