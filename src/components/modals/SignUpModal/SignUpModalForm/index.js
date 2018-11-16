import { reduxForm } from 'redux-form/immutable';
import SignUpModalForm from './SignUpModalForm';

export default reduxForm({
  form: 'SignUpModalForm',
})( SignUpModalForm );
