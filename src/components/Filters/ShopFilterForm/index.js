import MobileFilterForm from './ShopFilterForm';
import { reduxForm } from 'redux-form/immutable';

export default reduxForm({
  form: 'FilterForm',
  initialValues: {},
})( MobileFilterForm );
