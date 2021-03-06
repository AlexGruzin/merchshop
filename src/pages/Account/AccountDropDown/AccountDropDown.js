import React, { PureComponent } from 'react';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

// components
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';

import styles from './styles';
import { ACCOUNT_DROPPING_ROUTES } from 'constants/account';
import { H4, BUTTON } from 'constants/typography';
import { PRODUCT_TYPES, ShopItems, COLLECTION_VIEW_MODES, VIEW_COMPONENTS } from 'constants/shop';
import Icon from 'components/Icon';
import { ICONS } from 'constants/icons';

@translate()
@injectSheet( styles )
export default class AccountDropDown extends PureComponent {
  static propTypes = {
    t: PropTypes.func,
    classes: PropTypes.object,
    currentRoute: PropTypes.string.isRequired,
    currentLabel: PropTypes.string.isRequired,
  };

  render() {
    const {
      t,
      classes,
      currentLabel,
    } = this.props;

    const {
      active,
    } = classes;

    return (
      <div className={classes.root}>

        {/* DESKTOP */}
        <Hidden smDown>
          <div className={classes.smDown}>

            <div className={classes.welcomeContainer}>
              <Typography variant={H4}
                className={classes.welcomeLabel}>
                {'Welcome back,\n John'}
              </Typography>
            </div>

            <div className={classes.columnContainer}>
              {ACCOUNT_DROPPING_ROUTES.map(( route, index ) => {
                let activeClass = currentLabel === route.name ? active : null;

                return(
                  <div
                    key={route.route}
                    className={classNames( classes.deskButtonWrapper, activeClass )}>
                    <Link
                      className={classes.deskSubButton}
                      to={route.route}>
                      <Typography
                        className={classes.deskButtonLabel}
                        variant={BUTTON}>
                        {t( route.name )}
                      </Typography>
                    </Link>
                  </div>
                );
              })}
            </div>

          </div>
        </Hidden>

        {/* MOBILE */}
        <Hidden mdUp>
          <div className={classes.mdUp}>

            <div className={classes.dropButtonContainer}>
              <div className={classes.SubButton}>
                <Typography
                  className={classes.ButtonLabel}
                  variant={BUTTON}>
                  {t( currentLabel )}
                </Typography>

                <Icon className={classes.dropIcon} icon={ICONS.EXPAND_DOWN}/>
              </div>

              <div className={classes.ExpandedSubRoutesContainer}>
                <div className={classes.ExpandedSubRoutes}>
                  {ACCOUNT_DROPPING_ROUTES.map(( subRoute, index ) => {
                    return(
                      <Link
                        key={subRoute.route}
                        className={classes.SubButton}
                        to={subRoute.route}>
                        <Typography
                          className={classes.SubButtonLabel}
                          variant={BUTTON}>
                          {t( subRoute.name )}
                        </Typography>
                      </Link>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </Hidden>

      </div>
    );
  }
}
