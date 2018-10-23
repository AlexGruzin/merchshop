import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Provider } from './provider';
import Filter from 'containers/Filter';
import DropdownSelect from 'components/Forms/DropdownSelect';
import Collection from 'components/ShopStash/Collection';
import StashItem from 'components/ShopStash/StashItem';
import Pagination from 'components/ShopStash/Pagination';
import MenuItem from '@material-ui/core/MenuItem';

import { ShopItems } from 'constants/shop';

storiesOf( 'Shop', module )
  .addDecorator( story => <Provider story={story()}/> )
  .add( 'Dropdown Select', () => (
    <div style={{ width: '20%' }}>
      <DropdownSelect initialValue={0}>
        <MenuItem value={0}>Variant 1</MenuItem>
        <MenuItem value={1}>Variant 2</MenuItem>
      </DropdownSelect>
    </div>
  ))
  .add( 'Filter with init data', () => (
    <div style={{ width: '35%' }}>
      <Filter
        initProductType={'Bluetooth'}
      />
    </div>
  ))
  .add( 'Filter with no data', () => (
    <div style={{ width: '35%' }}>
      <Filter/>
    </div>
  ))
  .add( 'Item from StashedCollection', () => (
    <div style={{ padding: '40px 40px' }}>
      <StashItem
        itemData={{
          cost: 1049,
          label: 'Super Helm',
          rate: 4,
          reviews: 5,
          image: '/img/helmet3.jpg',
        }}
      />
    </div>
  ))
  .add( 'StashedCollection', () => (
    <div>
      <Collection
        filter={{
          productType: 'All',
          minCost: '1000'
        }}
        items={ShopItems}
      />
    </div>
  ))
  .add( 'Pagination 1', () => (
    <div style={{ margin: '40px 40px', }}>
      <Pagination
        handlePageClick={()=>{}}
        pageCount={10}
        marginPages={2}
        pageRange={5}
      />
    </div>
  ))
  .add( 'Pagination 2', () => (
    <div style={{ margin: '40px 40px', }}>
      <Pagination
        handlePageClick={()=>{}}
        pageCount={5}
        marginPages={3}
        pageRange={2}
      />
    </div>
  ));

