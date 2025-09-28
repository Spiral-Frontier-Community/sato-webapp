import React, { useState } from 'react';
import CommentsData from '../data/CommentsData';
import styles from './componentStyles/Comments.module.css';
import rating_bottle from '../assets/rating_bottle.png';

const Comments = ({ productId, productName }) => {
   const [selectedComment, setSelectedComment] = useState(null);
   const comments = CommentsData[productId] || [];

   const truncateText = (text, maxLength = 250) => {
      if (text.length <= maxLength) return text;
      return text.substring(0, maxLength) + '...';
   };

   const openCommentPopup = (comment) => {
      setSelectedComment(comment);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
   };

   const closeCommentPopup = () => {
      setSelectedComment(null);
      document.body.style.overflow = 'unset'; // Restore scrolling
   };

   const renderRating = (rating) => {
      return Array.from({ length: rating }, (_, index) => (
         <img
            key={index}
            src={rating_bottle}
            alt="Rating"
            className={styles.ratingBottle}
            onError={(e) => {
               e.target.src = "https://via.placeholder.com/24x32/FFD700/333333?text=★";
            }}
         />
      ));
   };

   if (comments.length === 0) {
      return null; // Don't render if no comments
   }

   return (
      <>
         <div className={styles.commentsSection}>
            <div className={styles.commentsContainer}>
               <h2 className={styles.sectionTitle}>
                  พยานหวานใจ
               </h2>

               <div className={styles.commentsGrid}>
                  {comments.map((comment) => (
                     <div key={comment.id} className={styles.commentCard}>
                        {/* User Info */}
                        <div className={styles.userInfo}>
                           <div className={styles.userAvatar}>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                 <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                                 <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" />
                              </svg>
                           </div>
                           <div className={styles.userDetails}>
                              <h4 className={styles.username}>{comment.username}</h4>
                              <p className={styles.commentDate}>{comment.date}</p>
                           </div>
                        </div>

                        {/* Comment with Background Image */}
                        <div
                           className={styles.commentImageContainer}
                           onClick={() => openCommentPopup(comment)}
                        >
                           <img
                              src={`https://placehold.co/600x400?text=Review+Image`}
                              alt={`Review by ${comment.username}`}
                              className={styles.commentImage}
                              onError={(e) => {
                                 e.target.src = `https://via.placeholder.com/300x200/e0e0e0/666666?text=Review+Image`;
                              }}
                           />
                           <div className={styles.commentOverlay}>
                              <p className={styles.commentText}>
                                 {truncateText(comment.comment)}
                              </p>
                              {comment.comment.length > 250 && (
                                 <button className={styles.readMoreBtn}>
                                    อ่านเพิ่มเติม
                                 </button>
                              )}
                           </div>
                        </div>

                        {/* Rating */}
                        <div className={styles.ratingContainer}>
                           <div className={styles.rating}>
                              {renderRating(comment.rating)}
                           </div>
                           <span className={styles.ratingText}>
                              ({comment.rating}/6)
                           </span>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>

         {/* Popup Modal */}
         {selectedComment && (
            <div className={styles.popupOverlay} onClick={closeCommentPopup}>
               <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
                  <button className={styles.closeButton} onClick={closeCommentPopup}>
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                     </svg>
                  </button>

                  <div className={styles.popupHeader}>
                     <div className={styles.popupUserInfo}>
                        <div className={styles.popupUserAvatar}>
                           <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                              <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" />
                           </svg>
                        </div>
                        <div>
                           <h3 className={styles.popupUsername}>{selectedComment.username}</h3>
                           <p className={styles.popupDate}>{selectedComment.date}</p>
                        </div>
                     </div>
                     <div className={styles.popupRating}>
                        {renderRating(selectedComment.rating)}
                     </div>
                  </div>

                  <div className={styles.popupImageContainer}>
                     <img
                        src={`https://placehold.co/600x400?text=Review+Image`}
                        alt={`Review by ${selectedComment.username}`}
                        className={styles.popupImage}
                        onError={(e) => {
                           e.target.src = `https://via.placeholder.com/360x240/e0e0e0/666666?text=Review+Image`;
                        }}
                     />
                  </div>

                  <div className={styles.popupTextContainer}>
                     <p className={styles.popupText}>
                        {selectedComment.comment}
                     </p>
                  </div>
               </div>
            </div>
         )}
      </>
   );
};

export default Comments;