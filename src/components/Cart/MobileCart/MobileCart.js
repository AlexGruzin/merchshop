import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';

import CartItem from 'components/Cart/CartItem';
import { ICONS } from 'constants/icons';

import { productsFilter, productTypes } from 'constants/shop';
import {
  CAPTION,
  H1,
  H4,
  H6,
  SUBHEADING,
  SUBTITLE2
} from 'constants/typography';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import styles from './styles';

@translate()
@injectSheet( styles )
export default class MobileCart extends PureComponent {
  static propTypes = {
    classes: PropTypes.object,
    t: PropTypes.func,
    cartItems: PropTypes.array.isRequired,
    handleClose: PropTypes.func.isRequired,

  };

  render() {
    const {
      t,
      classes,
      cartItems,
      handleClose,
      allowTheNext,
    } = this.props;

    const {
      root,
    } = classes;


    return (
      <div className={root}>


        <div className={classes.itemsColumn}>
          {
            cartItems.map(( item ) => (
              <CartItem
                key={item.id}
                itemData={item}/>
            ))
          }
        </div>

        <div className={classes.totalWrapper}>

          <div className={classes.row}>
            <Typography
              variant={H6}
              className={classes.subTotalLabel}>
              { `${t( 'cart:Subtotal' )}:`}
            </Typography>
            <Typography
              variant={SUBTITLE2}
              className={classes.cost}>
              {'Rp 798,000'}
            </Typography>
          </div>

          <div className={classes.row}>
            <Typography
              variant={H6}
              className={classes.discountLabel}>
              { `10% ${t( 'cart:Discount' )}:`}
            </Typography>
            <Typography
              variant={SUBTITLE2}
              className={classes.cost}>
              {'-Rp 79,800'}
            </Typography>
          </div>

          <Typography
            variant={H1}
            className={classes.totalLabel}>
            {`${t( 'cart:Total' )}:`}
          </Typography>

          <Typography
            variant={H1}
            className={classes.totalSum}>
            {'Rp 718,200'}
          </Typography>

          <div className={classes.applyWrapper}>
            <InputBase
              className={classes.applyInput}
              placeholder="Promo code"/>
            <Button
              type="submit"
              className={classes.applyButton}>
              {t( 'cart:APPLY' )}
            </Button>
          </div>

          <Button
            type="submit"
            onClick={allowTheNext}
            className={classes.checkoutButton}>
            {t( 'cart:CHECKOUT' )}
          </Button>
        </div>
      </div>
    );
  }
}
