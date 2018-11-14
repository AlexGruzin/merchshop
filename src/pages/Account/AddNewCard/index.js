import { reduxForm } from 'redux-form/immutable';
import AddNewCard from './AddNewCard';

export default reduxForm({
  form: 'AddNewCard',
})( AddNewCard );
