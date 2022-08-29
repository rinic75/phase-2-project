import { useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import data from './data';
import ItemContainer from './ItemContainer';
import { Route, Switch } from 'react-router-dom';


function App() {
  const [items, setItems] = useState(data)

  return (
    <div className="App">

      <Route />

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href='#home'>Chang's Shop</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href='#features'>Detail</Nav.Link>
            <Nav.Link>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <div className='MainPage'>
            <div class="container-fluid text-light p-5">
              <div class="container p-5">
                <h1 class="display-3" fw->Welcome to Chang's Shop</h1>
                  <p>Local Market</p>
              </div>
            </div>
          </div>
          <div>
            <ItemContainer items={items} />
          </div>
        </Route>
        <Route path="/detail">
          <div>Detail Page</div>
        </Route>
        <Route path="/cart">
          <div>Cart Page</div>
        </Route>

      </Switch>
    </div>

  );
}

export default App;
