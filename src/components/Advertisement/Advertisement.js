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
    classes: PropTypes.object,
    visibility: PropTypes.bool,
  };

  static defaultProps = {
    visibility: false,
  };

  render() {
    const { classes } = this.props;

    const {
      root,
      advertisementWrapper,
      advertisementRow,
      phrase,
      advertIconWrapper,
      advertIcon,
    } = classes;

    if ( !this.props.visibility ) {
      return null
    }

    return (
      <div className={root}>

        <div className={advertisementWrapper}>

          <div className={advertisementRow}>
            <Typography
              className={classNames( phrase, classes.promo )}
              style={{
                textTransform: 'uppercase'
              }}
              variant={H3}>Free delivery</Typography>
            <Typography className={phrase} variant={H3}>across Indonesia</Typography>

            <Hidden xsDown>
              <Typography className={phrase} variant={H3}>|</Typography>
              <div className={advertisementRow}>
                <Typography className={phrase} variant={H3}>We offer FREE Exchanges & Refunds</Typography>
              </div>
            </Hidden>

          </div>

        </div>

        <div className={advertIconWrapper}>
          <Icon icon={ICONS.CROSS_ICON} className={advertIcon} />
        </div>

      </div>
    );
  }
}

