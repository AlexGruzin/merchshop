import { connect } from 'react-redux';

import ForgotPasswordModal from './ForgotPasswordModal';

const sendResetPasswordMail = () => {};

const mapDispatchToProps = {
  sendResetPasswordMail,
};

export default connect(null, mapDispatchToProps)(ForgotPasswordModal);
