import React, { Component } from 'react'
import NavBar from "../components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Col, Row, Form, FormControl} from 'react-bootstrap';
import { Box } from '@mui/material';
import { Container } from '@mui/material';

class Home extends Component {
  constructor(props){
    super(props);
    this.state ={games: [], search:'', showButton:false
  };
   }

   handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
    }
   
  handleSubmit = (event) => {
  var url = 'http://localhost:3001/game/name/'+ this.state.search
  fetch(url)
  .then((response) => response.json())
  .then(games => { 
    //console.log(games); 
    this.setState({ games })
    this.state.showButton = true;
  }) 
 
  event.preventDefault();
  }

  componentDidMount() {
    fetch('http://localhost:3001/game')
            .then(res => {
                return res.json()
              })
            .then(games => { 
                //console.log(games); 
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
      alert('Game added to your cart')
    }

  render(){
  return (
    <>
      <NavBar/>
      <br></br>
      <Container maxWidth="sm" padding="normal">
      <Form className="d-flex" onSubmit={this.handleSubmit}>
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={this.state.search}
          onChange={this.handleChange}
          name="search"
        />
        <Button variant="outline-success" type="submit" value="Submit">Search</Button>
        <Button variant="outline-danger" type="submit" style={{visibility: this.state.showButton ? 'visible' : 'hidden' }} value="Submit" href='/home'>Reset search</Button>


        </Form>
      </Container>
      <br></br>
      <Box style={{ marginLeft: '50px', marginRight: '50px' }}>
        <Row>
        {this.state.games.map((game)=>{
          if(sessionStorage.getItem("token")===null || sessionStorage.getItem("role")==="user"){  
          var detaillink = "/detailGame/"+game.gameId;
      
          return<>
          <Col>
          <Card style={{ width: '15rem'}} >
          <Card.Img variant="top" src={game.photo} />
          <Card.Body>
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
        </Row>
        </Box>
    </>
  );
  }
}

export default Home;
