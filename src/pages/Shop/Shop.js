import Collection from 'components/ShopStash/Collection';
import Pagination from 'components/ShopStash/Pagination';
import StashItem from 'components/ShopStash/StashItem';

import { productTypes, ShopItems } from 'constants/shop';
// components
import Filters from 'containers/Filter';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';

import styles from './styles';

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
              initProductType={ productTypes.ALL }
              handleSubmit={  // Should be 'onSubmit' when store connected
                ( values )=>{handleFilterSubmit}
              }/>
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
