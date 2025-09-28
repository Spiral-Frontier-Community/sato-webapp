import React from 'react';
import styles from './componentStyles/TitleContainer.module.css';

const TitleContainer = () => {
   return (
      <div className={styles.titleContainer}>
         <h1 className={styles.mainTitle}>
            "หวานใจไทยสาโท"
         </h1>
         <p className={styles.subtitle}>
            มาร่วมกันยกระดับตำนานสาโทอีสาน ให้ได้ไปไกลกว่าที่เคย
         </p>
      </div>
   );
};

export default TitleContainer;