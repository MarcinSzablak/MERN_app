import './Slider.css';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

function Slider() {

  return (
    <Container>
        <Carousel>
            <Carousel.Item interval={1000}>
                <img className="slider-img" src='./slider/kebabSlider1.jpeg'/>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img className="slider-img" src='./slider/kebabSlider2.jpeg'/>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img className="slider-img" src='./slider/KebabSlider3.jpeg'/>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </Container>
  )
}

export default Slider;