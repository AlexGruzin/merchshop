import { reduxForm } from 'redux-form/immutable';
import SignIn from './SignIn';

export default reduxForm({
  form: 'signIn',
})( SignIn );
