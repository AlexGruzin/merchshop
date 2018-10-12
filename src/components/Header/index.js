import { connect } from 'react-redux';

import Header from './Header';
import headerSelector from './selector';
import * as ActionsCreators from 'actionsCreators/logout';

const mapDispatchToProps = {
  makeLogout: ActionsCreators.makeLogout,
};

export default connect(
  headerSelector,
  mapDispatchToProps
)( Header );
