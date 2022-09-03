import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar({admin, setAdmin, onSearch}) {
  function handleChange(e) {
    onSearch(e.target.value)
  }
  
  return(
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>Chang's Shop</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
            {admin? <Nav.Link as={Link} to="/new">Add</Nav.Link> : null}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
            />
          </Form>
          &nbsp;
          <Button onClick={()=>setAdmin(prev=>!prev)}>{admin? "Guest" : "Admin"}</Button>
        </Container>
      </Navbar>
  )
}

export default NavBar