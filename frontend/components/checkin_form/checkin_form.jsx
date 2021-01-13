import React from 'react';
import { withRouter } from 'react-router';

class CheckinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      school: '',
      firstName: '',
      lastName: '',
      emailAddress: '',
      major: [],
      majorOptions: [],
      schoolOptions: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchMajors();
  }

  navigateToCheckinsList() {
    this.props.history.push('/checkins');
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('student[school]', this.state.school)
    formData.append('student[first_name]', this.state.firstName)
    formData.append('student[last_name]', this.state.lastName)
    formData.append('student[email_address]', this.state.emailAddress)
    formData.append('student[major]', this.state.major)

    this.props.createStudent(formData);
    this.navigateToCheckinsList();
  }

  render() {
    const { school, firstName, lastName, emailAddress, major } = this.state;
    const { majors } = this.props;
    
    return (
      <div className="checkin-form-container">
        <div className="new-checkin-form">
          <h2 className="new-checkin-title">Welcome to the kiosk!</h2>
          <h3 className="subtitle-text">Please fill in the following info to check-in.</h3>

          <form onSubmit={this.handleSubmit}>
            <div className="form-input-container">
              <div className="form-input-section">
              <label className="checkin-label">First Name</label>
              <br />
              <input
                type="text"
                value={firstName}
                onChange={this.update('firstName')}
                className="checkin-field"
              />
            </div>
            </div>
            <br />
            <div className="form-input-container">
            <div className="form-input-section">

              <label className="checkin-label">Last Name</label>
              <br />
              <input
                type="text"
                value={lastName}
                onChange={this.update('lastName')}
                className="checkin-field"
              />
            </div>
            </div>
            <br />
            <div className="form-input-container">
            <div className="form-input-section">

              <label className="checkin-label">Email Address</label>
              <br />
              <input
                type="text"
                value={emailAddress}
                onChange={this.update('emailAddress')}
                className="checkin-field"
              />
            </div>
            </div>
            <br />
            <div className="form-input-container">
            <div className="form-input-section">
              <label className="checkin-label">Major</label>
              <br />
              <select
                value={major}
                onChange={this.update('major')}
                className="checkin-field"
                id="major-selection"
              >
                {majors.map((major) => <option key={major.name} value={major.name}>{major.name}</option>)}
              </select>
            </div>
            </div>
            <br />
            <div className="form-input-container">
              <div className="button-holder">
                <input
                  type="submit"
                  value="Check-in"
                  className="new-checkin-button"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(CheckinForm);