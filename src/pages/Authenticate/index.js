import Authenticate from './Authenticate';
import { connect } from 'react-redux';
import { sendSignUpData, sendLogInData } from 'actionsCreators/views/authenticate';
import authenticateSelector from './selector';
// action creators
const openForgotPasswordModal = () =>{};

const mapDispatchToProps = ({
  sendSignUpData,
  sendLogInData,
});

export default connect( authenticateSelector, mapDispatchToProps )(
  Authenticate,
);
