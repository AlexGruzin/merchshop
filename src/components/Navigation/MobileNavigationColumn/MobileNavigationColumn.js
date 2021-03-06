import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';

import { Link } from 'react-router-dom';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import { ICONS } from 'constants/icons';
import Icon from 'components/Icon';

import MobileMenuRoute from 'components/Navigation/MobileMenuRoute';
import MobileSubRoutes from 'components/Navigation/MobileSubRoutes';
import StageCollection from 'components/Cart/StageCollection';

import { ShopItems } from 'constants/shop';
import { AUTHENTICATE } from 'constants/routing';
import { BUTTON, SUBTITLE1 } from 'constants/typography';
import { HEADER_LINKS_TYPES } from 'constants/headerLinkList';

import styles from './styles';

@translate()
@injectSheet( styles )
export default class MobileNavigationColumn extends PureComponent {
  static propTypes = {
    classes: PropTypes.object,
    t: PropTypes.func,
    headerLinks: PropTypes.array.isRequired,
    openLogRequestModal: PropTypes.func.isRequired,
    cartProductsAmount: PropTypes.number,
  };

  static defaultProps = {
    cartProductsAmount: 3,
  };

  constructor( props ) {
    super( props );
    this.state = {
      mobileMenuOpened: false,
      mobileCheckoutOpened: false,
      searchMode: false,
    }
  }

  swapMode = () => {
    this.setState({
      searchMode: !this.state.searchMode,
    });
  };

  swapCheckout = () => {
    this.setState({
      mobileCheckoutOpened: !this.state.mobileCheckoutOpened,
    });
  };

  showDrawer = () => {
    this.setState({
      mobileMenuOpened: true,
    });
  };

  hideDrawer = () => {
    this.setState({
      mobileMenuOpened: false,
    });
  };

  render() {
    const {
      t,
      classes,
      headerLinks,
      cartProductsAmount,
      openLogRequestModal,
    } = this.props;

    const {
      mobileHeader,
      mobileHeaderSearch,
      hider,
      searchElementsWrapper,
      searchIconMode,
      searchInputMode,
      closeIconMode,
    } = classes;

    const {
      mobileMenuOpened,
      mobileCheckoutOpened,
      searchMode,
    } = this.state;

    return (
      <div className={classes.mdUp} >

        <div className={classNames( mobileHeader, searchMode ? hider : null )}>

          <div className={classes.headerFlexPart}>
            <div className={classes.menuIconWrapper}>
              <Icon
                icon={ICONS.MENU}
                onClick={this.showDrawer}
                className={classes.mobileMenuIcon}/>
            </div>

            <SwipeableDrawer
              classes={{
                paper: classes.swiperWidth,
              }}
              open={mobileMenuOpened}
              onClose={this.hideDrawer}
              onOpen={this.showDrawer}
              swipeAreaWidth={ 20 }>
              <div
                tabIndex={0}
                role="button"
                onKeyDown={this.hideDrawer}>
                <div className={classes.swipedList}>
                  <List disablePadding>

                    <ListItem>
                      <div className={classes.swipedLogoWrapper}>
                        <Icon icon={ICONS.ZULU_ICON} className={classes.swipedLogo}/>
                      </div>
                    </ListItem>
                    <Divider/>

                    {headerLinks.map(( linkItem ) => {

                      switch ( linkItem.type ) {
                        case HEADER_LINKS_TYPES.COMMON_ROUTE:
                          return (
                            <MobileMenuRoute
                              key={linkItem.label}
                              route={linkItem.route}
                              label={linkItem.label}/>
                          );
                        case HEADER_LINKS_TYPES.SUB_ROUTER:
                          return (
                            <MobileSubRoutes
                              key={linkItem.label}
                              label={linkItem.label}
                              subRoutes={linkItem.subRoutes}/>
                          )
                      }
                    })}

                    <ListItem>
                      <div className={classes.swipedButtonWrapper}>
                        <Button
                          onClick={() => {
                            this.hideDrawer();
                            openLogRequestModal();}}
                          size="medium"
                          className={classes.swipedButton}>
                          <Typography
                            className={classes.buttonLabel}
                            variant={BUTTON}>
                            {t( 'headerLinks:SIGNUPLOGIN' )}
                          </Typography>
                        </Button>
                      </div>
                    </ListItem>

                  </List>
                </div>
              </div>
            </SwipeableDrawer>
          </div>

          <div className={classes.headerFlexPart}>
            <Icon icon={ICONS.ZULU_ICON} className={classes.logoIcon}/>
          </div>

          <div className={classes.headerFlexPart}>
            <div className={classes.leftIconsWrapper}>

              <Icon
                icon={ICONS.SEARCH_ICON}
                onClick={this.swapMode}
                className={classes.mobileIconSearch}/>

              <div onClick={this.swapCheckout} className={classes.interactiveCan}>
                <div className={classes.canNumberWrapper}>
                  <Typography
                    variant={SUBTITLE1}
                    className={classes.canNumberLabel}>
                    {cartProductsAmount}
                  </Typography>
                </div>
                <Icon
                  icon={ICONS.CAN_ICON}

                  className={classes.mobileIconCan}/>
              </div>

              <SwipeableDrawer
                anchor={'right'}
                classes={{
                  paper: classes.checkoutSwiperWidth,
                }}
                open={mobileCheckoutOpened}
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
          </div>
        </div>

        <div className={classNames( mobileHeaderSearch, searchMode ? null : hider )}>

          <div className={searchElementsWrapper}>
            <div className={searchIconMode}>
              <Icon
                icon={ICONS.SEARCH_ICON}
                className={classes.mobileIconSearch}/>
            </div>

            <div className={searchInputMode}>
              {
                searchMode
                  ? <InputBase
                    className={classes.searchInput}
                    autoFocus={searchMode}/>
                  : null
              }
            </div>

            <div className={closeIconMode}>
              <Icon
                icon={ICONS.CROSS_ICON}
                onClick={this.swapMode}
                className={classes.closeIconSvg}/>
            </div>

          </div>

        </div>
      </div>
    );
  }
}
