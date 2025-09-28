import React from 'react';
import styles from './componentStyles/TopicsGrid.module.css';

const TopicsGrid = () => {
   const topics = [
      {
         id: 1,
         title: 'Taste',
         description: 'Discover authentic Thai flavors and traditional recipes',
         image: '/src/assets/taste.jpg',
         link: '#taste'
      },
      {
         id: 2,
         title: 'Province',
         description: 'Explore regional specialties from different Thai provinces',
         image: '/src/assets/province.jpg',
         link: '#province'
      },
      {
         id: 3,
         title: 'User',
         description: 'Connect with fellow food enthusiasts and share experiences',
         image: '/src/assets/user.jpg',
         link: '#user'
      },
      {
         id: 4,
         title: 'Partner',
         description: 'Meet our trusted restaurant and ingredient partners',
         image: '/src/assets/partner.jpg',
         link: '#partner'
      },
      {
         id: 5,
         title: 'Q&A',
         description: 'Get answers to your cooking questions and food queries',
         image: '/src/assets/qa.jpg',
         link: '#qa'
      }
   ];

   const handleTopicClick = (link) => {
      // Handle navigation or show more details
      console.log(`Navigating to ${link}`);
   };

   return (
      <div className={styles.topicsGrid}>
         <div className={styles.topicsRow}>
            {topics.slice(0, 4).map((topic) => (
               <div
                  key={topic.id}
                  className={styles.topicCard}
                  onClick={() => handleTopicClick(topic.link)}
               >
                  <div className={styles.imageContainer}>
                     <img
                        // src={topic.image}
                        src={`https://placehold.co/600x400?text=Topic+Image`}
                        alt={topic.title}
                        className={styles.topicImage}
                        onError={(e) => {
                           e.target.src = `https://via.placeholder.com/250x150/e0e0e0/666666?text=${topic.title}`;
                        }}
                     />
                     <div className={styles.overlay}>
                        <h3 className={styles.topicTitle}>{topic.title}</h3>
                     </div>
                  </div>
                  <div className={styles.cardContent}>
                     <p className={styles.topicDescription}>{topic.description}</p>
                     <button className={styles.readMoreBtn}>Read More</button>
                  </div>
               </div>
            ))}
         </div>

         {/* Last topic in full width */}
         <div className={styles.fullWidthTopic}>
            {topics.slice(4).map((topic) => (
               <div
                  key={topic.id}
                  className={styles.fullWidthCard}
                  onClick={() => handleTopicClick(topic.link)}
               >
                  <div className={styles.fullWidthImageContainer}>
                     <img
                        // src={topic.image}
                        src={`https://placehold.co/600x400?text=Topic+Image`}
                        alt={topic.title}
                        className={styles.fullWidthImage}
                        onError={(e) => {
                           e.target.src = `https://via.placeholder.com/800x200/e0e0e0/666666?text=${topic.title}`;
                        }}
                     />
                     <div className={styles.fullWidthOverlay}>
                        <div className={styles.fullWidthContent}>
                           <h3 className={styles.fullWidthTitle}>{topic.title}</h3>
                           <p className={styles.fullWidthDescription}>{topic.description}</p>
                           <button className={styles.fullWidthReadMoreBtn}>Read More</button>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default TopicsGrid;