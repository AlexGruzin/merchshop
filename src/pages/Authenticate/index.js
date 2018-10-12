import Authenticate from './Authenticate';
import { connect } from 'react-redux';
import { sendSignUpData, sendSignInData, selectTab } from 'actionsCreators/views/authenticate';
import authenticateSelector from './selector';
// action creators
import { openForgotPasswordModal } from 'actionsCreators/modals';

const mapDispatchToProps = ({
  sendSignUpData,
  sendSignInData,
  openForgotPasswordModal,
  selectTab,
});

export default connect( authenticateSelector, mapDispatchToProps )(
  Authenticate,
);
