import React, { PureComponent } from 'react';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// components
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';


import ReviewItem from 'components/Cart/ReviewItem';
import AccountDropDown from 'pages/Account/AccountDropDown';

import { RECENT_ORDERS } from 'constants/account';
import { ACCOUNT } from 'constants/routing';
import { H4, H5, H6, SUBTITLE2, BUTTON, H2 } from 'constants/typography';
import styles from './styles';
import { PRODUCT_TYPES, ShopItems, COLLECTION_VIEW_MODES, VIEW_COMPONENTS } from 'constants/shop';
import Icon from 'components/Icon';
import { ICONS } from 'constants/icons';

const orderItems = [ShopItems[2], ShopItems[4]];
const orderData = RECENT_ORDERS[1];

@translate()
@injectSheet( styles )
export default class OrderInfo extends PureComponent {
  static propTypes = {
    t: PropTypes.func,
    classes: PropTypes.object,
  };

  render() {
    const {
      t,
      classes,
    } = this.props;

    return (
      <div
        className={classes.orderRoot}>

        <Hidden xsDown>
          <AccountDropDown
            currentLabel={'account:Recent Orders'}
          />
        </Hidden>

        <div className={classes.listContainer}>

          <div className={classes.headLine}>
            <div
              className={classes.backButton}>
              <Icon icon={ICONS.EXPAND_DOWN}/>
              <Link
                className={classes.backLink}
                to={ ACCOUNT }>
                <Typography
                  className={classes.backLabel}>
                  {t('account:Back to Recent Orders')}
                </Typography>
              </Link>
            </div>
          </div>

          <div className={classes.trackBlock}>

            <Typography
              className={classes.orderLabel}
              variant={H4}>
              {`ORDER # ${orderData.id}`}
            </Typography>

            <Typography
              className={classes.dateLabel}
              variant={H5}>
              {`Placed on ${orderData.date}`}
            </Typography>

            <div className={classes.trackRow}>
              <Typography
                className={classes.statusLabel}
                variant={H6}>
                {`Status: ${orderData.status}`}
              </Typography>

              <Link
                className={classes.trackLink}
                to={orderData.link}>
                <Typography
                  className={classes.trackLabel}
                  variant={BUTTON}>
                  {t('account:View Tracking')}
                </Typography>
              </Link>
            </div>
          </div>

          <Typography variant={SUBTITLE2}
            className={classNames( classes.title, classes.bagTitle )}>
            {t( 'checkout:Items' )}
          </Typography>

          <div className={classes.itemsColumn}>
            {
              orderItems.map(( item ) => (
                <ReviewItem
                  key={item.id}
                  itemData={item}
                />
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
                icon={ICONS.GIFT}
              />
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

            <Typography variant={SUBTITLE2}
              className={classes.totalLabel}>
              {`${t( 'cart:Total' )}:`}
            </Typography>

            <Typography
              variant={H2}
              className={classes.totalSum}>
              {'Rp 718,200'}
            </Typography>
          </div>
        </div>

      </div>
    );
  }
}
