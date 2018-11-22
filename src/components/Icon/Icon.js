import classnames from 'classnames';
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
  };

  static defaultProps = {
    className: '',
    classes: () => null
  };

  render() {
    const { classes, icon, className, onClick } = this.props;

    return (
      <div
        className={classnames( classes.root, className )}
        dangerouslySetInnerHTML={{ __html: icon }}
        onClick={onClick}/>
    );
  }
}
