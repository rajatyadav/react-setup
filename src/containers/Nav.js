import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';

export default class Navigation extends Component {
  // constructor(props) {
  //     super(props);
  // }

  render () {
    return (
      <div className="header-container">
        <Navbar inverse collapseOnSelect className="navbar-fixed-top">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Event listing</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}
