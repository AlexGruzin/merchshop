import { connect } from 'react-redux';

// actions creators
import { closeModal } from 'actionsCreators/modals';

import ModalsPortal from './ModalsPortal';
import modalsPortalSelector from './selector';

const mapDispatchToProps = {
  closeModal,
};

export default connect(modalsPortalSelector, mapDispatchToProps)(
  ModalsPortal,
);
