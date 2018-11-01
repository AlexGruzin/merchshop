import { connect } from 'react-redux';
import StageCollection from './StageCollection';

// action creators
import { ActionsCreators } from 'domains/cart';

const sendShippingData = ActionsCreators.startCheckout;
const sendPaymentData = ActionsCreators.startCheckout;

const mapDispatchToProps = ({
  sendShippingData,
  sendPaymentData,
});

export default connect( null, mapDispatchToProps )( StageCollection );
