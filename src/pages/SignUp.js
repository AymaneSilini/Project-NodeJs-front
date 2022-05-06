import { Container } from '@mui/material';
import React from 'react'
import { Form, Button } from 'react-bootstrap';
import NavBar from '../components/NavBar';
 
class AddGame extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {alias:'', lastname: '', firstname:'', mail:'', password: ''};
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
 
  handleSubmit = (event) => {
    console.log(this.state);
    
    fetch('http://localhost:3001/user/register',{
      method: "POST",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(this.state)
    })
    .then((response) => response.json())
    .then((result) => {
      console.log(result)
      alert('A user was added: ' + JSON.stringify(this.state));
    })
 
    event.preventDefault();
}
 
  render() {
    return (
<>
<NavBar/>
<br></br>
        <Container maxWidth="sm" padding="normal">
        <Form onSubmit={this.handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>User Name</Form.Label>
    <Form.Control type="text" value={this.state.value} name="alias" onChange={this.handleChange}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" value={this.state.value} name="lastname" onChange={this.handleChange}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" value={this.state.value} name="firstname" onChange={this.handleChange}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" value={this.state.value} name="mail" onChange={this.handleChange}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" value={this.state.value} name="password" onChange={this.handleChange}/>
  </Form.Group>

  <Button variant="primary" type="submit" value="Submit">
    Save
  </Button>
</Form>
</Container>
</>
    );
  }
}
 
export default AddGame;