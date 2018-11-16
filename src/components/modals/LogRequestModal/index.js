import { connect } from 'react-redux';

import LogRequestModal from './LogRequestModal';
import { openLogInModal, openSignUpModal } from 'actionsCreators/modals';

const mapDispatchToProps = {
  openLogInModal,
  openSignUpModal,
};

export default connect( null, mapDispatchToProps )( LogRequestModal );
