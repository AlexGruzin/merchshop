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

import { Field } from 'redux-form/immutable';

import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';

import TextInput from 'components/Forms/TextInput';

import { required } from 'helpers/validators/generic';

import styles from './styles';
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
    // this add ability to pass initialValues from anywhere
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
          currentLabel={'account:Account Details'}
        />

        <div className={classes.listContainer}>
          <form
            className={classes.detailsRoot}
            //onSubmit={handleSubmit}
          >

            <Typography
              className={classes.title}>
              {t( 'checkout:Contact' )}
            </Typography>

            <FormControl className={classes.formControl}>
              <Typography className={classes.heading}>
                {t( 'checkout:Email' )}
              </Typography>
              <Field
                validate={[required]}
                name="email"
                disableUnderline
                className={classes.field}
                inputClassName={classes.input}
                component={TextInput}
                props={{
                  type: 'email',
                }}/>
            </FormControl>
            <FormControl className={classes.formControl}>
              <Typography className={classes.heading}>
                {t( 'checkout:Phone' )}
              </Typography>
              <Field
                validate={[required]}
                name="phone"
                disableUnderline
                className={classes.field}
                inputClassName={classes.input}
                component={TextInput}/>
            </FormControl>

            <Typography
              className={classes.title}>
              {t( 'checkout:Personal Information' )}
            </Typography>

            <FormControl className={classes.formControl}>
              <Typography className={classes.heading}>
                {t( 'checkout:First Name' )}
              </Typography>
              <Field
                validate={[required]}
                name="FirstName"
                disableUnderline
                className={classes.field}
                inputClassName={classes.input}
                component={TextInput}/>
            </FormControl>

            <FormControl className={classes.formControl}>
              <Typography className={classes.heading}>
                {t( 'checkout:Last Name' )}
              </Typography>
              <Field
                validate={[required]}
                name="LastName"
                disableUnderline
                className={classes.field}
                inputClassName={classes.input}
                component={TextInput}/>
            </FormControl>

          </form>

          <Button
            type="submit"
            //onClick={allowTheNext}
            className={classes.addCardButton}>
            {t( 'account:Save Changes' )}
          </Button>

        </div>

      </div>
    );
  }
}
