import './style.css'
import Logo from '../../assets/image/Logo.png'
import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
            <div className="navbar d-flex align-items-center align-content-center sticky-top">
                <div className="container">
                    <a href="/">
                        <img className="logo" src={Logo} alt="utama-medical"/>
                    </a>
                        <div className="d-flex nav-link-wrapper">
                            <Link className="nav-link" to='/'>Beranda</Link>
                            <Link className="nav-link" to='/about'>Tentang</Link>
                            <Link className="nav-link" to='/product'>Produk</Link>
                            <Link className="nav-link" to='/permission'>Perizinan</Link>
                            <Link className="nav-link" to='/contact'>Kontak</Link>
                        </div>
                </div>
            </div>
    )
}

export default NavigationBar