import './style.css'
import Logo2 from '../../assets/image/Logo2.png'
import Aos from 'aos';
import HeroContent from '../HeroContent/herocontent';

const Hero = () => {
    Aos.init({ duration: 1000 })
    return (
            <div className='hero'>
                <div data-aos="zoom-out" className='hero-wrapper container'>
                    <div>
                        <h1 className='title-hero'>UTAMA MEDICAL</h1>
                        <h6>Medical Equipment, Sparepart, Service & Maintenance</h6>
                    </div>
                    <img className='logo-hero' src={Logo2} alt="logo-utama-medical" />
                </div>
                    <HeroContent/>
            </div>
    );
}

export default Hero;