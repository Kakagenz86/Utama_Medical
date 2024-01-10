import Header from '../Header/header';
import './style.css'

const AboutSection = () => {
    return (
        <div className='bg-about'>
            <Header title='Company Profile' />

            <div className='container mt-5'>
                <p className='text-about'><span className='about-title-um ms-5'>Utama Medical</span> yang berdiri pada tahun 2021 yang didirikan oleh Muhamad Rizal Utomo A.Md.TEM. perusahaan ini bergerak dalam bidang perbaikan alat kesehatan, pengadaan barang dan jasa terutama di bidang Alat Kesehatan. Spesifikasi pengadaan barang dan jasa dalam bidang Alat Kesehatan yang kami kerjakan meliputi:</p>
                <ul>
                    <li className='fs-5 ms-5 text-about'>Sparepart Alat Kesehatan</li>
                    <li className='fs-5 ms-5 text-about'>Bed Rumah Sakit</li>
                    <li className='fs-5 ms-5 text-about'>Alat-alat Kesehatan</li>
                    <li className='fs-5 ms-5 text-about'>Trolly Stainless Rumah Sakit</li>
                    <li className='fs-5 ms-5 text-about'>dll</li>
                </ul>
                <p className='text-about'><span className='ms-5'>Company profile</span> ini dibuat sebagai dasar untuk melayani konsumen dengan cepat dan memberikan harga kompetitif. Dari pengalaman kerjasama yang kami bangun semoga dapat menjadi salah satu pertimbangan memberikan kepercayaan kepada kami. Harapan kami dengan company profile ini dapat memberikan wacana dan pertimbangan untuk menjalin kerjasama dengan baik.</p>
            </div>

            <div data-aos="fade-left" className='container mt-5'>
                <h1 className='d-flex justify-content-center'>VISI & MISI</h1>
                <div>
                    <h3>VISI</h3>
                    <p className='text-about ms-5'>Menjadi distributor yang terpercaya dalam pengadaan barang dan jasa perbaikan di bidang Kesehatan dengan mengedepankan kualitas.</p>
                </div>
                <div>
                    <h3>MISI</h3>
                    <ol>
                        <li className='text-about ms-5'>Memberikan layanan terbaik kepada konsumen.</li>
                        <li className='text-about ms-5'>Menyediakan alat-alat kesehatan yang berstandart dan berkualitas.</li>
                        <li className='text-about ms-5'>Mendukung dan memajukan dunia kesehatan di Indonesia.</li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;