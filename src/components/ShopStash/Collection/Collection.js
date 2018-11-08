import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import styles from './styles';

import Images from 'theme/images';
import { productTypes, COLLECTION_VIEW_MODES } from 'constants/shop';
import Hidden from '@material-ui/core/Hidden';

@translate()
@injectSheet( styles )
export default class Collection extends PureComponent {

  static propTypes = {
    t: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
    ProductRenderingComponent: PropTypes.func.isRequired,
    viewMode: PropTypes.string.isRequired,
  };

  render() {
    const {
      t,
      items,
      classes,
      ProductRenderingComponent,
      viewMode,
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

    switch( viewMode ) {
      case COLLECTION_VIEW_MODES.SINGLE:
        itemsContainer = singleItemsWrapper;
        itemContainer = singleItemWrapper;
        itemViewClass = singleDestinationItem;
        likeClass = singleLikeClass;
        soldClass = singleSoldClass;
        break;

      case COLLECTION_VIEW_MODES.MULTI:
        itemsContainer = multiItemsWrapper;
        itemContainer = multiItemWrapper;
        itemViewClass = multiDestinationItem;
        likeClass = multiLikeClass;
        soldClass = multiSoldClass;
        break;
    }

    return (
      <div className={classes.root}>

        {/* DESCKTOP */}
        <Hidden smDown>
          <div className={itemsContainer}>
            {
              items.map(( item, index ) => {
                return (
                  <div
                    className={itemContainer} // W
                    key={index}
                  >
                    <ProductRenderingComponent
                      itemData={item}
                      itemViewClass={itemViewClass}
                      likeClass={likeClass}
                      soldClass={soldClass}
                    />
                  </div>
                )
              })
            }
          </div>
        </Hidden>

        {/*MOBILE*/}
        <Hidden mdUp>
          <div className={itemsContainer}>
            {
              items.map(( item, index ) => {
                return (
                  <div
                    className={itemContainer}
                    key={index}
                  >
                    <ProductRenderingComponent
                      itemData={item}
                      itemViewClass={itemViewClass}
                      likeClass={likeClass}
                      soldClass={soldClass}
                    />
                  </div>
                )
              })
            }
          </div>
        </Hidden>

      </div>
    );
  }
}
