import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';

import ReviewItem from 'components/Cart/ReviewItem';

import Icon from 'components/Icon';
import { ICONS } from 'constants/icons';
import {
  BODY1,
  BUTTON,
  H2,
  H6,
  SUBTITLE1,
  SUBTITLE2
} from 'constants/typography';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import styles from './styles';

@translate()
@injectSheet( styles )
export default class Review extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    classes: PropTypes.object,
    t: PropTypes.func,

    cartItems: PropTypes.array.isRequired,
  };

  render() {
    const {
      handleSubmit,
      cartItems,
      classes,
      t,
    } = this.props;

    return (
      <div
        className={classes.reviewRoot}>

        <Typography variant={SUBTITLE2}
          className={classNames( classes.title, classes.bagTitle )}>
          {t( 'checkout:BAG' )}
        </Typography>

        <div className={classes.itemsColumn}>
          {
            cartItems.map(( item ) => (
              <ReviewItem
                key={item.id}
                itemData={item}/>
            ))
          }
        </div>

        <div className={classes.infoBlock}>
          <Typography variant={SUBTITLE2}
            className={classes.title}>
            {t( 'checkout:CONTACT' )}
          </Typography>
          <Typography
            variant={H6}
            className={classes.subCategoryLabel}>
            { t( 'cart:Email' )}
          </Typography>

          <Typography
            variant={H6}
            className={classes.subCategoryData}>
            { 'john@email.com' }
          </Typography>

          <Typography
            variant={H6}
            className={classes.subCategoryLabel}>
            { t( 'cart:Phone' )}
          </Typography>

          <Typography
            variant={H6}
            className={classes.subCategoryData}>
            { '+123 1232 3423' }
          </Typography>
        </div>

        <div className={classes.infoBlock}>
          <Typography variant={SUBTITLE2}
            className={classes.title}>
            {t( 'checkout:SHIPPING' )}
          </Typography>
          <Typography
            variant={H6}
            className={classes.subCategoryLabel}>
            { t( 'cart:Name' )}
          </Typography>

          <Typography
            variant={H6}
            className={classes.subCategoryData}>
            { 'John Adams' }
          </Typography>

          <Typography
            variant={H6}
            className={classes.subCategoryLabel}>
            { t( 'cart:Address' )}
          </Typography>

          <Typography
            variant={H6}
            className={classes.subCategoryData}>
            { '5861 Ruecker Motorway, #20-34\n' +
            'Jakarta, Indonesia 46981' }
          </Typography>

          <div className={classes.wrappingRow}>
            <Icon
              className={classes.giftIcon}
              icon={ICONS.GIFT}/>
            <Typography variant={H6}>
              {t( 'checkout:Gift wrapping included' )}
            </Typography>
          </div>
        </div>

        <div className={classes.infoBlock}>
          <Typography variant={SUBTITLE2}
            className={classes.title}>
            {t( 'checkout:PAYMENT' )}
          </Typography>
          <Typography
            variant={H6}
            className={classes.subCategoryLabel}>
            { t( 'cart:Credit Card' )}
          </Typography>

          <Typography
            variant={H6}
            className={classes.subCategoryData}>
            { 'VISA **** **** **** 1234' }
          </Typography>


        </div>

        <div className={classes.totalBlock}>
          <div className={classes.row}>
            <Typography
              variant={H6}
              className={classes.subTotalLabel}>
              { `${t( 'cart:Subtotal' )}:`}
            </Typography>
            <Typography
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
              className={classes.cost}>
              {'-Rp 79,800'}
            </Typography>
          </div>

          <Typography
            variant={SUBTITLE2}
            className={classes.totalLabel}>
            {`${t( 'cart:Total' )}:`}
          </Typography>

          <Typography
            variant={H2}
            className={classes.totalSum}>
            {'Rp 718,200'}
          </Typography>

          <Button
            type="submit"
            className={classes.submitButton}>
            {t( 'checkout:PLACE ORDER' )}
          </Button>
        </div>

      </div>
    );
  }
}
