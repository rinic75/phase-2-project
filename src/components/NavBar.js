import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function NavBar() {
  const [admin, setAdmin] = useState(false)
  return(
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>Chang's Shop</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/order">Order</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
            {admin? <Nav.Link as={Link} to="/new">Add</Nav.Link> : null}
        
          </Nav>
          <button onClick={()=>setAdmin(prev=>!prev)}>{admin? "Admin" : "Guest"}</button>
        </Container>
      </Navbar>
  )
}

export default NavBar