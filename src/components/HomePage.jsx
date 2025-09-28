import React from 'react';
import Header from './Header';
import ImageCarousel from './ImageCarousel';
import SecondSection from './SecondSection';
import styles from './componentStyles/HomePage.module.css';

const HomePage = () => {
   return (
      <div className={styles.homePageContainer}>
         {/* First Part */}
         <div className={styles.firstPart}>
            <Header />
            <ImageCarousel />
         </div>

         {/* Second Part */}
         <SecondSection />
      </div>
   );
};

export default HomePage;