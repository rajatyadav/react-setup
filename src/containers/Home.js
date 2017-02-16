import React, { Component } from 'react';
import { connect } from 'react-redux';

import fetchCities from '../actions/cityActions';
import Cities from '../presentation/cities';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.dispatch(fetchCities());
  }

  render() {
    return (
      <div className="container">
        <h2 className="text-center">ReactJs Reddit Post</h2>
        <Cities citiesList={this.props.citiesList} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    citiesList: state.citiesList
  }
}

export default connect(mapStateToProps)(Home);
