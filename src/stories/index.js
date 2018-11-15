import { action } from '@storybook/addon-actions';
import { number, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import DropdownSelect from 'components/Forms/DropdownSelect';
import Collection from 'components/ShopStash/Collection';
import Pagination from 'components/ShopStash/Pagination';
import StashItem from 'components/ShopStash/StashedProduct';

import { productTypes, ShopItems } from 'constants/shop';
import Filter from 'containers/Filter';

import ShopPage from 'pages/ShopPage';
import React from 'react';

import { Provider } from './provider';

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
        handleSubmit={action( "reFilter" )}/>
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
          }}/>
      </div>
    )
  })
  .add( 'StashedCollection', () => (
    <div>
      <Collection
        ItemRenderingComponent={StashItem}
        items={ShopItems}/>
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
          pageRange={pageRange}/>
      </div>
    )
  })
  .add( 'ShopPage Page', () => (
    <div>
      <ShopPage
        handleFilterSubmit={action( "reFilter" )}/>
    </div>
  ));

