import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/NavBar'
import TestUser from './components/TestUser';
import NavBar from './components/NavBar'
import MainImage from './components/mainPage/MainImage';

function App() {


  return (
    <>
      <NavBar></NavBar>
      <MainImage></MainImage>
      {/* <TestUser></TestUser> */}
    </>
  )
}

export default App
