import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import injectSheet from 'react-jss';
import { translate } from 'react-i18next';
import styles from './styles';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';

import Card from '@material-ui/icons/CreditCard';
import Pal from '@material-ui/icons/LocalParking';
import Help from '@material-ui/icons/Help';

import TextInput from 'components/Forms/TextInput';
import Button from '@material-ui/core/Button';

import { BODY1, BUTTON, SUBHEADING } from 'constants/typography';

@translate()
@injectSheet( styles )
export default class ShippingForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
  };

  render() {
    const {
      allowTheNext,
      handleSubmit,
      classes,
      t } = this.props;

    return (
      <form
        className={classes.shippingRoot}
        //onSubmit={handleSubmit}
        onSubmit={allowTheNext}
      >

        <Typography
          className={classes.title}>
          {t( 'checkout:SELECT A PAYMENT OPTION' )}
        </Typography>

        <div className={classNames( classes.chooseWrapper, classes.enabled )}>
          <Card color='inherit' fontSize='inherit'/>
          <Typography className={classes.chooseLabel}>
            {t( 'cart:CREDIT CARD' )}
          </Typography>
        </div>

        <div className={classes.chooseWrapper}>
          <Pal color='inherit' fontSize='inherit'/>
          <Typography className={classes.chooseLabel}>
            {t( 'cart:PAYPAL' )}
          </Typography>
        </div>

        <Typography
          className={classes.title}>
          {t( 'checkout:CREDIT CARD' )}
        </Typography>

        <FormControl className={classes.formControl}>
          <Typography className={classes.heading}>
            {t( 'checkout:Credit Card Number' )}
          </Typography>
          <Field
            name="CardNumber"
            disableUnderline
            className={classes.field}
            inputClassName={classes.input}
            component={TextInput}/>
        </FormControl>
        <FormControl className={classes.formControl}>
          <Typography className={classes.heading}>
            {t( 'checkout:Card Holder Name' )}
          </Typography>
          <Field
            name="CardHolderName"
            disableUnderline
            className={classes.field}
            inputClassName={classes.input}
            component={TextInput}/>
        </FormControl>

        <div className={classes.row}>

          <FormControl className={classes.formControlDate}>
            <Typography className={classes.heading}>
              {t( 'checkout:Expiry Date (MM/YY)' )}
            </Typography>
            <Field
              name="ExpiryDate"
              disableUnderline
              className={classes.field}
              inputClassName={classes.input}
              component={TextInput}/>
          </FormControl>

          <FormControl className={classes.formControlCCV}>
            <Typography className={classes.heading}>
              {t( 'checkout:CCV' )}
            </Typography>
            <Field
              name="ccv"
              disableUnderline
              className={classes.field}
              inputClassName={classes.input}
              component={TextInput}/>
          </FormControl>

          <div className={classes.formIcon}>
            <Help fontSize='inherit'/>
          </div>
        </div>

        <Button
          type="submit"
          className={classes.submitButton}>
          {t( 'checkout:Next' )}
        </Button>

      </form>
    );
  }
}
