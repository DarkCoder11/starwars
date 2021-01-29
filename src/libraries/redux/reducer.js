import { combineReducers } from 'redux';
import notifications from 'react-redux-notify';

import * as reducers from 'store/reducers';

const rootReducer = combineReducers({
  ...reducers,
  notifications,
});

export default rootReducer;
