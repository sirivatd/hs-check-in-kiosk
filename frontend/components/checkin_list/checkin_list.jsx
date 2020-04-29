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
    const { checkins } = this.props;

    return (
      <div className="checkin-list-container">
        <div className="checkin-list-table-container">
         <ul>{checkins.map((checkin) =>
            <li className="checkin-list-row">
              {checkin.first_name}, {checkin.last_name}, {checkin.email_address}, {checkin.major}
            </li>
          )}
          </ul>
        </div>
      </div>
    )
  }
}

export default withRouter(CheckinList);