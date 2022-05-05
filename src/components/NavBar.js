import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Box from '@mui/material/Box';
import React, {Component} from 'react'

class NavBar extends Component {
  constructor(props)
  {
    super(props);
    this.state ={categories: []};
   }
   componentDidMount() {
    fetch('http://localhost:3001/category/')
            .then(res => {
                return res.json()
             })
            .then(categories => { 
                console.log(categories); 
                this.setState({ categories })
             });
         }
         render(){
          return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Stim - Game Shop</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="Categories" id="navbarScrollingDropdown">
        {this.state.categories.map((category)=>{
          return<>
          <NavDropdown.Item href="#action3">{category.name}</NavDropdown.Item>
          <NavDropdown.Divider />
          </>})}
          
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </Box>
  )}
}

export default NavBar