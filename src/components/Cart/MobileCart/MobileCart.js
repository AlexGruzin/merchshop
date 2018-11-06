import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import { Field, Fields } from 'redux-form/immutable';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';

import CartItem from 'components/Cart/CartItem';
import { H1, H4, H6, SUBHEADING, CAPTION, SUBTITLE2 } from 'constants/typography';
import styles from './styles';

import { productTypes, productsFilter } from 'constants/shop';
import Icon from 'components/Icon';
import { ICONS } from 'constants/icons';

@translate()
@injectSheet( styles )
export default class MobileCart extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
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
                itemData={item}
              />
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
              { `10% ${t('cart:Discount')}:`}
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
            {`${t('cart:Total')}:`}
          </Typography>

          <Typography
            variant={H1}
            className={classes.totalSum}>
            {'Rp 718,200'}
          </Typography>

          <div className={classes.applyWrapper}>
            <InputBase
              className={classes.applyInput}
              placeholder="Promo code"
            />
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
