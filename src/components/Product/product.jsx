import { useState } from 'react';
import './style.css'
import { Modal } from 'bootstrap';
import img1 from '../../assets/image/Product/img1.jpeg'
import img2 from '../../assets/image/Product/img2.jpeg'
import img3 from '../../assets/image/Product/img3.jpeg'
import img4 from '../../assets/image/Product/img4.jpeg'
import img5 from '../../assets/image/Product/img5.jpeg'
import img6 from '../../assets/image/Product/img6.jpeg'
import img7 from '../../assets/image/Product/img7.jpeg'
import img8 from '../../assets/image/Product/img8.jpeg'
import img9 from '../../assets/image/Product/img9.jpeg'
import img10 from '../../assets/image/Product/img10.jpeg'
import img11 from '../../assets/image/Product/img11.jpeg'
import img12 from '../../assets/image/Product/img12.jpeg'
import img13 from '../../assets/image/Product/img13.jpeg'
import img14 from '../../assets/image/Product/img14.jpeg'
import img15 from '../../assets/image/Product/img15.jpeg'
import img16 from '../../assets/image/Product/img16.jpeg'
import img17 from '../../assets/image/Product/img17.jpeg'
import Header from '../Header/header';
import PriceList from '../PriceList/pricelist'

const Product = () => {
    const imageSources = [{
        name: 'Laringoscope & Sparepart',
        image: img1,
        alt: 'product 1'
    },
    {
        name: 'Troly',
        image: img2,
        alt: 'product 2'
    },
    {
        name: 'Baterai',
        image: img3,
        alt: 'product 3'
    },
    {
        name: 'Paper ECG, Vaporizer, Doppler',
        image: img4,
        alt: 'product 4'
    },
    {
        name: 'Sensor',
        image: img5,
        alt: 'product 5'
    },
    {
        name: 'Tas KIT',
        image: img6,
        alt: 'product 6'
    }, 
    {
        name: 'ECG',
        image: img7,
        alt: 'product 7'
    }, 
    {
        name: 'Baterai',
        image: img8,
        alt: 'product 8'
    },
    {
        name: 'Sparepart',
        image: img9,
        alt: 'product 9'
    },
    {
        name: 'SpO2 & Oximetry',
        image: img10,
        alt: 'product 10'
    },
    {
        name: 'Plate & Stand',
        image: img11,
        alt: 'product 11'
    },
    {
        name: 'UPS, Lampu Tindakan, Doppler Dll.',
        image: img12,
        alt: 'product 12'
    },
    {
        name: 'X-Ray Sparepart',
        image: img13,
        alt: 'product 13'
    },
    {
        name: 'Endoscopy',
        image: img14,
        alt: 'product 14'
    },
    {
        name: 'ECG',
        image: img15,
        alt: 'product 15'
    },
    {
        name: 'Baterai',
        image: img16,
        alt: 'product 16'
    },
    {
        name: 'Manset & Tensimeter',
        image: img17,
        alt: 'product 17'
    }
];

    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const openModal = (index) => {
        setSelectedImageIndex(index);
        const modal = new Modal(document.getElementById('lightboxModal'));
        modal.show();
    };
    return (
        <div className='bg-product'>
            <Header title='Produk Kami'/>
            <PriceList/>
            <div className='container'>
                <h1 className='d-flex justify-content-center mt-5'>List Product</h1>
                <div className="row row-cols-md-6 row-cols-sm-4 row-cols-3 d-flex justify-content-center">
                {imageSources.map((imageSrc, index) => (
                    <div data-aos="flip-left" key={index} className="col wrapper-product">
                        <a className='text-decoration-none' href="#" onClick={() => openModal(index)}>
                            <p className='title-list-product'>{imageSrc.name}</p>
                            <img src={imageSrc.image} alt={`product ${index + 1}`} className="img-fluid w-100 rounded img-product" />
                        </a>
                    </div>
                ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <div id="lightboxModal" className="modal fade">
                <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                    {selectedImageIndex !== null && (
                        <img src={imageSources[selectedImageIndex].image} alt={`product ${selectedImageIndex + 1}`} className="img-fluid w-100 rounded" />
                    )}
                    </div>
                    <button type="button" className="btn-close btn-close-product" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Product;