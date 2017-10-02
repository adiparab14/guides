import { combineReducers } from 'redux';

import { reducer as nav } from '../layoutComponents/nav/redux';
import { reducer as search } from '../layoutComponents/search/redux';

const rootReducer = combineReducers({
  nav,
  search
});

export default rootReducer;
