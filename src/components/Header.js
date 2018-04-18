import React from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';

const JumbotronCustom = (props) => {
  return (
    <div>
      <Jumbotron/>
      <Navbar/>
    </div>
  );
};

export default JumbotronCustom;