import React, { useState, useEffect, useRef } from 'react';
import styles from './componentStyles/ImageCarousel.module.css';

const ImageCarousel = () => {
   // Placeholder images - replace with your actual images
   const images = [
      '/src/assets/carousel1.jpg',
      '/src/assets/carousel2.jpg',
      '/src/assets/carousel3.jpg',
      '/src/assets/carousel4.jpg',
      '/src/assets/carousel5.jpg'
   ];

   const [currentIndex, setCurrentIndex] = useState(0);
   const [isUserInteracting, setIsUserInteracting] = useState(false);
   const timeoutRef = useRef(null);
   const autoScrollRef = useRef(null);

   // Auto scroll functionality
   useEffect(() => {
      if (!isUserInteracting) {
         autoScrollRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) =>
               prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
         }, 4000);
      } else {
         clearInterval(autoScrollRef.current);
      }

      return () => {
         clearInterval(autoScrollRef.current);
      };
   }, [isUserInteracting, images.length]);

   // Handle user interaction
   const handleUserInteraction = () => {
      setIsUserInteracting(true);
      clearTimeout(timeoutRef.current);

      // Resume auto scroll after 5 seconds of no interaction
      timeoutRef.current = setTimeout(() => {
         setIsUserInteracting(false);
      }, 5000);
   };

   // Navigate to specific slide
   const goToSlide = (index) => {
      setCurrentIndex(index);
      handleUserInteraction();
   };

   // Navigation functions
   const goToPrevious = () => {
      setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
      handleUserInteraction();
   };

   const goToNext = () => {
      setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
      handleUserInteraction();
   };

   // Touch/swipe handling
   const [touchStart, setTouchStart] = useState(0);
   const [touchEnd, setTouchEnd] = useState(0);

   const handleTouchStart = (e) => {
      setTouchStart(e.targetTouches[0].clientX);
      handleUserInteraction();
   };

   const handleTouchMove = (e) => {
      setTouchEnd(e.targetTouches[0].clientX);
   };

   const handleTouchEnd = () => {
      if (!touchStart || !touchEnd) return;

      const distance = touchStart - touchEnd;
      const isLeftSwipe = distance > 50;
      const isRightSwipe = distance < -50;

      if (isLeftSwipe) {
         goToNext();
      } else if (isRightSwipe) {
         goToPrevious();
      }
   };

   return (
      <div className={styles.carouselContainer}>
         <div
            className={styles.carousel}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
         >
            <div
               className={styles.carouselTrack}
               style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                  
               }}
            >
               {images.map((image, index) => (
                  <div key={index} className={styles.slide}>
                     <img
                        src={`https://placehold.co/1200x600?text=Image+${index + 1}`}
                        alt={`Slide ${index + 1}`}
                        className={styles.slideImage}
                        onError={(e) => {
                           // Fallback for missing images
                           e.target.src = `https://via.placeholder.com/1200x600/cccccc/666666?text=Image+${index + 1}`;
                        }}
                     />
                  </div>
               ))}
            </div>

            {/* Navigation Arrows */}
            <button
               className={`${styles.navButton} ${styles.prevButton}`}
               onClick={goToPrevious}
            >
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
            </button>

            <button
               className={`${styles.navButton} ${styles.nextButton}`}
               onClick={goToNext}
            >
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
            </button>
         </div>

         {/* Dots Indicator */}
         <div className={styles.dotsContainer}>
            {images.map((_, index) => (
               <button
                  key={index}
                  className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                  onClick={() => goToSlide(index)}
               />
            ))}
         </div>
      </div>
   );
};

export default ImageCarousel;