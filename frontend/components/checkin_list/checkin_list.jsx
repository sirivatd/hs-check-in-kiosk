import React from 'react';
import { withRouter } from 'react-router';

class CheckinList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCheckins();
  }

  render() {
    return (
      <div className="checkin-list-container">
        <h1>I'm a form</h1>
        <h2>I'm a checkin</h2>
      </div>
    )
  }
}

export default withRouter(CheckinList);