import { reduxForm } from 'redux-form/immutable';
import SignIn from './SignIn';

export default reduxForm({
  form: 'signIn',
  initialValues: {
    email: 'alex3419987@gmail.com',
    password: '12345678',
  },
})(SignIn);
