import React from 'react';
import { withRouter } from 'react-router';

class CheckinList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCheckins();
  }

  renderTableData() {
    const { checkins } = this.props
    return checkins.map((checkin, index) => {
      const { first_name, last_name, email_address, major } = checkin
      return (
        <tr key={index}>
          <td>{first_name}</td>
          <td>{last_name}</td>
          <td>{email_address}</td>
          <td>{major}</td>
        </tr>
      )
    })
  }

  renderTableHeader() {
    let headers = ["First name", "Last name", "Email address", "Major"]
    return headers.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }

  render() {
    return (
      <div className="checkin-list-container">
        <div className="checkin-list-table-container">
        <h1 id="title">Check In List</h1>
          <table id="checkins">
            <tbody>
              <tr>{this.renderTableHeader()}</tr>
              {this.renderTableData()}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default withRouter(CheckinList);