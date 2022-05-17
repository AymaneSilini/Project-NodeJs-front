import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Col, Row, Form, FormControl} from 'react-bootstrap';
import { Box } from '@mui/material';
import { Container } from '@mui/material';

class Home extends Component {
  constructor(props){
    super(props);
    this.state ={animals: []
  };
   }

   
  componentDidMount() {
    fetch('/animals')
            .then(res => {
                return res.json()
              })
            .then(animals => { 
                console.log(animals); 
                this.setState({ animals })
              });
          }


  render(){
  return (
    <>
      <br></br>
      <br></br>
      <Box style={{ marginLeft: '50px', marginRight: '50px' }}>
        <Row>
        {this.state.animals.map((animal)=>{      
          return<>
          <Col>
          <Card style={{ width: '15rem'}} >
          <Card.Img variant="top" src={animal.photo} />
          <Card.Body>
            <Card.Title>{animal.name}</Card.Title>
            <Card.Text>{animal.level}</Card.Text>
            <Card.Text>{animal.type}</Card.Text>
            <Card.Text>$ {animal.sexe}</Card.Text>
          </Card.Body>
        </Card><br></br></Col></>
   
   })}
        </Row>
        </Box>
    </>
  );
  }
}

export default Home;
