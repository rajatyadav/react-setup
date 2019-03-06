import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Cities from './Cities';
import Events from './Events';

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Cities</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Cities} />
        <Route path="/events" component={Events} />
      </div>
    );
  }
}

export default App;
