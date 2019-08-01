import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import styles from './styles';

import { BODY1, SUBHEADING, H4 } from 'constants/typography';
import { ICONS } from 'constants/icons';

@translate()
@injectSheet( styles )
export default class LineRate extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    rate: PropTypes.object.isRequired,
  };

  render() {
    const {
      classes,
      rate,
    } = this.props;

    return (
      <div className={classes.line}>
        <div style={{ flexGrow: rate }} className={classes.loaded}/>
        <div style={{ flexGrow: 100 - rate }} className={classes.empty}/>
      </div>
    );
  }
}
