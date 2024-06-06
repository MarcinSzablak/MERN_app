import './NavBar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useCookies } from 'react-cookie';

function NavBar() {
  const links = [
    {Id:1, Name: "About us", Link: "AboutUs"},
    {Id:2, Name: "Restaurants", Link: "Restaurants"},
    {Id:3, Name: "Menu", Link: "Menu"},
    {Id:4, Name: "Promotions", Link: "Promotions"},
    {Id:5, Name: "Contact", Link: "Contact"},
    {Id:6, Name: "Admin", Link: "Admin"},
  ]

  const [cookie] = useCookies(["admin"]);
  //zmienić nazwe KebabSlider

  return (
    <Navbar
      variant='pills'
      activeKey="1"
      className='NavBar'
      data-bs-theme="dark"
    >
        <Navbar.Brand href="/" className='brand-navbar'><img
            alt="logo"
            src="/logo.png"
            width="33"
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
          {cookie.admin!=null ? <Nav.Link href="AdminPanel">AdminPanel</Nav.Link> : null}
        </Nav>
    </Navbar>
  )
}

export default NavBar;