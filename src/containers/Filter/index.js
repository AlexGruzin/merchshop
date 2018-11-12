import Filter from 'components/Filters';
import { reduxForm } from 'redux-form/immutable';
import { PRODUCT_TYPES } from 'constants/shop'

export default reduxForm({
  form: 'filter',
  initialValues: {
    productType: PRODUCT_TYPES.ALL,
  },
})( Filter );
