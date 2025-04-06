import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';
import AboutPage from './Pages/AboutUsPage';
import ContactPage from './Pages/ContactUsPage';
import DashboardPage from './Pages/Dashboard';
import LoginModal from './Components/LoginModal';
import ProductDetail from './Pages/ProductDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductDetail />} /> {/* Dynamic Route for Product Detail */}
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/login" element={<LoginModal />} />
      </Routes>
    </Router>
  );
}

export default App;