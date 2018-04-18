import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const JumbotronCustom = (props) => {
  return (
    <div>
      <Jumbotron className="text-center">
        <h1 className="display-3">Trabajos en Github</h1>
        <hr className="my-2" />
        <p className="lead">Proyect 1 Diseño web</p>
      </Jumbotron>
    </div>
  );
};

export default JumbotronCustom;