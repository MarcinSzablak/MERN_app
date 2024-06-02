import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './Admin.css'

function Admin() {
  return (
    <>
      <NavBar></NavBar>
      <div style={{paddingTop:'56px'}}></div>
      <div className='admin-main'>
        <h1>Zaloguj się</h1>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Admin