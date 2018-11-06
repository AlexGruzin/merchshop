import { reduxForm } from 'redux-form/immutable';
import PaymentForm from './PaymentForm';

export default reduxForm({
  form: 'PaymentForm',
})( PaymentForm );
