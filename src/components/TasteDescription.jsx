import React from 'react';
import styles from './componentStyles/TasteDescription.module.css';

const TasteDescription = ({ tastes, productName }) => {
   return (
      <div className={styles.tasteSection}>
         <div className={styles.tasteContainer}>
            <h2 className={styles.sectionTitle}>
               ดื่มดํ่าไปกับ {productName}
            </h2>
            <p className={styles.sectionSubtitle}>
               สัมผัสรสชาติที่หลากหลายและเป็นเอกลักษณ์
            </p>

            <div className={styles.tastesList}>
               {tastes.map((taste, index) => (
                  <div key={index} className={styles.tasteItem}>
                     <div className={styles.tasteIconContainer}>
                        <div className={styles.tasteIcon}>
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path
                                 d="M12 2L13.09 8.26L18 7L16.74 12L22 13.09L15.74 14.18L17 19L12 17.74L7 19L8.26 14.18L2 13.09L7.26 12L6 7L10.91 8.26L12 2Z"
                                 fill="currentColor"
                              />
                           </svg>
                        </div>
                     </div>

                     <div className={styles.tasteContent}>
                        <p className={styles.tasteDescription}>
                           {taste}
                        </p>
                     </div>

                     <div className={styles.tasteNumber}>
                        {String(index + 1).padStart(2, '0')}
                     </div>
                  </div>
               ))}
            </div>

            <div className={styles.experienceNote}>
               <p className={styles.noteText}>
                  แต่ละคำจิบจะนำคุณไปสัมผัสกับประสบการณ์รสชาติที่ไม่เหมือนใคร
                  ด้วยการผสมผสานของวัตถุดิบคุณภาพสูงและสูตรดั้งเดิมที่ปรับปรุงใหม่
               </p>
            </div>
         </div>
      </div>
   );
};

export default TasteDescription;