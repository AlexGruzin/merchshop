import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';

import { Link } from 'react-router-dom';
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

import { AUTHENTICATE } from 'constants/routing';
import { HEADLINE } from 'constants/typography';
import { HEADER_LINKS_TYPES } from 'constants/headerLinkList';

import styles from './styles';

@translate()
@injectSheet( styles )
export default class MobileNavigationColumn extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
    headerLinks: PropTypes.array.isRequired,
  };

  constructor( props ) {
    super( props );
    this.state = {
      mobileMenuOpened: false,
    }
  }

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
    } = this.props;

    const {
      mobileMenuOpened,
    } = this.state;

    return (
      <div className={classes.mdUp} >

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
                        component={Link}
                        to={AUTHENTICATE}
                        size="medium"
                        className={classes.swipedButton}>
                        <Typography
                          className={classes.buttonLabel}
                          variant={HEADLINE}>
                          {t( 'SIGN UP / LOG IN' )}
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
              onClick={this.showDrawer}
              className={classes.mobileIconSearch}/>
            <Icon
              icon={ICONS.CAN_ICON}
              className={classes.mobileIconCan}/>
          </div>
        </div>

      </div>
    );
  }
}
