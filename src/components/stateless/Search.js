import React from 'react';
import { Card, CardBody, CardHeader, Button, Input } from 'reactstrap';

const SearchCard = (props) => {
  return (
        <Card>
        <CardHeader>Search Section</CardHeader>
        <CardBody>
          <Input placeholder="Enter text here" />
          <Button>Search</Button>
        </CardBody>
      </Card>
  );
};

export default SearchCard;