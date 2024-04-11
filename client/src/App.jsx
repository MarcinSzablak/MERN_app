import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/NavBar'
import TestUser from './components/TestUser';
import NavBar from './components/NavBar';
import Slider from './components/mainPage/Slider';
import Footer from './components/Footer';
import WelcomeImg from './components/mainPage/WelcomeImg';
import Products from './components/menuPage/Products';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div style={{paddingTop:'56px'}}></div>
      <WelcomeImg></WelcomeImg>
      <Products></Products>
      {/* <TestUser></TestUser> */}
      {/* <Slider></Slider> */}
      <Footer></Footer>
      
    </>
  )
}

export default App
