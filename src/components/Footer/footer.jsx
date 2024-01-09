import './style.css'
import { Link } from 'react-router-dom';
import Logo2 from '../../assets/image/Logo2.png'

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="row container footer-header">
                    <div className="col-md-6 col-sm-12 col-xl-3 mb-3 footer-address">
                        <h1>Utama Medical</h1>
                        <p className="footer-text-wrapper">JI. Duyung Lingk Asri Barat Gg2, Gilimanuk, Kec. Melaya, Kab. Jembrana — Bali</p>
                        <div className='d-flex mt-4'>
                                <i className="bi bi-telephone-fill fs-4"></i>
                                <p className='ps-2 pt-1'>082236819237</p>
                        </div>
                        <div className='d-flex'>
                                <i className="bi bi-envelope-fill fs-4"></i>
                                <p className='ps-2 pt-1'>muhamad.rizalutomo@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-xl-3 footer-wrapper-link">
                            <h2>Tautan</h2>
                            <Link className="footer-link" to='/'>Beranda</Link>
                            <Link className="footer-link" to='/about'>Tentang</Link>
                            <Link className="footer-link" to='/product'>Produk</Link>
                            <Link className="footer-link" to='/permission'>Perizinan</Link>
                            <Link className="footer-link" to='/contact'>Kontak</Link>
                    </div>
                    <div className="col-md-6 col-sm-12 col-xl-3 mb-5">
                        <p className="fw-bold">Connect with us</p>
                    <div>
                        <a href="https://www.facebook.com/muhamad.r.pratama.79">
                            <i className="bi bi-facebook footer-icon"></i>
                        </a>
                        <a href="https://www.instagram.com/rizalgenz/">
                            <i className="bi bi-instagram footer-icon"></i>
                        </a>
                        <a href="mailto:muhamad.rizalutomo@gmail.com">
                            <i className="bi bi-envelope footer-icon"></i>
                        </a>
                        <a href="https://wa.me/+6282236819237">
                            <i className="bi bi-whatsapp footer-icon"></i>
                        </a>
                    </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-xl-3 copyright">
                        <p className="footer-text-wrapper">Copyright Utama Medical 2021</p>
                        <img src={Logo2} className='footer-logo' alt="utama-medical-logo" />
                    </div>
                </div>
            </div>
                <div className='d-flex justify-content-center bg-black pt-3'>
                    <p className='text-light'>Copyright © 2021 – 2024 Utama Medical. All rights reserved. | Website by Muhamad Kaka Hardiansyah.</p>
                </div>
        </div>

    );
}

export default Footer;