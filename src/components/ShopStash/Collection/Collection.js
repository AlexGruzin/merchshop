import Hidden from '@material-ui/core/Hidden';

import GrowBox from 'components/ShopStash/GrowBox';
import {
  COLLECTION_VIEW_MODES,
  productTypes,
  VIEW_COMPONENTS,
  VIEW_COLUMNS,
} from 'constants/shop';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import styles from './styles';

@translate()
@injectSheet( styles )
export default class Collection extends PureComponent {

  static propTypes = {
    t: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
    ProductRenderingComponent: PropTypes.func.isRequired,
    viewMode: PropTypes.string.isRequired,
    viewComponent: PropTypes.string.isRequired,
  };

  render() {
    const {
      t,
      items,
      classes,
      ProductRenderingComponent,
      viewMode,
      viewComponent,
    } = this.props;

    const {
      singleItemsWrapper,
      singleItemWrapper,
      multiItemsWrapper,
      multiItemWrapper,
      singleDestinationItem,
      multiDestinationItem,
      singleLikeClass,
      singleSoldClass,
      multiLikeClass,
      multiSoldClass,
    } = classes;

    let itemsContainer;
    let itemContainer;
    let itemViewClass;
    let likeClass;
    let soldClass;

    let columnsPerRow;

    switch( viewMode ) {
      case COLLECTION_VIEW_MODES.SINGLE:
        itemsContainer = singleItemsWrapper;
        itemContainer = singleItemWrapper;
        itemViewClass = singleDestinationItem;
        likeClass = singleLikeClass;
        soldClass = singleSoldClass;

        switch( viewComponent ) {
          case VIEW_COMPONENTS.MOBILE:
            columnsPerRow = VIEW_COLUMNS.MOBILE_SINGLE_VIEW;
            break;

          case VIEW_COMPONENTS.DESKTOP:
            columnsPerRow = VIEW_COLUMNS.DESKTOP_SINGLE_VIEW;
            break;
        }

        break;

      case COLLECTION_VIEW_MODES.MULTI:
        itemsContainer = multiItemsWrapper;
        itemContainer = multiItemWrapper;
        itemViewClass = multiDestinationItem;
        likeClass = multiLikeClass;
        soldClass = multiSoldClass;

        switch( viewComponent ) {
          case VIEW_COMPONENTS.MOBILE:
            columnsPerRow = VIEW_COLUMNS.MOBILE_MULTI_VIEW;
            break;

          case VIEW_COMPONENTS.DESKTOP:
            columnsPerRow = VIEW_COLUMNS.DESKTOP_MULTI_VIEW;
            break;
        }
        break;
    }

    let growBox = <GrowBox />;
    if ( items.length % columnsPerRow === 0  ) {
      growBox = null
    }

    return (
      <div className={classes.root}>

        {/* DESCKTOP 768-*/}
        <Hidden smDown>
          <div className={itemsContainer}>

            {
              items.map(( item, index ) => {
                return (
                  <div
                    className={itemContainer}
                    key={index}>
                    <ProductRenderingComponent
                      itemData={item}
                      itemViewClass={itemViewClass}
                      likeClass={likeClass}
                      soldClass={soldClass}/>
                  </div>
                )
              })
            }
            {growBox}
          </div>
        </Hidden>

        {/*MOBILE 0-768*/}
        <Hidden mdUp>
          <div className={itemsContainer}>
            {
              items.map(( item, index ) => {

                return (
                  <div
                    className={itemContainer}
                    key={index}>
                    <ProductRenderingComponent
                      itemData={item}
                      itemViewClass={itemViewClass}
                      likeClass={likeClass}
                      soldClass={soldClass}/>
                  </div>
                )
              })
            }
            {growBox}
          </div>
        </Hidden>

      </div>
    );
  }
}
