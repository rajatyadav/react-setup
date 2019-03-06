import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCities } from '../actions';

class Cities extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.dispatch(fetchCities());
  }

  render() {
    return (
      <h1>This is Cities</h1>
    );
  }
}

const mapStateToProps = state => {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps)(Cities);