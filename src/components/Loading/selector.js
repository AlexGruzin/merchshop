import { createStructuredSelector } from 'reselect';

import { isTransparent, message, blocking } from 'selectors/loading';

export default createStructuredSelector({
  blocking,
  message,
  renderChildren: isTransparent
});
