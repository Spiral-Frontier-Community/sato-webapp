import React from 'react';
import styles from './componentStyles/TimelineItem.module.css';

function TimelineItem({ data }) {
  const { year, title, description, isRight } = data;

  return (
    <div className={`${styles.timelineItem} ${isRight ? styles.right : styles.left}`}>
      <div className={styles.imageContainer}>
        <img 
          src="/src/assets/logo.png" 
          alt={`${title} - ${year}`}
          className={styles.timelineImage}
        />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.yearBadge}>{year}</div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.connector}></div>
    </div>
  );
}

export default TimelineItem;