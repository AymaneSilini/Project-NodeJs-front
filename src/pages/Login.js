import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from '@mui/material';
import { Form, Button } from 'react-bootstrap';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {username:'', password: '', grant_type: 'password', client_id:2, client_secret: 'gEDXw2myBCuaD0M8AdvSO9Voautn38WmOzYM8nPK'};
      }
    
      handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
      }
     
      handleSubmit = (event) => {
        fetch('/auth/loginstore',{
          method: "POST",
        headers: {
            'Content-type': 'application/json',
            'Accept':'application/json'          },
        body: JSON.stringify(this.state)
        })
        .then((response) => response.json(),
        
        )
        .then((result) => {
            sessionStorage.setItem("token", result.access_token);
            console.log(sessionStorage.getItem("token"));
            window.location.href = '/home';

          
        })
     
        event.preventDefault();
    }
     
      render() {
        return (
    <>
    <br></br>
            <Container maxWidth="sm" padding="normal">
            <Form onSubmit={this.handleSubmit}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" value={this.state.value} required name="username" onChange={this.handleChange}/>
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control type="password" value={this.state.value} required name="password" onChange={this.handleChange}/>
      </Form.Group>
    
      <Button variant="primary" type="submit" value="Submit">
        Connexion
      </Button>
    </Form>
    </Container>
    </>
        );
      }
    }
    

export default Login;
