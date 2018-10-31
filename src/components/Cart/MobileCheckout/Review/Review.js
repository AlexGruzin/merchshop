import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import injectSheet from 'react-jss';
import { translate } from 'react-i18next';
import styles from './styles';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';

import ReviewItem from 'components/Cart/ReviewItem';

import Button from '@material-ui/core/Button';

import { BODY1, BUTTON, SUBHEADING, H6, SUBTITLE2, H1 } from 'constants/typography';

@translate()
@injectSheet( styles )
export default class Review extends PureComponent {
  static propTypes = {
    //handleSubmit: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,

    cartItems: PropTypes.array.isRequired,
  };

  render() {
    const {
      //handleSubmit,
      cartItems,
      classes,
      t } = this.props;

    return (
      <div
        className={classes.reviewRoot}
      >

        <Typography
          className={classNames(classes.title, classes.bagTitle)}>
          {t( 'checkout:BAG' )}
        </Typography>

        <div className={classes.itemsColumn}>
          {
            cartItems.map(( item ) => (
              <ReviewItem
                key={item.id}
                itemData={item}
              />
            ))
          }
        </div>

        <div className={classes.infoBlock}>
          <Typography
            className={classes.title}>
            {t( 'checkout:CONTACT' )}
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
