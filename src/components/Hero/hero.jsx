import './style.css'
import Logo2 from '../../assets/image/Logo2.png'
import HeroContent from '../HeroContent/herocontent';

const Hero = () => {
    return (
            <div className='hero'>
                <div className='hero-wrapper container'>
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