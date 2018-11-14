import React, { PureComponent } from 'react';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// components
import AccountDropDown from 'pages/Account/AccountDropDown';
import Button from '@material-ui/core/Button';
import ExpandMore from '@material-ui/icons/ExpandMore';


import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import { Field } from 'redux-form/immutable';

import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';

import TextInput from 'components/Forms/TextInput';

import { required } from 'helpers/validators/generic';

import styles from './styles';
import { PAYMENT_METHODS } from 'constants/routing';
import { PAYMENT_METHODS_LIST } from 'constants/account';
import { H1, SUBHEADING, HEADLINE, BODY1 } from 'constants/typography';
import { PRODUCT_TYPES, COLLECTION_VIEW_MODES, VIEW_COMPONENTS } from 'constants/shop';
import Icon from 'components/Icon';
import { ICONS } from 'constants/icons';

@translate()
@injectSheet( styles )
export default class AccountDetails extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    initialize: PropTypes.func.isRequired,
    initialValues: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.initialize( this.props.initialValues );
  }

  render() {
    const {
      t,
      classes,
    } = this.props;

    return (
      <div className={classes.root}>

        <div className={classes.headLine}>
          <div
            className={classes.backButton}>
            <ExpandMore
              className={classes.backIcon}
              fontSize='inherit'/>
            <Link
              className={classes.backLink}
              to={ PAYMENT_METHODS }>
              <Typography
                className={classes.backLabel}
                variant={H1}>
                {t('account:Back to Payment Methods')}
              </Typography>
            </Link>
          </div>
        </div>


        <form
          className={classes.detailsRoot}
          //onSubmit={handleSubmit}
        >

          <Typography
            className={classes.title}>
            {t( 'checkout:CREDIT CARD' )}
          </Typography>

          <FormControl className={classes.formControl}>
            <Typography className={classes.heading}>
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
            <Typography className={classes.heading}>
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
              <Typography className={classes.heading}>
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
              <Typography className={classes.heading}>
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
                icon={ICONS.QUESTION}
              />
            </div>
          </div>

        </form>

        <Button
          type="submit"
          //onClick={allowTheNext}
          className={classes.addCardButton}>
          {t( 'account:Save Payment Details' )}
        </Button>

      </div>
    );
  }
}
