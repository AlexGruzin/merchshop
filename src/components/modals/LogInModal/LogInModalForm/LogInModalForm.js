import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import styles from './styles';
import { Field } from 'redux-form/immutable';
import { required } from 'helpers/validators/generic';
import { Link } from 'react-router-dom';

import TextInput from 'components/Forms/TextInput';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';

@translate()
@injectSheet( styles )
export default class LogInModalForm extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

  render() {
    const {
      handleSubmit,
      classes,
      t,
    } = this.props;

    return (
      <form
        className={classes.root}
        onSubmit={handleSubmit}>

        <Typography
          className={classes.bigDescription}>
          {t( 'auth:Welcome back!' )}
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
            {t( 'auth:Password' )}
          </Typography>
          <Field
            validate={[required]}
            name="password"
            disableUnderline
            className={classes.field}
            inputClassName={classes.input}
            component={TextInput}/>
        </FormControl>


        <Button
          type="submit"
          className={classes.submitButton}>
          {t( 'auth:LOG IN' )}
        </Button>

        <Link
          className={classes.bottomLink}
          to={''}>
          <Typography
            className={classes.link}>
            {t( 'auth:NEW HERE? SIGN UP!' )}
          </Typography>
        </Link>

      </form>
    )
  }
}
