import Hidden from '@material-ui/core/Hidden';

import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';

import Icon from 'components/Icon';
import { ICONS } from 'constants/icons';
import { H3 } from 'constants/typography';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import styles from './styles';

@translate()
@injectSheet( styles )
export default class Advertisement extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  render() {
    const { classes } = this.props;

    const {
      root,
      advertismentWrapper,
      advertismentRow,
      phraze,
      advertIconWrapper,
      advertIcon,
    } = classes;

    return (
      <div className={root}>

        <div className={advertismentWrapper}>

          <div className={advertismentRow}>
            <Typography
              className={classNames( phraze, classes.promo )}
              style={{
                textTransform: 'uppercase'
              }}
              variant={H3}>Free delivery</Typography>
            <Typography className={phraze}variant={H3}>across Indonesia</Typography>

            <Hidden xsDown>
              <Typography className={phraze} variant={H3}>|</Typography>
              <div className={advertismentRow}>
                <Typography className={phraze} variant={H3}>We offer FREE Exchanges & Refunds</Typography>
              </div>
            </Hidden>

          </div>

        </div>

        <div className={advertIconWrapper}>
          <Icon
            icon={ICONS.CROSS_ICON}
            className={advertIcon}/>
        </div>

      </div>
    );
  }
}

