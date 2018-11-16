import { connect } from 'react-redux';

import MobileNavigationColumn from './MobileNavigationColumn';
import { openLogRequestModal } from 'actionsCreators/modals';

const mapDispatchToProps = {
  openLogRequestModal,
};

export default connect( null, mapDispatchToProps )( MobileNavigationColumn );
