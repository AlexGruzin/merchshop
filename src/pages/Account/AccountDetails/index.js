import { reduxForm } from 'redux-form/immutable';
import AccountDetails from './AccountDetails';

export default reduxForm({
  form: 'AccountDetails',
  initialValues: {
    email: 'james@gmail.com',
    phone: '+62 9823 54095',
    FirstName: 'James',
    LastName: 'Sudarmono',
  },
})( AccountDetails );
