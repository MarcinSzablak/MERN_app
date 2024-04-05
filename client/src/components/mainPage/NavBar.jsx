import './NavBar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function NavBar() {
  const links = [
    {Id:1, Name: "About us", Link: "#AboutUs"},
    {Id:2, Name: "Menu", Link: "#Menu"},
    {Id:3, Name: "News", Link: "#News"}
  ]

  return (
    <Navbar
      variant='pills'
      activeKey="1"
      className='NavBar'
      data-bs-theme="dark"
    >
        <Navbar.Brand href="#Home" className='Brand'><img
            alt=""
            src="/kebab-transformed.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
        />{' '}
        Kebab
        </Navbar.Brand>
        <Nav style={{justifyContent:"center", width:"100%", position:"absolute"}}>
          {
            links.map((link)=>{
              return(
                <Nav.Link key={link.Id} href={link.Link}>
                  {link.Name}
                </Nav.Link>
              )
            })
          }
        </Nav>
    </Navbar>
  )
}

export default NavBar;