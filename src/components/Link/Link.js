import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';

import styles from './styles';


@injectSheet( styles )
export default class CustomLink extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    to: PropTypes.string.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  render() {
    const {
      classes,
      children,
      className,
      to,
    } = this.props;

    return (
      <Link
        className={classNames( className, classes.root )}
        to={to}
      >
        {children}
      </Link>
    );
  }
}
