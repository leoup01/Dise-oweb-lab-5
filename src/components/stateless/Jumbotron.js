import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const JumbotronCustom = (props) => {
  return (
    <div>
      <Jumbotron className="text-center">
        <h1 className="display-3">Laboratorio 5</h1>
        <hr className="my-2" />
        <p className="lead">Leonel Cortés Quiñones</p>
      </Jumbotron>
    </div>
  );
};

export default JumbotronCustom;