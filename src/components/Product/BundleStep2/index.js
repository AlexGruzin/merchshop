import BundleStep2 from './BundleStep2';
import { reduxForm } from 'redux-form/immutable';

export default reduxForm({
  form: 'BundleStep2Form',
})( BundleStep2 );
