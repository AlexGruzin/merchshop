import { createStructuredSelector } from 'reselect';

import { selectedTab } from 'selectors/authenticate';

export default createStructuredSelector({
  selectedTab,
});
