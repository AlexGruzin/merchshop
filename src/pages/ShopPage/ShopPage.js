import Hidden from '@material-ui/core/Hidden';
// components
import ShopFilter from 'components/Filters/ShopFilter';
import Collection from 'components/ShopStash/Collection';
import Pagination from 'components/ShopStash/Pagination';
import StashedProduct from 'components/ShopStash/StashedProduct';

import {
  COLLECTION_VIEW_MODES,
  PRODUCT_TYPES,
  ShopItems,
  VIEW_COMPONENTS
} from 'constants/shop';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';

import styles from './styles';

@translate()
@injectSheet( styles )
export default class ShopPage extends PureComponent {
  static propTypes = {
    t: PropTypes.func,
    classes: PropTypes.object,
    handleFilterSubmit: PropTypes.func.isRequired,
  };

  render() {
    const {
      t,
      classes,
      handleFilterSubmit,
    } = this.props;

    return (
      <div className={classes.root}>

        {/* DESKTOP */}
        <Hidden smDown>
          <div className={classes.shopContainer}>

            <ShopFilter
              initProductType={ PRODUCT_TYPES.ALL }
              handleSubmit={  // Should be 'onSubmit' when store connected
                ( values )=>{handleFilterSubmit}
              }
              viewMode={COLLECTION_VIEW_MODES.SINGLE}
            />

            <Collection
              items={ShopItems}
              ProductRenderingComponent={StashedProduct}
              viewMode={COLLECTION_VIEW_MODES.SINGLE}
              viewComponent={VIEW_COMPONENTS.DESKTOP}/>
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

            <div className={classes.filterPart}>
              <ShopFilter
                initProductType={ PRODUCT_TYPES.ALL }
                handleSubmit={  // Should be 'onSubmit' when store connected
                  ( values )=>{handleFilterSubmit}
                }
                viewMode={COLLECTION_VIEW_MODES.MULTI}
              />
            </div>

            <div className={classes.mobileItemsPart}>
              <Collection
                items={ShopItems}
                ProductRenderingComponent={StashedProduct}
                viewMode={COLLECTION_VIEW_MODES.MULTI}
                viewComponent={VIEW_COMPONENTS.MOBILE}/>
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
