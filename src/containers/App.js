/**
 * Root Component
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { push } from 'react-router-redux';

import Navigation from './Nav';

class App extends Component {

  componentWillMount() {
    this.props.dispatch(push("/home"));
  }

  render() {
    return (
      <div>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}

export default connect(null)(App);
