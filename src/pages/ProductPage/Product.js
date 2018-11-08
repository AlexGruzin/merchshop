import React, { PureComponent } from 'react';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import ProductSlider from 'components/ProductSlider';

import { H1 } from 'constants/typography';
import Images from 'theme/images';
import styles from './styles';

import { ShopItems, productTypes } from 'constants/shop';

@translate()
@injectSheet( styles )
export default class ProductPage extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    productData: PropTypes.object.isRequired,
  };

  render() {
    const {
      t,
      classes,
      productData,
    } = this.props;

    const {
      root,
    } = classes;

    const {
      images,
      label,
      description,
    } = ShopItems[0]; // productData

    return (
      <div className={root}>

        <ProductSlider
          images={images}/>

        <Typography
          variant={H1}
          className={classes.totalLabel}>
          {`${t('cart:Total')}:`}
        </Typography>

        <Typography
          variant={H1}
          className={classes.totalSum}>
          {'Rp 718,200'}
        </Typography>

        <Button
          type="submit"
          onClick={()=>{}}
          className={classes.checkoutButton}>
          {t( 'cart:CHECKOUT' )}
        </Button>

      </div>
    );
  }
}
