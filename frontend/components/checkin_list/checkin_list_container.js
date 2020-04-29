import { connect } from 'react-redux';

import { fetchCheckins } from '../../actions/checkin_actions';
import CheckinList from './checkin_list';

const mapStateToProps = (state) => {
  return {
    checkins: Object.values(state.checkins)
  }
}
const mapDispatchToProps = dispatch => ({
  fetchCheckins: () => dispatch(fetchCheckins())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckinList);