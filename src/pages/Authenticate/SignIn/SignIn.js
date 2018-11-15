import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import injectSheet from 'react-jss';
import { translate } from 'react-i18next';
import styles from './styles';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';

import TextInput from 'components/Forms/TextInput';
import PasswordInput from 'components/Forms/PasswordInput';
import Button from '@material-ui/core/Button';

import { HEADLINE } from 'constants/typography';
import MODALS_TYPES from 'constants/modals';

@translate()
@injectSheet( styles )
export default class SignIn extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
  };

  render() {
    const { handleSubmit, classes, openModal, t } = this.props;
    console.log(handleSubmit);

    return (
      <form
        className={classes.login}
        onSubmit={handleSubmit}>
        <FormControl className={classes.formControl}>
          <Typography variant={HEADLINE} className={classes.heading}>
            {t( 'auth:email' )}
          </Typography>
          <Field
            name="email"
            inputClassName={classes.input}
            component={TextInput}
            props={{
              type: 'email',
            }}/>
        </FormControl>
        <FormControl className={classes.formControl}>
          <Typography variant={HEADLINE} className={classes.heading}>
            {t( 'auth:password' )}
          </Typography>
          <Field
            name="password"
            inputClassName={classes.input}
            component={PasswordInput}/>
          <div
            className={classes.forgotPassword}
            onClick={
              () => openModal({
                type: MODALS_TYPES.FORGOT_PASSWORD,
              })
            }>
            {t( 'auth:forgotPassword' )}
          </div>
        </FormControl>
        <Button
          type="submit"
          className={classes.submitButton}>
          <Typography variant="button">
            {t( 'auth:signIn' )}
          </Typography>
        </Button>
      </form>
    );
  }
}
