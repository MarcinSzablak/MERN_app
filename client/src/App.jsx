import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/mainPage/NavBar'
import TestUser from './components/TestUser';
import NavBar from './components/NavBar'
import Slider from './components/mainPage/Slider';

function App() {


  return (
    <>
      <NavBar></NavBar>
      <Slider></Slider>
      {/* <TestUser></TestUser> */}
    </>
  )
}

export default App
