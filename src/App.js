import { useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import data from './data';
import ItemContainer from './ItemContainer';


function App() {
  const [items, setItems] = useState(data)

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href='#home'>Chang's Shop</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href='#features'>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='MainPage'></div>
      <div>
        <ItemContainer items={items}/>
      </div>

    </div>
  );
}

export default App;
