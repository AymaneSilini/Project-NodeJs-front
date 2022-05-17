import { Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import React from 'react'
import { Form, Button } from 'react-bootstrap';
import NavBar from '../components/NavBar';
 
class Profile extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = { user:[], alias:'', firstname: '', lastname:'', mail:''};
  }

  componentDidMount() {
    var url = 'http://localhost:3001/user/'+sessionStorage.getItem('userId');
    console.log(url)
    fetch(url)
            .then(res => {
                return res.json()
             })
            .then(user => { 
                //console.log(platforms); 
                this.setState({ user })
                //console.log(user.synopsis);
             });

  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    var url = 'http://localhost:3001/user/'+sessionStorage.getItem('userId');
    
    fetch(url, {
        method: "PUT",
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
      <h1>My Personal Data</h1>
      <br></br>
        <Form onSubmit={this.handleSubmit}>
  <Form.Group className="mb-3">
    <Form.Label>Alias</Form.Label>
    <Form.Control type="text" defaultValue={this.state.user.alias} name="alias" onChange={this.handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" defaultValue={this.state.user.firstname} name="firstname" onChange={this.handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" defaultValue={this.state.user.lastname} name="lastname" onChange={this.handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Email</Form.Label>
    <Form.Control type="text" defaultValue={this.state.user.mail} name="mail" onChange={this.handleChange}/>
  </Form.Group>
  {/* <Form.Group className="mb-3">
    <Form.Label>Password</Form.Label>
    <Form.Control type="text" defaultValue={this.state.user.password} name="password" onChange={this.handleChange}/>
  </Form.Group> */}

  <Button variant="primary" type="submit" defaultValue="Submit">
    Update
  </Button>
</Form>
</Container>
</>
    );
  }
}
 
export default Profile;