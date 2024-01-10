import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePages from './pages/HomePages/homepages';
import AboutPages from './pages/AboutPages/aboutpages';
import ProductPages from './pages/ProductPages/productpages';
import PermissionPages from './pages/PermissionPages/permissionpages';
import ContactPages from './pages/ContactPages/contactpages';
import NotFoundPages from './pages/NotFoundPages/notfoundpages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/about" element={<AboutPages />} />
        <Route path="/product" element={<ProductPages />} />
        <Route path="/permission" element={<PermissionPages />} />
        <Route path="/contact" element={<ContactPages />} />
        <Route path="*" element={<NotFoundPages />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
