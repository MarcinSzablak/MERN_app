import './AdminPanel.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Products from '../components/menuPage/Products';

function AdminPanel() {
  return (
    <>
        <NavBar></NavBar>
        <div className='admin-panel-main'>
            <Products></Products>
        </div>
        <Footer></Footer>
    </>
  )
}

export default AdminPanel;