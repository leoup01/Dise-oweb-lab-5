import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import JobCard from './JobCard';

class JobResults extends Component {

	constructor() {
    super();
    this.state = {
      jobs: [
        {
          id: 1,
          category: "cat",
          name: "Job ",
          description: "Desc ",
          location: "loc "
        },
        {
          id: 2,
          category: "cat2",
          name: "Job 2",
          description: "Desc 2",
          location: "loc 2"
        },
        {
          id: 3,
          category: "cat",
          name: "Job 3",
          description: "Desc 3",
          location: "loc 3"
        },
        {
          id: 4,
          category: "cat3",
          name: "Job 4",
          description: "Desc 4",
          location: "loc 4"
        },
        {
          id: 5,
          category: "cat",
          name: "Job 5",
          description: "Desc 5",
          location: "loc 5"
        },
        
      ]
    }
  }

  jobRemove(id) {
    this.setState({ jobs: this.state.jobs.filter(job => job.id !== id)});
  }

  render () {let catsColors = [...(new Set(this.state.jobs.map(job => job.category)))].map( (cate,i)=> [cate, i+1]);
    let getColor = (arr,x) =>{
      return 'backgroundCategory'+ (arr.find( (key,value) => key[0] === x )[1]);
    }
    let JobCards = this.state.jobs.map(job => {
      return (
        <Col xs="12" sm="12" md="6" lg="4">
          <JobCard key={job.id} jobRemove={this.jobRemove.bind(this)} job={job} categoryColor={getColor(catsColors,job.category)}/>
        </Col>
      )
    })
    return (
      <div fluid>
        <Row>
          {JobCards}
        </Row>
      </div>
    )
  }

}

export default JobResults;