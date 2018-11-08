import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import injectSheet from 'react-jss';
import styles from './styles';
import { translate } from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TextInput from 'components/Forms/TextInput';
import PasswordInput from 'components/Forms/PasswordInput';
import Button from '@material-ui/core/Button';

import { HEADLINE } from 'constants/typography';

@translate()
@injectSheet( styles )
export default class SignUp extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
  };

  render() {
    const { handleSubmit, classes, t } = this.props;

    return (
      <form
        className={classes.signUp}
        onSubmit={handleSubmit}>
        <FormControl className={classes.formControl}>
          <Typography variant={HEADLINE} className={classes.heading}>
            {t( 'auth:email' )}
          </Typography>
          <Field
            name="email"
            component={TextInput}
            inputClassName={classes.input}
            props={{
              type: 'email'
            }}/>
        </FormControl>
        <FormControl className={classes.formControl}>
          <Typography variant={HEADLINE} className={classes.heading}>
            {t( 'auth:firstName' )}
          </Typography>
          <Field
            name="firstName"
            component={TextInput}
            inputClassName={classes.input}/>
        </FormControl>
        <FormControl className={classes.formControl}>
          <Typography variant={HEADLINE} className={classes.heading}>
            {t( 'auth:lastName' )}
          </Typography>
          <Field
            name="lastName"
            component={TextInput}
            inputClassName={classes.input}/>
        </FormControl>
        <FormControl className={classes.formControl}>
          <Typography variant={HEADLINE} className={classes.heading}>
            {t( 'auth:password' )}
          </Typography>
          <Field
            name="password"
            component={PasswordInput}
            inputClassName={classes.input}/>
        </FormControl>
        <Button
          type="submit"
          className={classes.submitButton}>
          <Typography variant="button">
            {t( 'auth:signUp' )}
          </Typography>
        </Button>
      </form>
    );
  }
}
