import './style.css'
import Sertifikat from './Sertifikat/sertifikat';
import Header from '../Header/header';

const PermissionSection = () => {
    
    return (
        <div className='bg-permission'>
            <Header title='Perizinan Perusahaan'/>

            <div data-aos="fade-left" className="container mt-5">
                <h3 className='d-flex justify-content-center'>Izin Perusahaan</h3>
                <ol>
                    <li className='text-permission ms-5'>Akta Pendirian</li>
                    <li className='text-permission ms-5'>Sertifikat Standart Usaha</li>
                    <li className='text-permission ms-5'>Surat Pernyataan Usaha Mikro</li>
                    <li className='text-permission ms-5'>Izin Usaha</li>
                    <li className='text-permission ms-5'>NIB (Nomor Induk Berusaha)</li>
                    <li className='text-permission ms-5'>NPWP</li>
                    <li className='text-permission ms-5'>SIP (Surat Izin Praktek)</li>
                    <li className='text-permission ms-5'>STR (Surat Tanda Registrasi)</li>
                    <p className='text-permission ms-5'>dan lain lain...</p>
                </ol>
            </div>
            <Sertifikat />
        </div>
    );
}

export default PermissionSection;