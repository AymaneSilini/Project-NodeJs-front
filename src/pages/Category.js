import React, { Component } from 'react'
import NavBar from "../components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Col, Row } from 'react-bootstrap';
import { Box } from '@mui/material';

class Category extends Component {
  constructor(props)
  {
    super(props);
    this.state ={games: [], categoryName: ''};
   }
   componentDidMount() {
    var url = window.location.href;
    url = url.split('/');
    url = 'http://localhost:3001/game/'+url[url.length-2]+'/'+url[url.length-1];
    fetch(url)
            .then(res => {
                return res.json()
             })
            .then(games => { 
                console.log(games); 
                this.setState({ games })
             });
         }

  render(){
  return (
    <>
      <NavBar/>
      <br></br>
      <Box style={{ marginLeft: '50px', marginRight: '50px' }}>
        <Row>
        {this.state.games.map((game)=>{
          fetch('http://localhost:3001/category/'+game.category)
          .then(res => {
              return res.json()
           })
          .then(category => { 
            console.log(category.name);
           })

           fetch('http://localhost:3001/platform/'+game.platform)
          .then(res => {
              return res.json()
           })
          .then(platform => { 
            console.log(platform.name);
           })

          return<>
          <Col>
          <Card style={{ width: '15rem'}} >
          <Card.Img variant="top" src={game.photo} />
          <Card.Body>
            <Card.Title>{game.name}</Card.Title>
            <Card.Text>Category: {game.category}</Card.Text>
            <Card.Text>Platform: {game.platform}</Card.Text>
            <Card.Text>Developer: {game.developer}</Card.Text>
            <Button variant="primary">$ {game.price}</Button>
          </Card.Body>
        </Card><br></br></Col></>
        })}
        </Row>
        </Box>
    </>
  );
  }
}

export default Category;
