import { Container } from '@mui/material';
import React from 'react'
import { Form, Button } from 'react-bootstrap';
import AdminBar from '../../components/AdminBar';
 
class AddGame extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {name:'', photo: '', video:'', synopsis:'', developer: '', price:''};
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
 
  handleSubmit = (event) => {
    console.log(this.state);
    alert('A game was added: ' + JSON.stringify(this.state));
 
    fetch('http://localhost:3001/game/', {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(this.state)
        })
        .then((response) => response.json())
        .then((result) => {
        console.log(result)
        })
 
    event.preventDefault();
}
 
  render() {
    return (
<>
<AdminBar/>
<br></br>
        <Container maxWidth="sm" padding="normal">
        <Form onSubmit={this.handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" value={this.state.value} name="name" onChange={this.handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Photo</Form.Label>
    <Form.Control type="text" value={this.state.value} name="photo" onChange={this.handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Video</Form.Label>
    <Form.Control type="text" value={this.state.value} name="video" onChange={this.handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Synopsis</Form.Label>
    <Form.Control type="text" value={this.state.value} name="synopsis" onChange={this.handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Developer</Form.Label>
    <Form.Control type="text" value={this.state.value} name="developer" onChange={this.handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Price</Form.Label>
    <Form.Control type="number" value={this.state.value} name="price" onChange={this.handleChange}/>
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