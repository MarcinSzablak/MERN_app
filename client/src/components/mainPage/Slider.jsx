import './Slider.css';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

function Slider() {
//
    const images = [
        {Id: 1, Src:"kebabSlider1.jpeg"},
        {Id: 2, Src:"kebabSlider2.jpeg"},
        {Id: 3, Src:"kebabSlider3.jpeg"}
    ]

  return (
    <Carousel
        className='slide'
        controls={false}
        indicators={false}
        interval={4000}>
    {
        images.map((image)=>{
            return(
            <Carousel.Item
                key={image.Id}
                >
                <img
                    className="slide-img"
                    src={"./slider/"+ image.Src}/>
            </Carousel.Item>
            )
        })
    }
    </Carousel>
  )
}

export default Slider;