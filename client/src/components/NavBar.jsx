import './NavBar.css'
import Nav from 'react-bootstrap/Nav'


function NavBar() {

  return (
    <Nav variant='pills' activeKey="1">
        <Nav.Item>
            <Nav.Link>
                Kebab
            </Nav.Link>
        </Nav.Item>
    </Nav>
  )
}

export default NavBar;