import { combineReducers } from 'redux';
import checkins from './checkins_reducer';

const rootReducer = combineReducers({
  checkins
});

export default rootReducer;