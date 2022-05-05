import React, { Component } from 'react'
import NavBar from "../components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Col, Row } from 'react-bootstrap';

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

  render(){
  return (
    <>
      <NavBar/>
      {/* <form action="../../post" method="post" 
              className="form">
          <button type="submit">Connected?</button>
        </form> */}
        <Row>
        {this.state.games.map((game)=>{
          return<>
          <Col>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={game.photo} />
          <Card.Body>
            <Card.Title>{game.name}</Card.Title>
            <Card.Text>{game.synopsis}</Card.Text>
            <Button variant="primary">$ {game.price}</Button>
          </Card.Body>
        </Card></Col></>
        })}
        </Row>
    </>
  );
  }
}

export default Home;
