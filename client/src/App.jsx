import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/NavBar'
import TestUser from './components/TestUser';
import NavBar from './components/NavBar';
import Slider from './components/mainPage/Slider';
import Footer from './components/Footer';

function App() {


  return (
    <>
      <NavBar></NavBar>
      <Slider></Slider>
      <Footer></Footer>
      {/* <TestUser></TestUser> */}
    </>
  )
}

export default App
