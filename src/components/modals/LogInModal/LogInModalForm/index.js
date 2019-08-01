import { reduxForm } from 'redux-form/immutable';
import LogInModalForm from './LogInModalForm';

export default reduxForm({
  form: 'LogInModalForm',
})( LogInModalForm );
