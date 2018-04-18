import React, { Component } from 'react';
import JobsResult from '../components/JobsResult';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Home Page 2</h1>
        <JobsResult/>
      </div>
    );
  }
}

export default Home;