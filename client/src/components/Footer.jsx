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
      <div className="footer-top">
        <div className="footer-media-box">
          {
            medias.map((media)=>{
              return(
                <a
                  key={media.Id}
                  href={media.Href}
                  target="_blank"
                  className="footer-media"
                >
                  <FontAwesomeIcon icon={media.Icon} size="2xl" style={{color:"fff"}} />
                </a>
              )
            })
          }
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <a href="#Contact">Contact</a>
            </li>
            <hr/>
            <li>
              <a href="#About Us">About Us</a>
            </li>
            <hr/>
            <li>
              <a href="#PrivacyPolicy">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <Navbar.Brand href="#Home" className='footer-brand'><img
          alt="logo"
          src="/logo.png"
          width="55"
          height="50"
      />
      </Navbar.Brand>
      <div className="github">
        <a href="https://github.com/MarcinSzablak/MERN_app">
          <FontAwesomeIcon icon={faGithub} size="xl" style={{color:"fff"}}/>
        </a>
        <a href="https://github.com/MarcinSzablak/MERN_app"
          style={{marginLeft:"5%"}}>GitHub</a>
      </div>
    </div>
  )
}

export default Footer;