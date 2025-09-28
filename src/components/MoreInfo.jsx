import React from 'react';
import styles from './componentStyles/MoreInfo.module.css';

const MoreInfo = ({ fullStory, isVisible, onToggle }) => {
   return (
      <div className={styles.moreInfoContainer}>
         <button
            className={styles.moreInfoToggle}
            onClick={onToggle}
         >
            <span className={styles.toggleText}>
               {isVisible ? 'Show Less' : 'Read More'}
            </span>
            <svg
               className={`${styles.toggleIcon} ${isVisible ? styles.rotated : ''}`}
               width="20"
               height="20"
               viewBox="0 0 24 24"
               fill="none"
            >
               <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
               />
            </svg>
         </button>

         <div className={`${styles.moreInfoContent} ${isVisible ? styles.expanded : ''}`}>
            <div className={styles.moreInfoText}>
               <p>{fullStory}</p>
            </div>
         </div>
      </div>
   );
};

export default MoreInfo;