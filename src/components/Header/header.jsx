import './style.css';
import Logo2 from '../../assets/image/Logo2.png';

const Header = ({ title }) => {
    return (
        <div className='d-flex mt-3 justify-content-between container align-items-center'>
            <h3 className='fw-bold'>{title}</h3>
            <img className='logo-header' src={Logo2} alt="logo-utama-medical" />
        </div>
    );
}

export default Header;
