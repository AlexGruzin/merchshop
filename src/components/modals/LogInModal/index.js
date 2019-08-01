import { connect } from 'react-redux';

import LogInModal from './LogInModal';
import { sendLogInData } from 'actionsCreators/views/authenticate';

const mapDispatchToProps = {
  sendLogInData,
};

export default connect( null, mapDispatchToProps )( LogInModal );
