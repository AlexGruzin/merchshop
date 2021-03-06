import React, { PureComponent } from 'react';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

// components
import AccountDropDown from 'pages/Account/AccountDropDown';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import { ACCOUNT } from 'constants/routing';
import { RECENT_ORDERS } from 'constants/account';
import { H6, SUBTITLE2, BUTTON } from 'constants/typography';
import styles from './styles';
import { PRODUCT_TYPES, ShopItems, COLLECTION_VIEW_MODES, VIEW_COMPONENTS } from 'constants/shop';

@translate()
@injectSheet( styles )
export default class RecentOrders extends PureComponent {
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
      <div className={classes.root}>

        <AccountDropDown
          currentLabel={'account:Recent Orders'}
        />

        <div className={classes.listContainer}>
          {
            RECENT_ORDERS.map(( orderData )=>{

              return (
                <div key={orderData.name}
                  className={classes.ordersItemWrapper}>

                  <div className={classes.infoColumn}>

                    <Link
                      className={classes.link}
                      to={orderData.link}>
                      <Typography
                        className={classes.orderLabel}
                        variant={SUBTITLE2}>
                        {`ORDER # ${orderData.id}`}
                      </Typography>
                    </Link>

                    <Typography
                      className={classes.dateLabel}
                      variant={BUTTON}>
                      {`Placed on ${orderData.date}`}
                    </Typography>

                    <Typography
                      className={classes.statusLabel}
                      variant={H6}
                      >
                      {orderData.status}
                    </Typography>

                  </div>

                  <div className={classes.imagesWrapper}>
                    {
                      orderData.images.map(( image )=>(
                        <div key={image}
                          className={classes.imageWrapper}>
                          <div
                            className={classes.image}
                            style={{
                              backgroundImage: `url('${image}')`
                            }}/>
                        </div>
                      ))
                    }

                  </div>

                </div>
              )
            })
          }
        </div>

      </div>
    );
  }
}
