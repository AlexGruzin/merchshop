import { connect } from 'react-redux';

import ModalsPortal from 'components/ModalsPortal';

// actions creators
import { closeModal } from 'actionsCreators/modals';
import modalsPortalSelector from './selector';

const mapDispatchToProps = {
  closeModal,
};

export default connect( modalsPortalSelector, mapDispatchToProps )(
  ModalsPortal,
);
