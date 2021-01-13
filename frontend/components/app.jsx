import React from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';

import CheckinFormContainer from './checkin_form/checkin_form_container';
import CheckinListContainer from './checkin_list/checkin_list_container';

const App = () => (
  <div>
      <div className="home-header">
        <img className="handshake-logo-icon" src="https://career.auburn.edu/wp-content/uploads/2020/09/handshake_logo_dark-1.png" />
      </div>
    <div className="home-container">
      <div className="home-image-container">
        <h1 className="header-text">Check-In Kiosk Interview Project</h1>
      </div>
      <div className="home-text-container">
        <Link to="/checkins/new" className="new-link">
          <h2>New Check-In</h2>
        </Link>
        <Link to="/checkins" className="list-link">
          <h2>Check-In List</h2>
        </Link>
      </div>
    </div>

    <Switch>
      <Route path="/checkins/new" component={CheckinFormContainer} />
      <Route exact path="/checkins" component={CheckinListContainer} />
    </Switch>
  </div>
);

export default App;