import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import injectSheet from 'react-jss';

import styles from './styles';

@injectSheet( styles )
export default class Icon extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    icon: PropTypes.string.isRequired,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const { classes, icon, className } = this.props;

    return (
      <div className={classnames( classes.root, className )} dangerouslySetInnerHTML={{ __html: icon }} />
    );
  }
}
