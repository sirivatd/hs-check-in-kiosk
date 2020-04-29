import { connect } from 'react-redux';

import { createStudent } from '../../actions/checkin_actions';
import CheckinForm from './checkin_form';


const mapDispatchToProps = dispatch => ({
  createStudent: student => dispatch(createStudent(student))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckinForm);