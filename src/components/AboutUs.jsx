import React from 'react';
import StoryTelling from './StoryTelling';
import ImageGallery from './ImageGallery';
import styles from './componentStyles/AboutUs.module.css';

function AboutUs() {
  return (
    <div className={styles.aboutContainer}>
      <StoryTelling />
      <ImageGallery />
      <div className={styles.quoteSection}>
        <p className={styles.quote}>
          "เพราะเราเชื่อว่าการสร้างสรรค์ที่ดีที่สุดต้องมาจากการสร้างประโยชน์ให้กับชุมชนก่อน"
        </p>
      </div>
    </div>
  );
}

export default AboutUs;