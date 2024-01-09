import './style.css';
import Carousel from 'react-bootstrap/Carousel';
import img8 from '../../assets/image/img8.png'
import img9 from '../../assets/image/img9.png'
import img10 from '../../assets/image/img10.png'
import img11 from '../../assets/image/img11.png'

const WhoWe = () => {
    return (
        <div className='whowe-wrapper'>
            <div className='whowe container'>
                <div>
                    <h1 className='text-light'>Siapa Kami?</h1>
                    <p className="text-whowe">Utama Medical berdiri pada Agustus 2021. bertempat di Gilimanuk, Bali, Indonesia. perusahaan kami bergerak dalam bidang perbaikan alat kesehatan</p>
                </div>
                <div>
                    <Carousel className='carousel-wrapper-whowe'>
                        <Carousel.Item>
                            <img
                                className="carousel-whowe"
                                src={img8}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="carousel-whowe"
                                src={img9}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="carousel-whowe"
                                src={img10}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="carousel-whowe"
                                src={img11}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default WhoWe;
