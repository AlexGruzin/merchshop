import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';

import styles from './styles';

@injectSheet( styles )
export default class Icon extends PureComponent {
  static propTypes = {
    classes: PropTypes.object,
    className: PropTypes.string,
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    className: '',
    onClick: null
  };

  render() {
    const { classes, icon, className, onClick } = this.props;

    return (
      <div
        className={classNames( classes.root, className )}
        dangerouslySetInnerHTML={{ __html: icon }}
        onClick={onClick}/>
    );
  }
}
