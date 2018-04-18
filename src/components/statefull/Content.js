import React from 'react';
import { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Search from '../stateless/Search'
import Aside from '../stateless/Aside'

class Content extends Component {
  constructor(props) {
    super(props);
  }
  render(){
  	return (
  		<Row>
  			<Col sm="12" md="3"><Search/></Col>
  			<Col sm="12" md="6"></Col>
  			<Col sm="12" md="3"><Aside/></Col>
  		</Row>
  	);
  }
}

export default Content;