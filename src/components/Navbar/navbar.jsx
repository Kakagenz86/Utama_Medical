import './style.css'
import Logo from '../../assets/image/Logo.png'
import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
            <nav className="navbar sticky-top navbar-expand-sm">
                <div className="container">
                    <a href="/">
                        <img className="logo" src={Logo} alt="utama-medical"/>
                    </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="offcanvas offcanvas-end sidebar" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title fw-bold fs-2" id="offcanvasNavbarLabel">Utama Medical</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="navbar-nav ms-auto nav-link-wrapper">
                            <Link className="nav-link" to='/'>Beranda</Link>
                            <Link className="nav-link" to='/about'>Tentang</Link>
                            <Link className="nav-link" to='/product'>Produk</Link>
                            <Link className="nav-link" to='/permission'>Perizinan</Link>
                            <Link className="nav-link" to='/contact'>Kontak</Link>
                            {/* <Link className="btn-nav-admin" to='/signin'>Admin</Link> */}
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
    )
}

export default NavigationBar