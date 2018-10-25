import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { translate } from 'react-i18next';
import classNames from 'classnames';

import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

import { H1, H2, H3, H4 } from 'constants/typography';
import Icon from 'components/Icon';
import { ICONS } from 'constants/icons';
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
              variant="h3"
            >Free delivery</Typography>
            <Typography className={phraze}variant="h3">across Indonesia</Typography>
            <Hidden xsDown><Typography className={phraze} variant="h3">|</Typography></Hidden>
          </div>

          <div className={advertismentRow}>
            <Typography className={phraze} variant="h2">Terms & conditions apply</Typography>
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


