import { RECEIVE_MAJORS } from '../actions/major_actions';

const majorsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_MAJORS:
      return action.majors;
    default:
      return state;
  }
};

export default majorsReducer;