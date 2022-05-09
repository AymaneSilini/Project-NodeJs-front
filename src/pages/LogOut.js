import React, { Component } from 'react'
import NavBar from "../components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Grid,Button } from '@mui/material';

class LogOut extends Component {
    logout(){
      sessionStorage.clear();
      window.location.href = '/';
    }

    cancel(){
      window.location.href = '/';
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
          <Button variant="contained" color="primary" onClick={this.logout}>Yes!</Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" color="error" onClick={this.cancel}>No, thanks!</Button>
        </Grid>
      </Grid>
    </Container>
    </>
        );
      }
    }
    

export default LogOut;
