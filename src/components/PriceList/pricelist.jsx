import './style.css'
import Aos from 'aos';

const PriceList = () => {
    const priceList = [
        { id: 1, name: 'SpO2 Merk Goldway Anak/Dewasa', originalPrice: 1000000, discount: 10, finalPrice: 900000 },
        { id: 2, name: 'SpO2 Merk Apollo N2 Infinity', originalPrice: 1000000, discount: 10, finalPrice: 900000 },
        { id: 3, name: 'SpO2 Merk Mindray', originalPrice: 1000000, discount: 10, finalPrice: 900000 },
        { id: 4, name: 'SpO2 Merk Masimo Comp Capit', originalPrice: 1000000, discount: 10, finalPrice: 900000 },
        { id: 5, name: 'Oximetri Handheld Merk YKDmed', originalPrice: 4400000, discount: 10, finalPrice: 3960000 },
        { id: 6, name: 'Oximetri Merk Mindray PM60', originalPrice: 11000000, discount: 10, finalPrice: 9900000 },
        { id: 7, name: 'Manset MEC 1000 + Selang NIBP', originalPrice: 700000, discount: 10, finalPrice: 630000 },
        { id: 8, name: 'Manset 1 Selang', originalPrice: 350000, discount: 10, finalPrice: 315000 },
        { id: 9, name: 'Manset 2 Selang', originalPrice: 350000, discount: 10, finalPrice: 315000 },
        { id: 10, name: 'Kabel ECG Mindray IPM12 Dewasa', originalPrice: 1500000, discount: 10, finalPrice: 1350000 },
        { id: 11, name: 'Botol Suction Pump 2L', originalPrice: 2500000, discount: 10, finalPrice: 2250000 },
        { id: 12, name: 'Botol Suction Pump 3L', originalPrice: 3000000, discount: 10, finalPrice: 2700000 },
        { id: 13, name: 'Laringoscope Merk Raister Anak/Dewasa', originalPrice: 5500000, discount: 10, finalPrice: 4950000 },
        { id: 14, name: 'Lampu Infrared Standing Merk Corona GL88', originalPrice: 4000000, discount: 10, finalPrice: 3600000 },
        { id: 15, name: 'Kertas EKG Mindray 50mm x 20mm', originalPrice: 100000, discount: 10, finalPrice: 90000 },
        { id: 16, name: 'Baterai Defiblator Merk Philips Heartstart', originalPrice: 5500000, discount: 10, finalPrice: 4950000 },
        { id: 17, name: 'Baterai AED G3 Original', originalPrice: 12000000, discount: 10, finalPrice: 10800000 },
        { id: 18, name: 'O2 Sensor MOX2 Untuk Mindray Anastesi', originalPrice: 4700000, discount: 10, finalPrice: 4230000 },
        { id: 19, name: 'Lampu Tindakan Emergency Mobile', originalPrice: 3700000, discount: 10, finalPrice: 3330000 },
        { id: 20, name: 'Ground Plate ESU Reuse', originalPrice: 3500000, discount: 10, finalPrice: 3150000 },
    ];
    const formatPrice = (price) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);

    Aos.init({ duration: 1000 });

    return (
        <div data-aos="zoom-out" className='mt-5'>
            <h1 className='title-pricelist'>PriceList</h1>
            <table className='pricelist' border="1">
                <thead>
                    <tr>
                        <th className='th-pricelist fs-5'>No</th>
                        <th className='th-pricelist fs-5'>Nama Barang</th>
                        <th className='th-pricelist fs-5'>Harga Asli</th>
                        <th className='th-pricelist fs-5'>Diskon</th>
                        <th className='th-pricelist fs-5'>Harga Jual</th>
                    </tr>
                </thead>
                <tbody>
                    {priceList.map((product) => (
                        <tr key={product.id}>
                        <td className='td-pricelist'>{product.id}</td>
                        <td className='td-pricelist pricelist-name'>{product.name}</td>
                        <td className='td-pricelist'>{formatPrice(product.originalPrice)}</td>
                        <td className='td-pricelist'>{product.discount}%</td>
                        <td className='td-pricelist'>{formatPrice(product.finalPrice)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PriceList;