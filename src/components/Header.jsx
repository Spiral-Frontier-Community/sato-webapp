import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './componentStyles/Header.module.css';

const Header = () => {
   const navigate = useNavigate();

   const navItems = [
      { name: 'Products', path: '/products' },
      { name: 'Event/Workshop', path: '/events' },
      { name: 'About us', path: '/about' },
      { name: 'Sustainability', path: '/sustainability' },
      { name: 'Contact us', path: '/contact' }
   ];

   const handleLogoClick = () => {
      navigate('/');
   };

   return (
      <header className={styles.header}>
         <div className={styles.headerContent}>
            {/* Logo */}
            <div className={styles.logo} onClick={handleLogoClick}>
               <img
                  src="../src/assets/logo.png"
                  alt="Logo"
                  className={styles.logoImg}
                  onError={(e) => {
                     e.target.src = "https://via.placeholder.com/250x180/007bff/ffffff?text=LOGO";
                  }}
               />
            </div>

            {/* Navigation */}
            <nav className={styles.navbar}>
               <ul className={styles.navList}>
                  {navItems.map((item, index) => (
                     <li key={index} className={styles.navItem}>
                        <Link to={item.path} className={styles.navLink}>
                           {item.name}
                        </Link>
                     </li>
                  ))}
               </ul>
            </nav>

            {/* Action Buttons */}
            <div className={styles.actionButtons}>
               <button className={styles.searchBtn}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                     <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" />
                  </svg>
               </button>
               <button className={styles.accountBtn}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" />
                     <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                  </svg>
               </button>
            </div>
         </div>
      </header>
   );
};

export default Header;
