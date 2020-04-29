import { connect } from 'react-redux';

import { createStudent } from '../../actions/checkin_actions';
import { fetchMajors } from '../../actions/major_actions';

import CheckinForm from './checkin_form';

const mapStateToProps = (state) => {
  return {
    majors: Object.values(state.majors)
  }
};

const mapDispatchToProps = dispatch => ({
  createStudent: student => dispatch(createStudent(student)),
  fetchMajors: () => dispatch(fetchMajors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckinForm);