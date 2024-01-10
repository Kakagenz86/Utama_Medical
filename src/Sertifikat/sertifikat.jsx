import { useState } from 'react';
import './style.css'
import { Modal } from 'bootstrap';
import Surat1 from '../assets/image/Surat/Surat1.jpeg'
import Surat2 from '../assets/image/Surat/Surat2.jpeg'
import Surat3 from '../assets/image/Surat/Surat3.jpeg'
import Surat4 from '../assets/image/Surat/Surat4.jpeg'
import Surat5 from '../assets/image/Surat/Surat5.jpeg'
import Surat6 from '../assets/image/Surat/Surat6.jpeg'
import Surat7 from '../assets/image/Surat/Surat7.jpeg'
import Surat8 from '../assets/image/Surat/Surat8.jpeg'
import Surat9 from '../assets/image/Surat/Surat9.jpeg'
import Surat10 from '../assets/image/Surat/Surat10.jpeg'
import Surat11 from '../assets/image/Surat/Surat11.jpeg'
import Surat12 from '../assets/image/Surat/Surat12.jpeg'
import Surat13 from '../assets/image/Surat/Surat13.jpeg'
import Surat14 from '../assets/image/Surat/Surat14.jpeg'
import Surat15 from '../assets/image/Surat/Surat15.jpeg'
import Surat16 from '../assets/image/Surat/Surat16.jpeg'
import Surat17 from '../assets/image/Surat/Surat17.jpeg'
import Surat18 from '../assets/image/Surat/Surat18.jpeg'

const Sertifikat = () => {
    const imageSources = [Surat1, Surat2, Surat3, Surat4, Surat5, Surat6, Surat7, Surat8, Surat9, Surat10, Surat11, Surat12, Surat13, Surat14, Surat15, Surat16, Surat17, Surat18];

    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const openModal = (index) => {
        setSelectedImageIndex(index);
        const modal = new Modal(document.getElementById('lightboxModal'));
        modal.show();
    };

    return (
        <div>
            <div className='container'>
                <h1 className='d-flex justify-content-center mt-5'>Surat Perizinan</h1>
                <div className="row row-cols-md-6 row-cols-sm-4 row-cols-3 d-flex justify-content-center">
                {imageSources.map((imageSrc, index) => (
                    <div data-aos="flip-left" key={index} className="col wrapper-surat">
                        <a href="#" onClick={() => openModal(index)}>
                            <img src={imageSrc} alt={`Surat ${index + 1}`} className="img-fluid w-100 rounded img-thumbnail" />
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
                        <img src={imageSources[selectedImageIndex]} alt={`Surat ${selectedImageIndex + 1}`} className="img-fluid w-100 rounded" />
                    )}
                    </div>
                    <button type="button" className="btn-close btn-close-surat" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Sertifikat;
