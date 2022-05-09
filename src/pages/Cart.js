import React, { Component } from 'react'
import NavBar from "../components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Container from '@mui/material/Container';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PaidOutlinedIcon from '@mui/icons-material/Paid';
import { Form, Button } from 'react-bootstrap';

class Cart extends Component {
  constructor(props)
  {
    super(props);
    this.state ={games: [], total:0, user:''};
   }
   
   componentDidMount() {
        var games = JSON.parse(localStorage.getItem("cart"));
        this.setState({ games });
        var user = sessionStorage.getItem('userId');
        this.setState({ user: user });
         }

    makeOrder = (event) => {
        console.log('pay')
        console.log(this.state);
        var games2 = []
        this.state.games.map((game)=>{games2.push(game[0])})
        this.setState({ games: games2 });

        
    fetch('http://localhost:3001/order/', {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(this.state)
        })
        .then((response) => response.json())
        .then((result) => {
        console.log(result)
        alert('A order was added: ' + JSON.stringify(this.state));
        localStorage.removeItem('cart');
        //window.location.reload();
        })
        event.preventDefault();
        
    }

  render(){
  return (
    <>
      <NavBar/>
      <br></br>
      <Box style={{ marginLeft: '50px', marginRight: '50px' }}>
        
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Game</TableCell>
            <TableCell align="right">Developer</TableCell>
            <TableCell align="right">Price&nbsp;$</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.games.map((game)=>{
               var game = game.split(',');
               if(game[3]!==null){
                   var total = parseInt(game[3])+parseInt(this.state.total);
                   this.state.total = total;
               }
               
            return <>
            <TableRow key={game.index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {game[1]}
              </TableCell>
              <TableCell align="right">{game[2]}</TableCell>
              <TableCell align="right">{game[3]}</TableCell>
            </TableRow>
            </>
          })}
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">Total:</TableCell>
            <TableCell align="right">${this.state.total}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      
    </TableContainer>
        </Box>
        <br></br>
        <Form onSubmit={this.makeOrder}>
        <Container maxWidth="md"  ><Button style={{ marginLeft: '90%' }} variant="primary" type="submit" value="Submit">Pay <PaidOutlinedIcon /></Button></Container>
        </Form>
    </>
  );
  }
}

export default Cart;
