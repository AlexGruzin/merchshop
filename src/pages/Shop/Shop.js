import React, { PureComponent } from 'react';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';

// components
import Filters from 'containers/Filter';
import ProductStash from 'containers/ShopStash';

import styles from './styles';

import { productTypes } from 'constants/shop';

@translate()
@injectSheet( styles )
export default class Home extends PureComponent {
  render() {
    const {
      t,
      classes,
    } = this.props;

    return (
      <div className={classes.root}>

        <div className={classes.filterPart}>
          <Filters
            initProductType={ productTypes.ALL }
            onSubmit={
              ( values )=>{}
            }
          />
        </div>

        <div className={classes.itemsPart}>
          <ProductStash/>
        </div>
      </div>
    );
  }
}
