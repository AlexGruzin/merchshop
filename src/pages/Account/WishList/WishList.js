import React, { PureComponent } from 'react';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// components
import AccountDropDown from 'pages/Account/AccountDropDown';

import Collection from 'components/ShopStash/Collection';
import StashedProduct from 'components/ShopStash/StashedProduct';
import Hidden from '@material-ui/core/Hidden';

import styles from './styles';

import { PRODUCT_TYPES, COLLECTION_VIEW_MODES, VIEW_COMPONENTS } from 'constants/shop';
import { WISH_LIST } from 'constants/account';

@translate()
@injectSheet( styles )
export default class WishList extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
  };

  render() {
    const {
      t,
      classes,
    } = this.props;

    return (
      <div className={classes.root}>

        {/* DESCKTOP */}
        <Hidden smDown>

          <AccountDropDown
            currentLabel={'account:Wish List'}
          />

          <div className={classes.wishContainer}>
            <Collection
              items={WISH_LIST}
              ProductRenderingComponent={StashedProduct}
              viewMode={COLLECTION_VIEW_MODES.MULTI}
              viewComponent={VIEW_COMPONENTS.DESKTOP}
            />
          </div>

        </Hidden>

        {/*MOBILE*/}
        <Hidden mdUp>

          <div className={classes.mobileWishContainer}>

            <AccountDropDown
              currentLabel={'account:WishList'}
            />

            <div className={classes.mobileItemsPart}>
              <Collection
                items={WISH_LIST}
                ProductRenderingComponent={StashedProduct}
                viewMode={COLLECTION_VIEW_MODES.MULTI}
                viewComponent={VIEW_COMPONENTS.MOBILE}
              />
            </div>
          </div>

        </Hidden>

      </div>
    );
  }
}
