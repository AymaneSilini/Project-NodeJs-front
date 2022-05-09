import React, { Component } from 'react'
import NavBar from "../components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Col, Row } from 'react-bootstrap';
import { Box } from '@mui/material';

class Home extends Component {
  constructor(props)
  {
    super(props);
    this.state ={games: []};
   }
   componentDidMount() {
    fetch('http://localhost:3001/game/')
            .then(res => {
                return res.json()
             })
            .then(games => { 
                console.log(games); 
                this.setState({ games })
             });
         }

    addToCart= (event) => {
      if(localStorage.getItem('cart')===null){
        var cart = [];
        cart.push(event.target.name);
        localStorage.setItem("cart", JSON.stringify(cart));
      }else{
        var cart = JSON.parse(localStorage.getItem("cart"));
        cart.push(event.target.name);
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    }

  render(){
  return (
    <>
      <NavBar/>
      <br></br>
      <Box style={{ marginLeft: '50px', marginRight: '50px' }}>
        <Row>
        {this.state.games.map((game)=>{
          if(sessionStorage.getItem("token")===null || sessionStorage.getItem("role")==="user"){        
          return<>
          <Col>
          <Card style={{ width: '15rem'}} >
          <Card.Img variant="top" src={game.photo} />
          <Card.Body>
            <Card.Title>{game.name}</Card.Title>
            <Card.Text>{game.synopsis}</Card.Text>
            <Card.Text>{game.developer}</Card.Text>
            <Card.Text>$ {game.price}</Card.Text>
            <Button variant="primary" name={game.gameId+','+game.name+','+game.developer+','+game.price} onClick={this.addToCart}>Add to cart</Button>
          </Card.Body>
        </Card><br></br></Col></>
   } 
   else{
    var link = "/updateGame/"+game.gameId;
    return<>
    <Col>
    <Card style={{ width: '15rem'}} >
    <Card.Img variant="top" src={game.photo} />
    <Card.Body>
      <Card.Title>{game.name}</Card.Title>
      <Card.Text>{game.synopsis}</Card.Text>
      <Card.Text>{game.developer}</Card.Text>
      <Card.Text>$ {game.price}</Card.Text>
      <Button variant="primary" href={link}>Update</Button>
    </Card.Body>
  </Card><br></br></Col></>
   }})}
        </Row>
        </Box>
    </>
  );
  }
}

export default Home;
