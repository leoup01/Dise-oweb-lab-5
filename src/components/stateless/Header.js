import React from 'react';
import Menu from '../statefull/Menu';
import Jumbotron from './Jumbotron';

const HeaderCustom = (props) => {
  return (
    <div>
      <Jumbotron/>
      <Menu/>
    </div>
  );
};

export default HeaderCustom;