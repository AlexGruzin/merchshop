import React, { PureComponent } from 'react';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

// components
import Filters from 'components/Filters';
import Collection from 'components/ShopStash/Collection';
import StashedProduct from 'components/ShopStash/StashedProduct';
import Hidden from '@material-ui/core/Hidden';
import Pagination from 'components/ShopStash/Pagination';

import styles from './styles';

import { PRODUCT_TYPES, ShopItems, COLLECTION_VIEW_MODES, VIEW_COMPONENTS } from 'constants/shop';

@translate()
@injectSheet( styles )
export default class ShopPage extends PureComponent {
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
          <div className={classes.shopContainer}>
            <Collection
              items={ShopItems}
              ProductRenderingComponent={StashedProduct}
              viewMode={COLLECTION_VIEW_MODES.SINGLE}
              viewComponent={VIEW_COMPONENTS.DESKTOP}
            />
          </div>

          <div className={classes.paginationContainer}>
            <Pagination
              marginPages={4}
              pageRange={4}/>
          </div>
        </Hidden>

        {/*MOBILE*/}
        <Hidden mdUp>

          <div className={classes.mobileShopContainer}>

            <div className={classes.mobileItemsPart}>
              <Collection
                items={ShopItems}
                ProductRenderingComponent={StashedProduct}
                viewMode={COLLECTION_VIEW_MODES.MULTI}
                viewComponent={VIEW_COMPONENTS.MOBILE}
              />
            </div>
          </div>

          <div className={classes.mobilePaginationContainer}>
            <Pagination
              marginPages={1}
              pageRange={2}/>
          </div>

        </Hidden>

      </div>
    );
  }
}
