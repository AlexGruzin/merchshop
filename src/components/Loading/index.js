import { connect } from 'react-redux';

import loadingSelector from './selector';
import Loading from './Loading';

export default connect(loadingSelector)(Loading);
