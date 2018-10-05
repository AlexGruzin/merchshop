import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactHelmet from 'react-helmet';
import injectSheet from 'react-jss';

import styles from './styles';

@injectSheet(styles)
export default class Home extends PureComponent {
  static propTypes = {
    route: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  };

  render() {
    const {
      route,
      email,
      classes,
    } = this.props;

    return (
      <div>
        <ReactHelmet
          title="Home screen"
        />
        <div className={classes.title}>
          {'home:homeTitle'}
        </div>
        <div>{route}</div>
        <div>{email}</div>
      </div>
    );
  }
}
