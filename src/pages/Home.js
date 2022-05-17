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
      alert('Game added to your cart')
    }

  render(){
  return (
    <>
      <br></br>
      <br></br>
      <Box style={{ marginLeft: '50px', marginRight: '50px' }}>
        <Row>
<<<<<<< HEAD
        {this.state.animals.map((animal)=>{      
=======
        {this.state.games.map((game)=>{
          if(sessionStorage.getItem("token")===null || sessionStorage.getItem("role")==="user"){  
          var detaillink = "/detailGame/"+game.gameId;
      
>>>>>>> origin/edgar
          return<>
          <Col>
          <Card style={{ width: '15rem'}} >
          <Card.Img variant="top" src={animal.photo} />
          <Card.Body>
<<<<<<< HEAD
            <Card.Title>{animal.name}</Card.Title>
            <Card.Text>{animal.level}</Card.Text>
            <Card.Text>{animal.type}</Card.Text>
            <Card.Text>$ {animal.sexe}</Card.Text>
          </Card.Body>
        </Card><br></br></Col></>
   
   })}
=======
            <Card.Title>{game.name}</Card.Title>
            <Card.Text>{game.synopsis}</Card.Text>
            <Card.Text>{game.developer}</Card.Text>
            <Card.Text>$ {game.price}</Card.Text>
            <Button style={{ margin: '15px'}} variant="primary" name={game.gameId+','+game.name+','+game.developer+','+game.price} onClick={this.addToCart}>Add to cart</Button>
            <Button style={{ margin: '15px'}} variant="primary" href={detaillink}>Details</Button>
          </Card.Body>
        </Card><br></br></Col></>
   } 
   else{
    var updatelink = "/updateGame/"+game.gameId;
    detaillink = "/detailGame/"+game.gameId;
    return<>
    <Col>
    <Card style={{ width: '15rem'}}>
    <Card.Img variant="top" src={game.photo}/>
    <Card.Body>
      <Card.Title>{game.name}</Card.Title>
      <Card.Text>{game.synopsis}</Card.Text>
      <Card.Text>{game.developer}</Card.Text>
      <Card.Text>$ {game.price}</Card.Text>
      <Button variant="primary" href={updatelink} style={{ margin: '15px'}}>Update</Button>
      <Button variant="primary" href={detaillink} style={{ margin: '15px'}}>Details</Button>

    </Card.Body>
  </Card><br></br></Col></>
   }})}
>>>>>>> origin/edgar
        </Row>
        </Box>
    </>
  );
  }
}

export default Home;
