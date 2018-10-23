import Filter from 'components/Filters';
import { reduxForm } from 'redux-form/immutable';

export default reduxForm({
  form: 'filter',
})( Filter );
