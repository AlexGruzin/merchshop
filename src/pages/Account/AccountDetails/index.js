import AccountDetails from './AccountDetails';

import { connect } from 'react-redux';
import { ActionsCreators } from 'domains/account';
import dataStatus from './selector';
// action creators
import { openForgotPasswordModal } from 'actionsCreators/modals';

const mapDispatchToProps = ({
  onSubmit: ActionsCreators.startSavingData,
});

export default connect( dataStatus, mapDispatchToProps )(
  AccountDetails,
);
