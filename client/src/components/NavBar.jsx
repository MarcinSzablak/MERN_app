import './NavBar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function NavBar() {

  return (
    <Navbar
      variant='pills'
      activeKey="1"
      bg="primary"
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
        <Container>
          <Nav>
            <Nav.Link href="#AboutUs">About us</Nav.Link>
            <Nav.Link href="#Menu">Menu</Nav.Link>
            <Nav.Link href="#News">Menu</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
  )
}

export default NavBar;