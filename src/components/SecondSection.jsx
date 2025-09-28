import React from 'react';
import TitleContainer from './TitleContainer';
import TopicsGrid from './TopicsGrid';
import LoginRecommend from './LoginRecommend';
import styles from './componentStyles/SecondSection.module.css';

const SecondSection = () => {
   return (
      <div className={styles.secondSection}>
         <TitleContainer />
         <TopicsGrid />
         <LoginRecommend />
      </div>
   );
};

export default SecondSection;