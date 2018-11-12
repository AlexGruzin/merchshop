import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import { Provider } from './provider';
import Filter from 'containers/Filter';
import DropdownSelect from 'components/Forms/DropdownSelect';
import RangeInput from 'components/Forms/RangeInput';
import Collection from 'components/ShopStash/Collection';
import StashItem from 'components/ShopStash/StashItem';
import Pagination from 'components/ShopStash/Pagination';

import ShopPage from 'pages/Shop';

import { ShopItems, PRODUCT_TYPES } from 'constants/shop';

storiesOf( 'Storybook Knobs', module )
  .addDecorator( story => <Provider story={story()}/> )
  .addDecorator( withKnobs )
  .add( 'Dropdown Select', () => {
    return(
      <div style={{ width: '20%', padding: '40px 40px', background: 'lightgray' }}>
        <DropdownSelect value={"variant1"}>{
          [ { name: "variant1" },
            { name: "variant2" }]
        }
        </DropdownSelect>
      </div>
    )
  })
  .add( 'Filter', () => (
    <div style={{ width: '35%' }}>
      <Filter
        handleSubmit={action( "reFilter" )}
      />
    </div>
  ))
  .add( 'Item from StashedCollection', () => {
    return(
      <div style={{ padding: '40px 40px' }}>
        <StashItem
          itemData={{
            cost: number( 'cost', 10099 ),
            label: text( 'label', 'Super Helm' ),
            rate: number( 'rate', 4 ),
            reviews: number( 'reviews', 5 ),
            image: '/img/helmet3.jpg',
          }}
        />
      </div>
    )
  })
  .add( 'StashedCollection', () => (
    <div>
      <Collection
        ItemRenderingComponent={StashItem}
        items={ShopItems}
      />
    </div>
  ))
  .add( 'Pagination', () => {
    const pageCount = number( 'pageCount', 10 );
    const marginPages = number( 'marginPages', 2 );
    const pageRange = number( 'pageRange', 5 );
    return(
      <div style={{ margin: '40px 40px', }}>
        <Pagination
          handlePageClick={action( "pageChange" )}
          pageCount={pageCount}
          marginPages={marginPages}
          pageRange={pageRange}
        />
      </div>
    )
  })
  .add( 'Shop Page', () => (
    <div>
      <ShopPage
        handleFilterSubmit={action( "reFilter" )}
      />
    </div>
  ));

