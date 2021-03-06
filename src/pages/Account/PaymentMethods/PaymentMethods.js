import React, { PureComponent } from 'react';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// components
import AccountDropDown from 'pages/Account/AccountDropDown';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import styles from './styles';
import { ADD_CARD } from 'constants/routing';
import { PAYMENT_METHODS_LIST } from 'constants/account';
import { H6, SUBTITLE1, BUTTON, SECONDARY } from 'constants/typography';
import { PRODUCT_TYPES, COLLECTION_VIEW_MODES, VIEW_COMPONENTS } from 'constants/shop';
import Icon from 'components/Icon';
import { ICONS } from 'constants/icons';

@translate()
@injectSheet( styles )
export default class PaymentMethods extends PureComponent {
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
          currentLabel={'account:Payment Methods'}
        />

        <div className={classes.listContainer}>

          {
            PAYMENT_METHODS_LIST.map(( method )=>{

              return (
                <div
                  key={method.lastNumbers}
                  className={classes.paymentItemWrapper}>

                  <div className={classes.infoColumn}>

                    <Typography
                      className={classes.typeLabel}
                      variant={H6}>
                      {method.type}
                    </Typography>

                    <Typography
                      className={classes.cardLabel}
                      variant={BUTTON}>
                      {`${method.card} **** **** **** ${method.lastNumbers}`}
                    </Typography>

                  </div>

                  <div className={classes.trashWrapper}>
                    <Icon
                      className={classes.trashIcon}
                      icon={ICONS.TRASH}
                    />
                  </div>

                </div>
              )
            })
          }

          <Button color={SECONDARY}
            component={Link}
            to={ADD_CARD}
            className={classes.addCardButton}>
            {t( 'account:Add New Card' )}
          </Button>

        </div>
      </div>
    );
  }
}
