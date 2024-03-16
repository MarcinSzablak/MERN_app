import './NavBar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function NavBar() {

  return (
    <Navbar
      fluid
      variant='pills'
      activeKey="1"
      style={{background:"var(--green)"}}
      data-bs-theme="dark"
    >
        <Container>
          <Navbar.Brand href="#Home"><img
              alt=""
              src="/kebab-transformed.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
          />{' '}
          Kebab
          </Navbar.Brand>
        </Container>
        <Container style={{justifyContent:"center"}}>
          <Nav>
            <Nav.Link href="#AboutUs">About us</Nav.Link>
            <Nav.Link href="#Restaurants">Restaurants</Nav.Link>
            <Nav.Link href="#Menu">Menu</Nav.Link>
            <Nav.Link href="#News">News</Nav.Link>
            <Nav.Link href="#Galary">Galary</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Container>
        <Container style={{justifyContent:"flex-end"}}>
          <Button variant="outline-light" href='#login'>Login</Button>{' '}
        </Container>
    </Navbar>
  )
}

export default NavBar;