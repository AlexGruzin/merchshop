import React, { PureComponent } from 'react';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form/immutable';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form/immutable';
import classNames from 'classnames';

// components
import AccountDropDown from 'pages/Account/AccountDropDown';
import Button from '@material-ui/core/Button';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Hidden from '@material-ui/core/Hidden';
import DoneIcon from '@material-ui/icons/CheckCircleOutline';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';

import TextInput from 'components/Forms/TextInput';

import { required } from 'helpers/validators/generic';

import styles from './styles';
import { PAYMENT_METHODS } from 'constants/routing';
import { PAYMENT_METHODS_LIST } from 'constants/account';
import { H1, SUBHEADING, HEADLINE, BODY1 } from 'constants/typography';
import { PRODUCT_TYPES, COLLECTION_VIEW_MODES, VIEW_COMPONENTS } from 'constants/shop';
import Icon from 'components/Icon';
import { ICONS } from 'constants/icons';

@reduxForm({
  form: 'AddNewCard',
  })
@translate()
@injectSheet( styles )
export default class AddNewCard extends PureComponent {
  static propTypes = {
    t: PropTypes.func,
    classes: PropTypes.object,
    handleSubmit: PropTypes.func.isRequired,
    initialize: PropTypes.func.isRequired,
    initialValues: PropTypes.object.isRequired,
    dataStatus: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    this.props.initialize( this.props.initialValues );
  }

  render() {
    const {
      t,
      classes,
      handleSubmit,
      dataStatus,
    } = this.props;

    return (
      <div className={classes.root}>

        <Hidden xsDown>
          <AccountDropDown
            currentLabel={'account:Payment Methods'}
          />
        </Hidden>

        <div className={classes.listContainer}>

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
                  {t( 'account:Back to Payment Methods' )}
                </Typography>
              </Link>
            </div>
          </div>


          <form
            className={classes.detailsRoot}
            onSubmit={handleSubmit}
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

            {
              dataStatus
                ? <Button
                  className={classes.savedButton}>
                  <DoneIcon className={classes.savedIcon} />
                  {t( 'account:SAVED!' )}
                </Button>
                : <Button
                  type="submit"
                  className={classes.addCardButton}>
                  {t( 'account:Save Payment Details' )}
                </Button>
            }


          </form>

        </div>

      </div>
    );
  }
}
