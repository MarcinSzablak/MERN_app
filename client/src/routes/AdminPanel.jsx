import './AdminPanel.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function AdminPanel() {
  return (
    <>
        <NavBar></NavBar>
        <div className='admin-panel-main'>
            <p>AdminPanel</p>
        </div>
        <Footer></Footer>
    </>
  )
}

export default AdminPanel;