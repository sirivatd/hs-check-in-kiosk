import {
  RECEIVE_CHECKINS
} from '../actions/checkin_actions';

const checkinsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CHECKINS:
      return action.checkins;
    default:
      return state;
  }
};

export default checkinsReducer;