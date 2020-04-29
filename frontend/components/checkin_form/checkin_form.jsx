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

  navigateToHome() {
    this.props.history.push('/');
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
    this.navigateToHome();
  }

  render() {
    const { school, firstName, lastName, emailAddress, major } = this.state;
    const { majors } = this.props;
    
    return (
      <div className="checkin-form-container">
        <div className="new-checkin-form">
          <h3 className="new-checkin-title">New Checkin</h3>

          <form onSubmit={this.handleSubmit}>
              <label className="checkin-field">First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={this.update('firstName')}
                className="checkin-field"
              />

              <label className="checkin-field">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={this.update('lastName')}
                className="checkin-field"
              />

              <label className="checkin-field">Email Address</label>
              <input
                type="text"
                value={emailAddress}
                onChange={this.update('emailAddress')}
                className="checkin-field"
              />

              <label className="checkin-field">Major</label>
              <select
                value={major}
                onChange={this.update('major')}
                className="checkin-field"
              >
                {majors.map((major) => <option key={major.name} value={major.name}>{major.name}</option>)}
              </select>

              <div className="button-holder">
                <input
                  type="submit"
                  value="Check-in"
                  className="new-checkin-buttton"
                />
              </div>
          </form>

          <div className="button-holder">
            <button
              className="cancel-button"
              onClick={this.navigateToHome}
              >
                Go back
              </button>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(CheckinForm);