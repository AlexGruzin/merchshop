import Filter from 'components/Filters';
import { reduxForm } from 'redux-form/immutable';
import { productTypes } from 'constants/shop'

export default reduxForm({
  form: 'filter',
  initialValues: {
    productType: productTypes.ALL,
  },
})( Filter );
