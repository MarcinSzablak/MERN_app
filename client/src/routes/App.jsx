import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar';
//import Slider from './components/mainPage/Slider';
import Footer from '../components/Footer';
import WelcomeImg from '../components/mainPage/WelcomeImg';
import AboutUsMainPage from '../components/mainPage/AboutUsMainPage';
import TopDishes from '../components/mainPage/TopDishes';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div style={{paddingTop:'56px'}}></div>
      <WelcomeImg></WelcomeImg>
      <AboutUsMainPage></AboutUsMainPage>
      <TopDishes></TopDishes>
      <Footer></Footer>

    </>
  )
}

export default App
