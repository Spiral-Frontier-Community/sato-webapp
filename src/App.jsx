import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductsPage from './components/ProductsPage';
import ProductDetailPage from './components/ProductDetailPage';
import styles from './App.module.css';

function App() {
  return (
    <Router>
      <div className={styles.mainContainer}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/product/:productId/variant/:variantId" element={<ProductDetailPage />} />
          {/* Placeholder routes for future pages */}
          <Route path="/events" element={<div style={{ padding: '50px', textAlign: 'center' }}><h2>Events/Workshop Page</h2><p>Coming Soon...</p></div>} />
          <Route path="/about" element={<div style={{ padding: '50px', textAlign: 'center' }}><h2>About Us Page</h2><p>Coming Soon...</p></div>} />
          <Route path="/sustainability" element={<div style={{ padding: '50px', textAlign: 'center' }}><h2>Sustainability Page</h2><p>Coming Soon...</p></div>} />
          <Route path="/contact" element={<div style={{ padding: '50px', textAlign: 'center' }}><h2>Contact Us Page</h2><p>Coming Soon...</p></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;