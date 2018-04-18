import React from 'react';
import { Row, Col } from 'reactstrap';

const JumbotronCustom = (props) => {
  return (
    <div>
    <footer class="text-center">
  		<Row>
  			<Col sm="12" md="12" lg="12">
	  			<p>©Copyright by Universidad Nacional de Costa Rica.</p>
	        	<p>2018</p>
  			</Col>
  		</Row>
	</footer>
    </div>
  );
};

export default JumbotronCustom;