import React from 'react'
import { Container, Navbar, NavDropdown } from 'react-bootstrap';

const AdminBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">
          Admin
      </Navbar.Brand>
      <NavDropdown title="Admin" id="navbarScrollingDropdown">
          <NavDropdown.Item href="/addGame">Add Game</NavDropdown.Item>
          <NavDropdown.Item href="/addCategory">Add Category</NavDropdown.Item>
          <NavDropdown.Item href="/addUser">Add User</NavDropdown.Item>
          <NavDropdown.Item href="/addPlatform">Add Plaform</NavDropdown.Item>
          <NavDropdown.Item href="/getUser">Get User</NavDropdown.Item>

        </NavDropdown>
    </Container>
  </Navbar>
  )
}

export default AdminBar