import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './styles';

import Icon from 'components/Icon';
import { ICONS } from 'constants/icons';

@injectSheet( styles )
export default class ModalsHeader extends PureComponent {
  static propTypes = {
    onCrossIconClick: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
  };

  render() {
    const {
      classes,
      onCrossIconClick,
    } = this.props;

    return (
      <div className={classes.head}>
        <div
          className={classes.crossWrapper}
          onClick={onCrossIconClick}>
          <Icon className={classes.crossIcon}
            icon={ICONS.CROSS_ICON}
          />
        </div>
      </div>
    );
  }
}
