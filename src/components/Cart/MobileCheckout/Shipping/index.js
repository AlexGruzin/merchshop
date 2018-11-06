import { reduxForm } from 'redux-form/immutable';
import ShippingForm from './ShippingForm';

export default reduxForm({
  form: 'ShippingForm',
  initialValues: {
    mailsFromUs: true,
    isWrapped: 'No',
  },
})( ShippingForm );
