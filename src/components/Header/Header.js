import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import { ICONS } from 'constants/icons';
import Icon from 'components/Icon';
import classNames from 'classnames';
import Hidden from '@material-ui/core/Hidden';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import { H5, BODY1 } from 'constants/typography';

import DesktopNavigationRow from 'components/Navigation/DesktopNavigationRow';
import MobileNavigationColumn from 'components/Navigation/MobileNavigationColumn';
import StageCollection from 'components/Cart/StageCollection';

import { ShopItems } from 'constants/shop';
import { AUTHENTICATE } from 'constants/routing';
import { HEADER_LINKS_TYPES, NAVIGATION_LINKS } from 'constants/headerLinkList';
import styles from './styles';

@translate()
@injectSheet( styles )
export default class Header extends PureComponent {
  static propTypes = {
    i18n: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
    makeLogout: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    linkList: PropTypes.array,
  };

  static defaultProps = {
    linkList: NAVIGATION_LINKS,
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
      t,
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

              <Icon icon={ICONS.ZULU_ICON} className={classes.logoIcon}/>

              <div className={classes.iconsWrapper}>
                <div className={classes.headerIcons}>
                  <Icon
                    icon={ICONS.SEARCH_ICON}
                    className={classes.smallIconSearch}/>
                  <Icon onClick={this.swapCheckout}
                    icon={ICONS.CAN_ICON}
                    className={classes.smallIconCan}/>
                </div>

              </div>

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
                  tabIndex={0}
                  role="button">
                  <div className={classes.checkoutRoot}>
                    <StageCollection
                      handleClose={this.swapCheckout}
                      cartItems={[ShopItems[3],ShopItems[4]]}/>
                  </div>
                </div>
              </SwipeableDrawer>

            </div>

            <DesktopNavigationRow
              headerLinks={linkList}/>

          </div>

        </Hidden>

        {/* MOBILE */}
        <Hidden mdUp>
          <MobileNavigationColumn
            headerLinks={linkList}/>
        </Hidden>

      </div>
    );
  }
}
