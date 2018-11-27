import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';

import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import DesktopMenuRoute from 'components/Navigation/DesktopMenuRoute';
import DesktopSubRoutes from 'components/Navigation/DesktopSubRoutes';

import { HEADER_LINKS_TYPES } from 'constants/headerLinkList';

import styles from './styles';

@translate()
@injectSheet( styles )
export default class DesktopNavigationRow extends PureComponent {
  static propTypes = {
    classes: PropTypes.object,
    t: PropTypes.func,
    headerLinks: PropTypes.array.isRequired,
  };

  render() {
    const {
      classes,
      headerLinks,
    } = this.props;

    return (
      <div className={classes.navigationRow}>
        <div className={classes.navRowWrapper}>
          {headerLinks.map(( linkItem, index, items ) => {

            const centralLink = ( items.length / 2 ).toFixed( 0 );

            switch ( linkItem.type ) {
              case HEADER_LINKS_TYPES.COMMON_ROUTE:
                return (
                  <DesktopMenuRoute
                    key={index}
                    label={linkItem.label}
                    route={linkItem.route}/>
                );
              case HEADER_LINKS_TYPES.SUB_ROUTER:
                return (
                  <DesktopSubRoutes
                    modificatorClass={
                      index > centralLink ? classes.leftDroppedSubRoutes : null
                    }
                    key={index}
                    label={linkItem.label}
                    subRoutes={linkItem.subRoutes}/>
                );
              default:
                throw new Error( `Unrecognized link type: ${linkItem.type}` )
            }

          })}
        </div>
      </div>
    );
  }
}
