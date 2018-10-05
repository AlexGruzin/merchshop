import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

import styles from './styles';

@injectSheet(styles)
export default class Loading extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
    blocking: PropTypes.bool.isRequired,
    renderChildren: PropTypes.bool
  };

  render() {
    const {
      classes,
      children,
      blocking,
      message,
      renderChildren,
    } = this.props;

    return (
      <BlockUi
        message={message}
        className={classes.loader}
        tag="div"
        renderChildren={renderChildren}
        blocking={blocking}
      >
        {children}
      </BlockUi>
    );
  }
}
