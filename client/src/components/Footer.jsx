import "./Footer.css"
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faSquareFacebook, faSquareInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'



function Footer(){

    const medias = [
      {Id:1, Href: "https://www.facebook.com/kebabsuperking/", Icon: faSquareFacebook},
      {Id:2, Href: "", Icon: faSquareInstagram},
      {Id:3, Href: "", Icon: faLinkedin},
    ]

    return (
      <div className="main-footer">
        <div className="media">
          {
            medias.map((media)=>{
              return(
                <a
                  key={media.Id}
                  href={media.Href}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={media.Icon} size="2xl" style={{color:"fff"}} />
                </a>
              )
            })
          }
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
            width="55"
            height="50"
        />
        </Navbar.Brand>
        <div className="github">
          <a href="https://github.com/MarcinSzablak/MERN_app">
            <FontAwesomeIcon icon={faGithub} size="2xl" style={{color:"fff"}}/>
          </a>
          <a href="https://github.com/MarcinSzablak/MERN_app">GitHub</a>
        </div>
      </div>
    )
  }

  export default Footer;