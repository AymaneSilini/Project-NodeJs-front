import React, { Component } from 'react'
import NavBar from "../components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Col, Row, Form, FormControl} from 'react-bootstrap';
import { Box } from '@mui/material';
import { Container } from '@mui/material';
import CommentBox from "../components/CommentBox";

class DetailGame extends Component {
  constructor(props){
    super(props);
    this.state ={game: []
  };
   }

  componentDidMount() {
    var url = window.location.href;
    var urlDivided = url.split('/');
    url = 'http://localhost:3001/game/'+urlDivided[urlDivided.length-1];
    //console.log(url);
    fetch(url)
            .then(res => {
                return res.json()
              })
            .then(game => { 
                this.setState({game})
                //console.log(game); 
              });
          }

 render(){
  return (
    <>
      <NavBar/>
      <br></br>
      <Container maxWidth="sm" padding="normal">
      <Box style={{ marginLeft: '50px', marginRight: '50px' }}>
        <Row>     
          <>
          <Col>
          <Card style={{ width: '345'}} >
          <Card.Header>
              <h2>{this.state.game.name}</h2>
              </Card.Header>    
          <Card.Img variant="top" src={this.state.game.photo} />
          <Card.Body>
            <Card.Text>Synopsis : {this.state.game.synopsis}</Card.Text>
            <Card.Text>Platform : {this.state.game.platform}</Card.Text>
            <Card.Text>Developper : {this.state.game.developer}</Card.Text>
            <Card.Text>Price : ${this.state.game.price}</Card.Text>

    </Card.Body>
  </Card><br></br></Col></>

        </Row>
        </Box>
        <CommentBox/>
        </Container>
        

    </>
  );
  }
}

export default DetailGame;
