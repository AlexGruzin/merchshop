import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import { ICONS } from 'constants/icons';
import Icon from 'components/Icon';
import classNames from 'classnames';
import Hidden from '@material-ui/core/Hidden';

import { H5, BODY1 } from 'constants/typography';

import DesktopNavigationRow from 'components/Navigation/DesktopNavigationRow';
import MobileNavigationColumn from 'components/Navigation/MobileNavigationColumn';

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
