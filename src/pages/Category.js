import React, { Component } from 'react'
import NavBar from "../components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Col, Row } from 'react-bootstrap';
import { Box } from '@mui/material';

class Category extends Component {
  constructor(props)
  {
    super(props);
    this.state ={games: [], categories: [], platforms: ''};
   }
   componentDidMount() {
    var url = window.location.href;
    var urlDivided = url.split('/');
    url = 'http://localhost:3001/game/'+urlDivided[urlDivided.length-2]+'/'+urlDivided[urlDivided.length-1];
    fetch(url)
            .then(res => {
                return res.json()
             })
            .then(games => { 
                //console.log(games); 
                this.setState({ games })
             });

             fetch('http://localhost:3001/category/'+urlDivided[urlDivided.length-1])
             .then(res => {
                 return res.json()
             })
             .then(categories => { 
                 //console.log(categories); 
                 this.setState({ categories })
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
          
          return<>
          <Col key={game._id}>
          <Card style={{ width: '15rem'}} >
          <Card.Img variant="top" src={game.photo} />
          <Card.Body>
            <Card.Title>{game.name}</Card.Title>
            <Card.Text>Category: {this.state.categories.value}</Card.Text>
            <Card.Text>Platform: {this.plat}</Card.Text>
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
