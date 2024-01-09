import './style.css'
import Header from '../Header/header';
import Aos from 'aos';

const Contact = () => {
    Aos.init({ duration: 1000 })

    return (
        <div className='container contact'>
            <Header title='Hubungi Kami'/>

            <div data-aos="zoom-out" className='d-flex gap-5'>
                <div>
                    <a className='contact-wa-1' href="https://wa.me/+6282236819237">
                        <i className="bi bi-whatsapp fs-5"></i>
                        <p className='text-wa-contact'>Konsultasi</p>
                    </a>
                </div>
                <div>
                    <a className='contact-wa-2' href="https://wa.me/+6282236819237">
                        <i className="bi bi-whatsapp fs-5"></i>
                        <p className='text-wa-contact'>Pembelian</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;