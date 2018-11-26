import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import { ICONS } from 'constants/icons';
import Icon from 'components/Icon';
// import classNames from 'classnames';
import Hidden from '@material-ui/core/Hidden';

import { H5, BODY1, SUBHEADING } from 'constants/typography';

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
// import InputAdornment from '@material-ui/core/InputAdornment';
import DesktopNavigationRow from 'components/Navigation/DesktopNavigationRow';
import MobileNavigationColumn from 'components/Navigation/MobileNavigationColumn';

// import { ShopItems } from 'constants/shop';
// import { AUTHENTICATE } from 'constants/routing';
import { NAVIGATION_LINKS } from 'constants/headerLinkList';
import * as Routes from "../../constants/routing";
import styles from './styles';

@translate()
@injectSheet( styles )
export default class Header extends PureComponent {
  static propTypes = {
    i18n: PropTypes.object,
    t: PropTypes.func,
    makeLogout: PropTypes.func,
    classes: PropTypes.object,
    linkList: PropTypes.array,
  };

  static defaultProps = {
    linkList: NAVIGATION_LINKS,
    makeLogout: () => null
  };

  render() {
    const {
      classes,
      linkList,
    } = this.props;

    const {
      rootHeader,
    } = classes;

    return (
      <div className={rootHeader}>
        {/* DESKTOP */}
        <Hidden smDown>
          <div className={classes.smDown}>
            <div className={classes.logoRow}>
              <Link to={Routes.HOME} className={classes.logoIcon}>
                <Icon icon={ICONS.ZULU_ICON} />
              </Link>
              <div className={classes.actionsWrapper}>
                <div className={classes.searchContainer}>
                  <Icon
                    icon={ICONS.SEARCH_ICON}
                    className={classes.smallIconSearch}/>
                  <TextField
                    placeholder={'Search'}
                    className={classes.searchField}
                    margin="none"
                    InputProps={{
                      disableUnderline: true,
                      classes: {
                        input: classes.placeHolderLabel,
                      }
                    }}/>
                </div>
                <div className={classes.canWrapper}>
                  <div className={classes.canNumberWrapper}>
                    <Typography variant={SUBHEADING}
                      className={classes.canNumberLabel}>
                      {'3'}
                    </Typography>
                  </div>
                  <Icon
                    icon={ICONS.CAN_ICON}
                    className={classes.smallIconCan}/>
                </div>
              </div>
            </div>
            <DesktopNavigationRow headerLinks={linkList}/>
          </div>
        </Hidden>
        {/* MOBILE */}
        <Hidden mdUp>
          <MobileNavigationColumn headerLinks={linkList}/>
        </Hidden>

      </div>
    );
  }
}
