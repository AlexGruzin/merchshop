import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import history from 'store/history';
import classNames from 'classnames';

import BundleStep1 from 'components/Product/BundleStep1';
import BundleStep2 from 'components/Product/BundleStep2';
import BundleStep3 from 'components/Product/BundleStep3';

import { DESCRIPTION, COMPOSE, REVIEWS_AMOUNT, RATE } from 'constants/product';
import { BestSellers as sellers } from 'constants/home';
import { H1, H4, SUBHEADING } from 'constants/typography';
import { CREATE_BUNDLE_STEPS } from 'constants/product';
import styles from './styles';
import Icon from 'components/Icon';
import { ICONS } from 'constants/icons';
import { ShopItems, PRODUCT_TYPES, singleShopItem } from 'constants/shop';


@injectSheet( styles )
export default class ProductPage extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    productData: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  };

  constructor( props ) {
    super( props );

    this.state = {
      currentStep: null,
    }
  }

  customSubmit = ( step ) =>{
    this.setState({ currentStep: step });
  };

  render() {

    const {
      classes,
      productData,
    } = this.props;

    const productImages = singleShopItem.media.filter( item => item.type === 'image' );
    const imagesUrls = [...productImages.map(( item ) => item.url )];

    const bundleStepper = ( step ) => {

      switch ( step ) {
        case CREATE_BUNDLE_STEPS.ITEM_CONFIGURATION:
          return (
            <BundleStep2 productData={singleShopItem}  productImages={imagesUrls} customSubmit={this.customSubmit}/>
          );
        case CREATE_BUNDLE_STEPS.FINAL_INSPECTION:
          return (
            <BundleStep3 productData={singleShopItem} customSubmit={this.customSubmit}/>
          );
        default:
          return(
            <BundleStep1 productData={singleShopItem} productImages={imagesUrls} customSubmit={this.customSubmit}/>
          );
      }
    };

    return (
      <div className={classes.root}>
        {bundleStepper( this.state.currentStep )}
      </div>
    );
  }
}
