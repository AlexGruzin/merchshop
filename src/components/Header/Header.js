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

import { HEADLINE, BODY1 } from 'constants/typography';
import styles from './styles';
import Images from 'theme/images';

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
    }
  }

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

        <Hidden smDown>
          <div className={classes.smDown}>

            <div className={classes.logoRow}>

              <Icon icon={ICONS.ZULU_ICON} className={classes.logoIcon}/>

              <div className={classes.iconsWrapper}>
                <div className={classes.headerIcons}>
                  <img
                    src={Images.search1x}
                    alt=''
                    srcSet={`${Images.search2x} 2x,${Images.search3x} 3x`}
                    className={classes.smallIconSearch}/>

                  <img
                    src={Images.can1x}
                    alt=''
                    srcSet={`${Images.can2x} 2x,${Images.can3x} 3x`}
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
                        variant={HEADLINE}
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
                              <Typography variant={BODY1}>
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
      </div>
    );
  }
}

