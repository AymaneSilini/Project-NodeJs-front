import { Navbar, Container, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import Box from '@mui/material/Box';
import React, {Component} from 'react'
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

class NavBar extends Component {
  constructor(props)
  {
    super(props);
    this.state ={categories: []};
    
   }
   componentDidMount() {
     var loged='';
     loged = localStorage.getItem('loged');
     if(loged===null||loged===undefined||loged===''){
       loged=false
     }
    fetch('http://localhost:3001/category/')
            .then(res => {
                return res.json()
             })
            .then(categories => { 
                //console.log(categories); 
                this.setState({ categories })
             });
  }

  logout(){
    alert('Logout')
  }

render(){
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="/">Stim - Game Shop</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <Nav.Link href="/signup">Sign up</Nav.Link>


        <NavDropdown title="Categories" id="navbarScrollingDropdown">
        {this.state.categories.map((category)=>{
          var link = "/category/"+category.name;
          return<>
          <NavDropdown.Item href={link} className="text-capitalize">{category.name}</NavDropdown.Item>
          </>})}
          
        </NavDropdown>
        <NavDropdown title="Admin" id="navbarScrollingDropdown">
          <NavDropdown.Item href="/addGame">Add Game</NavDropdown.Item>
          <NavDropdown.Item href="/addCategory">Add Category</NavDropdown.Item>
          <NavDropdown.Item href="/addUser">Add User</NavDropdown.Item>
          <NavDropdown.Item href="/addPlatform">Add Game</NavDropdown.Item>
          <NavDropdown.Item href="/getUser">Get User</NavDropdown.Item>

        </NavDropdown>
      </Nav>
      <Form className="d-flex" >
        {this.loged ? 
        <>
          <Button variant="success" href="/login" style={{marginRight: "20px"}}>Login</Button>
          <Button variant="primary" href="/signup">SignUp</Button>
        </>
        : 
        <>
          <IconButton style={{marginRight: "20px"}} color="primary" aria-label="shopping cart">
            <ShoppingCartIcon />
          </IconButton>
          <Button size="small" href="/profile" style={{marginRight: "20px"}}>My Profile</Button>
          <Button size="small" href="/logout">LogOut</Button>

        </>
        
      }
      </Form>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
    </Box>
  )}
}

export default NavBar