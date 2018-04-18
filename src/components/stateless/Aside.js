import React from 'react';
import { Card, CardBody, CardHeader, Button, Input, ListGroup, ListGroupItem, Badge } from 'reactstrap';

const Aside = (props) => {
  return (
  	<div>
      <Card>
        <CardHeader>Categories</CardHeader>
        <CardBody>
        	<ListGroup>
		        <ListGroupItem className="justify-content-between">Categorie 1<Badge pill>92</Badge></ListGroupItem>
		        <ListGroupItem className="justify-content-between">Categorie 2<Badge pill>7</Badge></ListGroupItem>
		        <ListGroupItem className="justify-content-between">Categorie 3<Badge pill>81</Badge></ListGroupItem>
		        <ListGroupItem className="justify-content-between">Categorie 4<Badge pill>101</Badge></ListGroupItem>
		        <ListGroupItem className="justify-content-between">Categorie 5<Badge pill>3</Badge></ListGroupItem>
		        <ListGroupItem className="justify-content-between">uncategorized<Badge pill>51</Badge></ListGroupItem>
		    </ListGroup>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>Blogroll</CardHeader>
        <CardBody>
        	<ListGroup>
		        <ListGroupItem>Link 1</ListGroupItem>
		        <ListGroupItem>Link 2</ListGroupItem>
		        <ListGroupItem>Link 3</ListGroupItem>
		        <ListGroupItem>Link 4</ListGroupItem>
		        <ListGroupItem>Link 5</ListGroupItem>
		        <ListGroupItem>Link 6</ListGroupItem>
		        <ListGroupItem>Link 7</ListGroupItem>
		        <ListGroupItem>Link 8</ListGroupItem>
		        <ListGroupItem>Link 9</ListGroupItem>
		    </ListGroup>
        </CardBody>
      </Card>
    </div>
  );
};

export default Aside;