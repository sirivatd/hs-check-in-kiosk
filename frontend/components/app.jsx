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
    <div className="home-container">
      <div className="home-image-container">
        <img className="handshake-logo-icon" src="https://education.jhu.edu/wp-content/uploads/2018/11/Handshake-logo.png" />
      </div>
      <div className="home-text-container">
        <h1>Handshake Check-in Kiosk</h1>
        <Link to="/checkins/new" className="header-link">
          <h2>New Check-in</h2>
        </Link>
        <Link to="/checkins" className="header-link">
          <h2>Check-in List</h2>
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