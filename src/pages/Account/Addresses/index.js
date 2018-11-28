import { reduxForm } from 'redux-form/immutable';
import Addresses from './Addresses';

export default reduxForm({
  form: 'AccountDetails',
  initialValues: {
    address: 'james@gmail.com',
    AptFloorSuite: '#23-54',
    city: 'Jakarta',
    zipCode: '84982',
    country: 'Indonesia',
    sameAddress: true,
  },
})( Addresses );
