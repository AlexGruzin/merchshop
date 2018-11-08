import { connect } from 'react-redux';

import Loading from 'components/Loading';
import loadingSelector from './selector';

export default connect( loadingSelector )( Loading );
