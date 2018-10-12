import { reduxForm } from 'redux-form/immutable';
import ForgotPasswordModalForm from './ForgotPasswordModalForm';

export default reduxForm({
  form: 'forgotPasswordModalForm',
  initialValues: {
    email: 'yurykharytanovich@gmail.com',
  }, // stub for testing MUST BE REMOVED.
})( ForgotPasswordModalForm );
