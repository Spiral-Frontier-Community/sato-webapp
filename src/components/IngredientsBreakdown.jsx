import React from 'react';
import IngredientsData from '../data/IngredientsData';
import styles from './componentStyles/IngredientsBreakdown.module.css';

const IngredientsBreakdown = ({ productImage, ingredients, productName }) => {
   return (
      <div className={styles.ingredientsSection}>
         <div className={styles.ingredientsContainer}>
            <h2 className={styles.sectionTitle}>Key Ingredients</h2>

            <div className={styles.breakdownContainer}>
               {/* Product Image with Lines */}
               <div className={styles.productImageContainer}>
                  <img
                     src={`https://placehold.co/600x400?text=Product+Image`}
                     alt={productName}
                     className={styles.productImage}
                     onError={(e) => {
                        e.target.src = `https://via.placeholder.com/360x600/e0e0e0/666666?text=${productName}`;
                     }}
                  />

                  {/* Ingredient Lines and Labels */}
                  {ingredients.map((ingredient, index) => {
                     const ingredientData = IngredientsData[ingredient.id];
                     const isLeft = ingredient.position === 'left';
                     const topPosition = 15 + (index * 18); // Distribute evenly

                     return (
                        <div key={ingredient.id}>
                           {/* Line */}
                           <div
                              className={`${styles.ingredientLine} ${isLeft ? styles.lineLeft : styles.lineRight}`}
                              style={{ top: `${topPosition}%` }}
                           />

                           {/* Ingredient Card */}
                           <div
                              className={`${styles.ingredientCard} ${isLeft ? styles.cardLeft : styles.cardRight}`}
                              style={{ top: `${topPosition - 8}%` }}
                           >
                              <div className={styles.ingredientImageContainer}>
                                 <img
                                    src={`https://placehold.co/600x400?text=Ingredient-Breakdown`}
                                    alt={ingredientData?.name}
                                    className={styles.ingredientImage}
                                    onError={(e) => {
                                       e.target.src = `https://via.placeholder.com/150x150/f0f0f0/888888?text=${ingredientData?.name || 'Ingredient'}`;
                                    }}
                                 />
                                 <div className={styles.ingredientOverlay}>
                                    <h4 className={styles.ingredientName}>
                                       {ingredientData?.name || ingredient.name}
                                    </h4>
                                 </div>
                              </div>
                              <div className={styles.ingredientDescription}>
                                 <p className={styles.ingredientDesc}>
                                    {ingredientData?.description || 'Quality ingredient for authentic taste'}
                                 </p>
                                 <p className={styles.ingredientBenefits}>
                                    {ingredientData?.benefits || 'Rich in nutrients'}
                                 </p>
                              </div>
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>
      </div>
   );
};

export default IngredientsBreakdown;