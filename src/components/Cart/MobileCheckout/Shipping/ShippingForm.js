import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import Typography from '@material-ui/core/Typography';
import CheckBox from 'components/Forms/CheckBox';
import RadioGroup from 'components/Forms/RadioGroup';

import TextInput from 'components/Forms/TextInput';

import Icon from 'components/Icon';
import { ICONS } from 'constants/icons';
import { BODY1, SUBHEADING } from 'constants/typography';

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
    classes: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
  };

  render() {
    const {
      handleSubmit,
      submitting,
      invalid,
      pristine,
      classes,
      t,
      allowTheNext,
    } = this.props;

    return (
      <form
        className={classes.shippingRoot}
        onSubmit={handleSubmit}>

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
            className={classes.field}
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
            className={classes.field}
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
            validate={[required]}
            name="FirstName"
            className={classes.field}
            component={TextInput}/>
        </FormControl>

        <FormControl className={classes.formControl}>
          <Typography className={classes.heading}>
            {t( 'checkout:Last Name' )}
          </Typography>
          <Field
            validate={[required]}
            name="LastName"
            className={classes.field}
            component={TextInput}/>
        </FormControl>

        <FormControl className={classes.formControl}>
          <Typography className={classes.heading}>
            {t( 'checkout:Address' )}
          </Typography>
          <Field
            validate={[required]}
            name="Address"
            className={classes.field}
            component={TextInput}/>
        </FormControl>

        <FormControl className={classes.formControl}>
          <Typography className={classes.heading}>
            {t( 'checkout:Apt/Floor/Suite' )}
          </Typography>
          <Field
            validate={[required]}
            name="Apt/Floor/Suite"
            className={classes.field}
            component={TextInput}/>
        </FormControl>

        <FormControl className={classes.formControl}>
          <Typography className={classes.heading}>
            {t( 'checkout:City' )}
          </Typography>
          <Field
            validate={[required]}
            name="City"
            className={classes.field}
            component={TextInput}/>
        </FormControl>

        <FormControl className={classes.formControl}>
          <Typography className={classes.heading}>
            {t( 'checkout:Zip Code' )}
          </Typography>
          <Field
            validate={[required]}
            name="ZipCode"
            className={classes.field}
            component={TextInput}/>
        </FormControl>

        <FormControl className={classes.formControl}>
          <Typography className={classes.heading}>
            {t( 'checkout:Country' )}
          </Typography>
          <Field
            validate={[required]}
            name="Country"
            className={classes.field}
            component={TextInput}/>
        </FormControl>

        <div className={classes.row}>
          <Icon
            className={classes.giftIcon}
            icon={ICONS.GIFT}/>
          <Typography className={classes.headingIcon}>
            {t( 'checkout:Would you like this gift wrapped?' )}
          </Typography>
        </div>

        <FormControl className={classes.formControlRadio}>
          <Field className={classes.radioField} name="isWrapped" component={RadioGroup}>
            <Radio classes={{ root: classes.radio }} value='Yes' label="Yes" />
            <Typography className={classes.headingRadio}>
              {'Yes'}
            </Typography>
            <Radio  classes={{ root: classes.radio }} value='No' label="No" />
            <Typography className={classes.headingRadio}>
              {'No'}
            </Typography>
          </Field>
        </FormControl>

        <Button
          type="submit"
          onClick={()=>{setTimeout( allowTheNext, 3000 )}} // while saga submiting
          disabled={invalid|| submitting || pristine}
          className={classes.submitButton}>
          {t( 'checkout:Next' )}
        </Button>

      </form>
    );
  }
}
