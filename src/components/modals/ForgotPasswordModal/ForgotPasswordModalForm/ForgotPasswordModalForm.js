import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import styles from './styles';
import { Field } from 'redux-form/immutable';
import TextInput from 'components/Forms/TextInput';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';

@translate()
@injectSheet( styles )
export default class ForgotPasswordModal extends PureComponent {
  static propTypes = {
    classes: PropTypes.object,
    t: PropTypes.func,
    handleSubmit: PropTypes.func.isRequired,
  };

  render() {
    const { handleSubmit,
      classes,
      t,
    } = this.props;

    return (
      <form
        className={classes.form}
        onSubmit={handleSubmit}>

        <FormControl className={classes.formControl}>

          <Typography className={classes.heading}>
            {t( 'auth:email' )}
          </Typography>
          <Field
            name="email"
            component={TextInput}
            props={{
              type: 'email',
            }}/>

        </FormControl>

        <Button
          type="submit"
          className={classes.submitButton}>
          {t( 'forgotPasswordModal:sendMail' )}
        </Button>
      </form>
    )
  }
}
