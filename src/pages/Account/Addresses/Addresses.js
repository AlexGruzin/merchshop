import React, { PureComponent } from 'react';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import classNames from 'classnames';

// components
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';

import CheckBox from 'components/Forms/CheckBox';
import TextInput from 'components/Forms/TextInput';
import { required } from 'helpers/validators/generic';
import AccountDropDown from 'pages/Account/AccountDropDown';


import styles from './styles';
import { PAYMENT_METHODS_LIST } from 'constants/account';
import { H1, SUBHEADING, HEADLINE, BODY1 } from 'constants/typography';
import { PRODUCT_TYPES, COLLECTION_VIEW_MODES, VIEW_COMPONENTS } from 'constants/shop';
import Icon from 'components/Icon';
import { ICONS } from 'constants/icons';

@translate()
@injectSheet( styles )
export default class Addresses extends PureComponent {
  static propTypes = {
    t: PropTypes.func,
    classes: PropTypes.object,
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

        <AccountDropDown
          currentLabel={'account:Addresses'}
        />

        <div className={classes.listContainer}>

          <form
            className={classes.detailsRoot}
            //onSubmit={handleSubmit}
          >

            <Typography
              className={classes.title}>
              {t( 'checkout:Shipping' )}
            </Typography>

            <FormControl className={classes.formControl}>
              <Typography className={classes.heading}>
                {t( 'checkout:Address' )}
              </Typography>
              <Field
                validate={[required]}
                name="address"
                disableUnderline
                className={classes.field}
                inputClassName={classes.input}
                component={TextInput}/>
            </FormControl>

            <FormControl className={classes.formControl}>
              <Typography className={classes.heading}>
                {t( 'checkout:Apt/Floor/Suite' )}
              </Typography>
              <Field
                validate={[required]}
                name="AptFloorSuite"
                disableUnderline
                className={classes.field}
                inputClassName={classes.input}
                component={TextInput}/>
            </FormControl>

            <FormControl className={classes.formControl}>
              <Typography className={classes.heading}>
                {t( 'checkout:City' )}
              </Typography>
              <Field
                validate={[required]}
                name="city"
                disableUnderline
                className={classes.field}
                inputClassName={classes.input}
                component={TextInput}/>
            </FormControl>

            <FormControl className={classes.formControl}>
              <Typography className={classes.heading}>
                {t( 'checkout:Zip Code' )}
              </Typography>
              <Field
                validate={[required]}
                name="zipCode"
                disableUnderline
                className={classes.field}
                inputClassName={classes.input}
                component={TextInput}/>
            </FormControl>

            <FormControl className={classes.formControl}>
              <Typography className={classes.heading}>
                {t( 'checkout:Country' )}
              </Typography>
              <Field
                validate={[required]}
                name="country"
                disableUnderline
                className={classes.field}
                inputClassName={classes.input}
                component={TextInput}/>
            </FormControl>

            <FormControl className={classes.formControlCheckBox}>
              <Field
                name="sameAddress"
                component={CheckBox}/>
              <Typography className={classes.headingCheckBox}>
                {t( 'account:Shipping address same as Billing address' )}
              </Typography>
            </FormControl>

            <Button
              type="submit"
              className={classes.addCardButton}>
              {t( 'account:Save Changes' )}
            </Button>

          </form>

        </div>

      </div>
    );
  }
}
