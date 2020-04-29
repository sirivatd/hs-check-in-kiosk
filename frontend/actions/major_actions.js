import * as APIUtil from '../util/kiosk_api_util';

export const RECEIVE_MAJORS = 'RECEIVE_MAJORS';

export const receiveMajors = majors => {
  return {
    type: RECEIVE_MAJORS,
    majors: majors
  };
};

export const fetchMajors = () => dispatch => (
  APIUtil.fetchMajors().then(majors => (
    dispatch(receiveMajors(majors))
  ))
);

