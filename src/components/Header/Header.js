import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import { ICONS } from 'constants/icons';
import Icon from 'components/Icon';
import classNames from 'classnames';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';


import DesktopMenuRoute from 'components/Navigation/DesktopMenuRoute';
import MobileMenuRoute from 'components/Navigation/MobileMenuRoute';
import MobileSubRoute from 'components/Navigation/MobileSubRoutes';
import { AUTHENTICATE } from 'constants/routing';
import { HEADER_LINKS_TYPES } from 'constants/headerLinkList';
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
    linkList: [],
  };

  constructor( props ) {
    super( props );
    this.state = {
      mobileMenuOpened: false,
      subRotesShow: false,
    }
  }

  toggleDrawer = ( open ) => () => {
    this.setState({
      mobileMenuOpened: open,
    });
  };

  render() {
    const {
      t,
      classes,
      linkList,
    } = this.props;

    const {
      mobileMenuOpened,
    } = this.state;

    const {
      rootHeader,
    } = classes;

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
                  <Icon
                    icon={ICONS.CAN_ICON}
                    className={classes.smallIconCan}/>
                </div>

              </div>

            </div>

            <div className={classes.navigationRow}>
              <div className={classes.navRowWrapper}>
                {linkList.map(( linkItem, index ) => (

                  <DesktopMenuRoute
                    key={index}
                    label={linkItem.label}
                    route={linkItem.route}
                    subRoutes={linkItem.subRoutes}/>

                ))}
              </div>
            </div>

          </div>

        </Hidden>

        {/* MOBILE */}
        <Hidden mdUp>
          <div className={classes.mdUp} >

            <div className={classes.headerFlexPart}>
              <div className={classes.menuIconWrapper}>
                <Icon
                  icon={ICONS.MENU}
                  onClick={this.toggleDrawer( true )}
                  className={classes.mobileMenuIcon}/>
              </div>
              <SwipeableDrawer
                classes={{
                  paper: classes.swiperWidth,
                }}
                open={mobileMenuOpened}
                onClose={this.toggleDrawer( false )}
                onOpen={this.toggleDrawer( true )}
                swipeAreaWidth={ 20 }>
                <div
                  tabIndex={0}
                  role="button"
                  onKeyDown={this.toggleDrawer( false )}>
                  <div className={classes.swipedList}>
                    <List disablePadding>

                      <ListItem>
                        <div className={classes.swipedLogoWrapper}>
                          <Icon icon={ICONS.ZULU_ICON} className={classes.swipedLogo}/>
                        </div>
                      </ListItem>
                      <Divider/>

                      {linkList.map(( linkItem ) => {

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
                              <MobileSubRoute
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
                            <Typography className={classes.buttonLabel} variant='h5'>
                              {'SIGN UP / LOG IN'}
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
                  onClick={this.toggleDrawer( true )}
                  className={classes.mobileIconSearch}/>
                <Icon
                  icon={ICONS.CAN_ICON}
                  className={classes.mobileIconCan}/>
              </div>
            </div>

          </div>
        </Hidden>

      </div>
    );
  }
}
