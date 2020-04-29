import * as APIUtil from '../util/kiosk_api_util';

export const RECEIVE_CHECKINS = 'RECEIVE_CHECKINS';

export const receiveCheckins = checkins => {
  return {
    type: RECEIVE_CHECKINS,
    checkins: checkins
  };
};

export const createStudent = student => () => {
  return APIUtil.createStudent(student).then(res => {
    console.log(res);
  });
};

export const fetchCheckins = () => dispatch => (
  APIUtil.fetchCheckins().then(checkins => (
    dispatch(receiveCheckins(checkins))
  ))  
);