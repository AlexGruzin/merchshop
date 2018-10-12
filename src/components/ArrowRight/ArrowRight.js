import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Images from 'theme/images';
import styles from './styles';

@injectSheet( styles )
export default class ArrowRight extends PureComponent {

  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  render() {
    const { classes } = this.props;

    return (
      <div
        className={classes.arrow}
        style={{
          backgroundImage: `url('${Images.arrowRight}')`
        }}/>
    );
  }
}
