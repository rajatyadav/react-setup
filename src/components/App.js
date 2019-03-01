import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Home from './Home';
import Cities from './Cities';
import Events from './Events';

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cities">Cities</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/cities" component={Cities} />
        <Route path="/events" component={Events} />
      </div>
    );
  }
}

export default App;
