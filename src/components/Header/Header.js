import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import { ICONS } from 'constants/icons';
import Icon from 'components/Icon';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Hidden from '@material-ui/core/Hidden';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

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
      mobileMenuOpened: true,
      subo: false,
    }
  }

  toggleDrawer = ( open ) => () => {
    this.setState({
      mobileMenuOpened: open,
    });
  };

  subRouteOpener = () => {
    this.setState( state => ({ open: !state.open }) );
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
                  <ExpansionPanel
                    classes={{
                      root: classes.expandPanel,
                      expanded: classes.expandPanelExpanded,
                    }}
                    key={index}>
                    <ExpansionPanelSummary
                      classes={{
                        root: classes.rootSummary,
                        content: classes.contentSummary,
                        expanded: classes.summaryExpanded,
                      }}>
                      <Typography
                        variant="headline"
                        className={classes.headline}>
                        {t( linkItem.label )}
                      </Typography>
                    </ExpansionPanelSummary>

                    <ExpansionPanelActions
                      classes={{
                        root: classes.expandedActionsRoot,
                      }}>
                      <div className={classes.expandedActionsWrapper}>
                        { linkItem.subRoutes
                          ?
                          linkItem.subRoutes.map(( subLink, index ) => (
                            <Button
                              key={index}
                              component={Link}
                              to={subLink.route}
                              size='medium'
                              fullWidth
                              color='secondary'
                              className={classes.navigationExpandedButton}
                              classes={{
                                label: classes.expandSubButtonLabel,
                              }}>
                              <Typography variant='body2'>
                                {subLink.label}
                              </Typography>
                            </Button>
                          ))
                          : null
                        }
                      </div>
                    </ExpansionPanelActions>

                  </ExpansionPanel>
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
                open={this.state.mobileMenuOpened}
                onClose={this.toggleDrawer( false )}
                onOpen={this.toggleDrawer( true )}
                swipeAreaWidth={ 20 }>
                <div
                  tabIndex={0}
                  role="button"
                  onKeyDown={this.toggleDrawer( false )}>
                  <div className={classes.swipedList}>
                    <List>

                      <ListItem button>

                          <div className={classes.swipedLogoWrapper}>
                            <Icon icon={ICONS.ZULU_ICON} className={classes.swipedLogo}/>
                          </div>

                      </ListItem>

                      <Divider/>

                      <ListItem button>
                        <Typography className={classes.swipingNavLabel} variant='headline'>
                          {'AKSESOIRES'}
                        </Typography>
                      </ListItem>

                      <Divider/>

                      <ListItem button onClick={this.subRouteOpener} className={classes.listItemWithSubroutes}>
                        <Typography className={classes.swipingNavLabel} variant='headline'>
                          {'SHOP ALL'}
                        </Typography>
                        {this.state.subo ? <ExpandLess /> : <ExpandMore />}
                      </ListItem>
                      <Collapse
                        in={this.state.open}
                        timeout="auto"
                        unmountOnExit
                        classes={{
                          container: classes.mobileSubRouteContainer,
                        }}>
                        <List component="div" disablePadding>
                          <ListItem button>
                            <Typography className={classes.swipingNavSubLabel} variant='headline'>
                              {'Bluetooth'}
                            </Typography>
                          </ListItem>
                        </List>
                      </Collapse>

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

