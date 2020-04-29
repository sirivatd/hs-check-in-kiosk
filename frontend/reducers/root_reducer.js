import { combineReducers } from 'redux';

import checkins from './checkins_reducer';
import majors from './majors_reducer';

const rootReducer = combineReducers({
  checkins,
  majors
});

export default rootReducer;