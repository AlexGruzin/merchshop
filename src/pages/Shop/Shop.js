import React, { PureComponent } from 'react';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

// components
import Filters from 'containers/Filter';
import Collection from 'components/ShopStash/Collection';
import StashItem from 'components/ShopStash/StashItem';
import Pagination from 'components/ShopStash/Pagination';

import styles from './styles';

import { ShopItems, PRODUCT_TYPES } from 'constants/shop';

@translate()
@injectSheet( styles )
export default class HomePage extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
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

        <div className={classes.shopContainer}>

          <div className={classes.filterPart}>
            <Filters
              initProductType={ PRODUCT_TYPES.ALL }
              handleSubmit={  // Should be 'onSubmit' when store connected
                ( values )=>{handleFilterSubmit}
              }
            />
          </div>

          <div className={classes.itemsPart}>
            <Collection
              items={ShopItems}
              ItemRenderingComponent={StashItem}/>
          </div>
        </div>

        <div className={classes.paginationContainer}>
          <Pagination/>
        </div>

      </div>
    );
  }
}
