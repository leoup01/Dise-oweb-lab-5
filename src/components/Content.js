import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import RightColumn from './RightColumn';
import LeftColumn from './LeftColumn';

const Content = (props) => {
    return (
      <Row>
      	<Col sm="12" md="12" lg="10"><LeftColumn/></Col>
      	<Col sm="12" md="12" lg="2"><RightColumn/></Col>
      </Row>
    );
};

export default Content;