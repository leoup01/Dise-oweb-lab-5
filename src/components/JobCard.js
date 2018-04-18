import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBlock, CardBody,
  CardTitle, CardSubtitle, Button, Col, Row } from 'reactstrap';

const JobCard = (props) => {
	let { id, category, name, description, location } = props.job;
	let categoryColor = props.categoryColor;
  return (
    <div>
        <Card >
        	<Row>
        		<Col xs="1" className={categoryColor}></Col>
	        <Col>
	        	<CardBlock>
	        		<CardTitle><strong>{name}</strong></CardTitle>
		            <CardText>{description}</CardText>
		            <CardSubtitle><small className="text-muted">Ubicación: {location}</small></CardSubtitle>
		            <CardText><small className="text-muted">Categoría: {category}</small></CardText>
		            <Button color="info" onClick={() => props.JobDetails(id)}>Details</Button>
		            <Button color="danger" onClick={() => props.jobRemove(id)}>Delete</Button>
		        </CardBlock>
	        </Col>
        	</Row>
        </Card>
    </div>
  );
};

export default JobCard;