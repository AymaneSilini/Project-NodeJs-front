import { Container } from '@mui/material';
import React from 'react'
import { Form, Button } from 'react-bootstrap';
import AdminBar from '../../components/AdminBar';
 
class AddCategory extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {name:''};
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
 
  handleSubmit = (event) => {
    console.log(this.state);
    alert('A category was added: ' + JSON.stringify(this.state));
 
    fetch('http://localhost:3001/category/', {
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
        <h1>Form to add a category</h1>
        <br></br>
        <Form onSubmit={this.handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" value={this.state.value} name="name" onChange={this.handleChange}/>
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
 
export default AddCategory;