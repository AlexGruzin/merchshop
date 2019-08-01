import { connect } from 'react-redux';

import SignUpModal from './SignUpModal';
import { sendSignUpData } from 'actionsCreators/views/authenticate';

const mapDispatchToProps = {
  sendSignUpData,
};

export default connect( null, mapDispatchToProps )( SignUpModal );
