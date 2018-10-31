import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import injectSheet from 'react-jss';
import { translate } from 'react-i18next';
import styles from './styles';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import Gift from '@material-ui/icons/Archive';

import TextInput from 'components/Forms/TextInput';
import CheckBox from 'components/Forms/CheckBox';
import RadioGroup from 'components/Forms/RadioGroup';

import Button from '@material-ui/core/Button';

import { BODY1, SUBHEADING } from 'constants/typography';

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
      handleSubmit,
      classes,
      t,
      allowTheNext,
    } = this.props;

    return (
      <form
        className={classes.shippingRoot}
        //onSubmit={handleSubmit}
        onSubmit={allowTheNext}
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
            name="phone"
            disableUnderline
            className={classes.field}
            inputClassName={classes.input}
            component={TextInput}/>
        </FormControl>

        <FormControl className={classes.formControlCheckBox}>
          <Field
            name="mailsFromUs"
            component={CheckBox}/>
          <Typography className={classes.headingCheckBox}>
            {t( 'checkout:I’d like to recieve email updates from Zulu' )}
          </Typography>
        </FormControl>

        <Typography
          className={classes.title}>
          {t( 'checkout:Shipping' )}
        </Typography>

        <FormControl className={classes.formControl}>
          <Typography className={classes.heading}>
            {t( 'checkout:First Name' )}
          </Typography>
          <Field
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
            name="LastName"
            disableUnderline
            className={classes.field}
            inputClassName={classes.input}
            component={TextInput}/>
        </FormControl>

        <FormControl className={classes.formControl}>
          <Typography className={classes.heading}>
            {t( 'checkout:Address' )}
          </Typography>
          <Field
            name="Address"
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
            name="Apt/Floor/Suite"
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
            name="City"
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
            name="ZipCode"
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
            name="Country"
            disableUnderline
            className={classes.field}
            inputClassName={classes.input}
            component={TextInput}/>
        </FormControl>

        <div className={classes.row}>
          <Gift fontSize='inherit'/>
          <Typography className={classes.headingIcon}>
            {t( 'checkout:Would you like this gift wrapped?' )}
          </Typography>
        </div>

        <FormControl className={classes.formControlRadio}>
          <Field className={classes.radioField} name="isWrapped" component={RadioGroup}>
            <Radio classes={{root: classes.radio}} value='Yes' label="Yes" />
            <Typography className={classes.headingRadio}>
              {'Yes'}
            </Typography>
            <Radio  classes={{root: classes.radio}} value='No' label="No" />
            <Typography className={classes.headingRadio}>
              {'No'}
            </Typography>
          </Field>
        </FormControl>

        <Button
          type="submit"
          className={classes.submitButton}>
          {t( 'checkout:Next' )}
        </Button>

      </form>
    );
  }
}
