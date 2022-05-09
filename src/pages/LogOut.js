import React, { Component } from 'react'
import NavBar from "../components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Grid,Button } from '@mui/material';

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
      <h1>Are you sure you want to logout?</h1>
      <br></br>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Button variant="contained" color="primary">Yes!</Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" color="error">No, thanks!</Button>
        </Grid>
      </Grid>
    </Container>
    </>
        );
      }
    }
    

export default LogOut;
