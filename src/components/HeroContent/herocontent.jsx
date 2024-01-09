import './style.css'
import Carousel from 'react-bootstrap/Carousel';
import img5 from '../../assets/image/img5.jpeg';
import img6 from '../../assets/image/img6.jpeg';
import img7 from '../../assets/image/img7.png'

const HeroContent = () => {
    return (
        <div className='herocontent'>
            <Carousel className='carousel-hero-wrapper'>
                <Carousel.Item>
                    <img
                    className="carousel-hero"
                    src={img5}
                    alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="carousel-hero"
                    src={img6}
                    alt="Second slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="carousel-hero"
                    src={img7}
                    alt="Second slide"/>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default HeroContent;