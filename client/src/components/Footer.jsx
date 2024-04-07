import "./Footer.css"
import Navbar from 'react-bootstrap/Navbar';

function Footer(){
    return (
      <div className="main-footer">
        <div className="media">
          <a
          href="https://www.facebook.com/kebabsuperking/"
          target="_blank"
          >facebook</a>
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="#Contact">Contact</a>
            </li>
            <li>
              <a href="#About Us">About Us</a>
            </li>
            <li>
              <a href="#PrivacyPolicy">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <Navbar.Brand href="#Home" className='brand'><img
            alt="logo"
            src="/logo.png"
            width="30"
            height="30"
        />
        </Navbar.Brand>
        <div className="github">
          <a href="https://github.com/MarcinSzablak/MERN_app">GitHub</a>
        </div>
      </div>
    )
  }

  export default Footer;