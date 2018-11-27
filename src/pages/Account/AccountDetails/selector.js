import { createStructuredSelector } from 'reselect';

import { dataStatus } from 'selectors/account';

export default createStructuredSelector({
  dataStatus,
});
