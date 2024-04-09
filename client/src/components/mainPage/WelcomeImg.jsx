import "./WelcomeImg.css"

function WelcomeImg(){

  return (
    <div className="main-welcome-img">
      <div className="welcome-img-text-box">
        <div className="welcome-img-flex-box">
          <h1>Kebab Super King</h1>
          <h2>Najlepszy Kebab w Olsztynie!</h2>
        </div>
      </div>
      <img src="./slider/kebabSlider1.jpeg"/>
    </div>
  )
}
export default WelcomeImg;