import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';

import TextInput from 'components/Forms/TextInput';

import Icon from 'components/Icon';
import { ICONS } from 'constants/icons';
import { H6, BUTTON, SUBTITLE2 } from 'constants/typography';
import { required } from 'helpers/validators/generic';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import { Field } from 'redux-form/immutable';
import styles from './styles';

@translate()
@injectSheet( styles )
export default class ShippingForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    classes: PropTypes.object,
    t: PropTypes.func,
  };

  render() {
    const {
      allowTheNext,
      handleSubmit,
      submitting,
      invalid,
      pristine,
      classes,
      t
    } = this.props;

    return (
      <form
        className={classes.shippingRoot}
        onSubmit={handleSubmit}>

        <Typography
          className={classes.title}
          variant={SUBTITLE2}>
          {t( 'checkout:SELECT A PAYMENT OPTION' )}
        </Typography>

        <div className={classNames( classes.chooseWrapper, classes.enabled )}>
          <Icon
            className={classes.variantIcon}
            icon={ICONS.CARD}/>
          <Typography className={classNames( classes.enabled )}>
            {t( 'cart:CREDIT CARD' )}
          </Typography>
        </div>

        <div className={classes.chooseWrapper}>
          <Icon
            className={classes.variantIcon}
            icon={ICONS.PAY_PAL}/>
          <Typography className={classes.chooseLabel}>
            {t( 'cart:PAYPAL' )}
          </Typography>
        </div>

        <Typography
          variant={SUBTITLE2}
          className={classes.title}>
          {t( 'checkout:CREDIT CARD' )}
        </Typography>

        <FormControl className={classes.formControl}>
          <Typography variant={H6}
            className={classes.heading}>
            {t( 'checkout:Credit Card Number' )}
          </Typography>
          <Field
            validate={[required]}
            name="CardNumber"
            disableUnderline
            className={classes.field}
            inputClassName={classes.input}
            component={TextInput}/>
        </FormControl>
        <FormControl className={classes.formControl}>
          <Typography variant={H6}
            className={classes.heading}>
            {t( 'checkout:Card Holder Name' )}
          </Typography>
          <Field
            validate={[required]}
            name="CardHolderName"
            disableUnderline
            className={classes.field}
            inputClassName={classes.input}
            component={TextInput}/>
        </FormControl>

        <div className={classes.row}>

          <FormControl className={classes.formControlDate}>
            <Typography variant={H6}
              className={classes.heading}>
              {t( 'checkout:Expiry Date (MM/YY)' )}
            </Typography>
            <Field
              validate={[required]}
              name="ExpiryDate"
              disableUnderline
              className={classes.field}
              inputClassName={classes.input}
              component={TextInput}/>
          </FormControl>

          <FormControl className={classes.formControlCCV}>
            <Typography variant={H6}
              className={classes.heading}>
              {t( 'checkout:CCV' )}
            </Typography>
            <Field
              validate={[required]}
              name="ccv"
              disableUnderline
              className={classes.field}
              inputClassName={classes.input}
              component={TextInput}/>
          </FormControl>

          <div className={classes.formIcon}>
            <Icon
              className={classes.questionIcon}
              icon={ICONS.QUESTION}/>
          </div>
        </div>

        <Button
          type="submit"
          onClick={()=>{setTimeout( allowTheNext, 3000 )}}
          disabled={invalid|| submitting || pristine}
          className={classes.submitButton}>
          {t( 'checkout:Next' )}
        </Button>

      </form>
    );
  }
}
