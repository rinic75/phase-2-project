import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href='#home'>JFF Pro Shop</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href='#features'>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='MainPage'></div>
      <div>
        <Container>
          <Row md={4}>
            <Col>
              <img src='' alt='Name' />
              <h2>Name</h2>
              <p>Description</p>
            </Col>
            <Col xs={6}>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>
      </div>

    </div>
  );
}

export default App;
