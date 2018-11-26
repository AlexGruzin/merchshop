import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import { ICONS } from 'constants/icons';
import Icon from 'components/Icon';
// import classNames from 'classnames';
import Hidden from '@material-ui/core/Hidden';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import { H5, BODY1 } from 'constants/typography';

import TextField from '@material-ui/core/TextField';
import StageCollection from 'components/Cart/StageCollection';
import Typography from '@material-ui/core/Typography';
import DesktopNavigationRow from 'components/Navigation/DesktopNavigationRow';
import MobileNavigationColumn from 'components/Navigation/MobileNavigationColumn';
import Link from 'components/Link';

import { ShopItems } from 'constants/shop';
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
    makeLogout: () => null,
  };

  constructor( props ) {
    super( props );

    this.state = {
      CheckoutOpened: false,
    }
  }

  swapCheckout = () => {
    this.setState({
      CheckoutOpened: !this.state.CheckoutOpened,
    });
  };

  render() {
    const {
      classes,
      linkList,
    } = this.props;

    const {
      rootHeader,
    } = classes;

    const {
      CheckoutOpened,
    } = this.state;

    return (
      <div className={rootHeader}>

        {/* DESCKTOP */}
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
                    }}
                  />
                </div>

                <div className={classes.canWrapper}>
                  <div onClick={this.swapCheckout}
                    className={classes.canNumberWrapper}>
                    <Typography
                      variant={BODY1}
                      className={classes.canNumberLabel}>
                      {'3'}
                    </Typography>
                  </div>

                  <Icon onClick={this.swapCheckout}
                    icon={ICONS.CAN_ICON}
                    className={classes.smallIconCan}/>

                  <SwipeableDrawer
                    anchor={'right'}
                    classes={{
                      paper: classes.checkoutSwiperWidth,
                    }}
                    open={CheckoutOpened}
                    onClose={this.swapCheckout}
                    onOpen={this.swapCheckout}
                    swipeAreaWidth={ 20 }>
                    <div
                      className={classes.swipeContainer}
                      tabIndex={0}
                      role="button"
                    >
                      <StageCollection
                        handleClose={this.swapCheckout}
                        cartItems={[ShopItems[3],ShopItems[4]]}/>
                    </div>
                  </SwipeableDrawer>


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
