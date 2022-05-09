import React, { Component } from 'react'
import NavBar from "../components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from '@mui/material';
import { Button } from 'react-bootstrap';

class LogOut extends Component {
    constructor(props) {
        super(props);
        this.state = {mail:'', password: ''};
      }
    
      handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
      }
     
      handleSubmit = (event) => {
       
        fetch('http://localhost:3001/user/logout',{
          method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(this.state)
        })
        .then((response) => response.json(),
        )
        .then((result) => {
          alert('Welcome ' + result.alias);
          sessionStorage.setItem("token", result.token);
          //retrieve and stock the token, then use it for securised routes
        })
     
        event.preventDefault();
    }
     
      render() {
        return (
    <>
    <NavBar/>
    <br></br>
    <Container maxWidth="sm" padding="normal">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
      </Grid>
      <Button color="primary">Yes!</Button>
      <Button color="danger">No, thanks!</Button>
    </Container>
    </>
        );
      }
    }
    

export default LogOut;
