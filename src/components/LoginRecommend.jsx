import React from 'react';
import styles from './componentStyles/LoginRecommend.module.css';

const LoginRecommend = () => {
   const handleSignUp = () => {
      // Handle sign up navigation
      console.log('Navigate to sign up page');
   };

   const handleLogin = () => {
      // Handle login navigation
      console.log('Navigate to login page');
   };

   return (
      <div className={styles.loginRecommendContainer}>
         <div className={styles.content}>
            <div className={styles.textSection}>
               <h2 className={styles.title}>
                  Join Our Thai Food Community
               </h2>
               <p className={styles.description}>
                  Unlock exclusive recipes, connect with fellow food enthusiasts, and discover the authentic taste of Thailand. Create your account today to access premium content, save your favorite recipes, and share your culinary journey with our vibrant community.
               </p>
               <ul className={styles.benefits}>
                  <li>Access to exclusive Thai recipes</li>
                  <li>Connect with food lovers nationwide</li>
                  <li>Save and organize your favorite dishes</li>
                  <li>Get personalized cooking recommendations</li>
                  <li>Share your cooking experiences</li>
               </ul>
            </div>

            <div className={styles.actionSection}>
               <div className={styles.ctaBox}>
                  <h3 className={styles.ctaTitle}>Ready to Get Started?</h3>
                  <p className={styles.ctaDescription}>
                     Join thousands of Thai food enthusiasts who are already part of our community.
                  </p>

                  <div className={styles.buttonGroup}>
                     <button
                        className={styles.signUpBtn}
                        onClick={handleSignUp}
                     >
                        Create Account
                     </button>
                     <button
                        className={styles.loginBtn}
                        onClick={handleLogin}
                     >
                        Sign In
                     </button>
                  </div>

                  <p className={styles.freeText}>
                     It's completely free to join!
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default LoginRecommend;