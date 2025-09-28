import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import ImageCarousel from './ImageCarousel';
import MoreInfo from './MoreInfo';
import IngredientsBreakdown from './IngredientsBreakdown';
import TasteDescription from './TasteDescription';
import Comments from './Comments';
import ProductsData from '../data/ProductsData';
import styles from './componentStyles/ProductDetailPage.module.css';

const ProductDetailPage = () => {
   const { productId, variantId } = useParams();
   const [showMoreInfo, setShowMoreInfo] = useState(false);

   const product = ProductsData.find(p => p.id === parseInt(productId));
   const variant = variantId ? product?.variants.find(v => v.id === parseInt(variantId)) : null;

   if (!product) {
      return (
         <div className={styles.productDetailContainer}>
            <Header />
            <div style={{ padding: '50px', textAlign: 'center' }}>
               <h2>Product not found</h2>
               <p>The product you're looking for doesn't exist.</p>
            </div>
         </div>
      );
   }

   const displayData = variant || product;
   const pageTitle = variant ? `${product.name} - ${variant.name}` : product.name;

   // Determine what components to show based on product
   const showIngredients = product.ingredients && product.ingredients.length > 0;
   const showComments = product.id === 2; // Only show for "หวานใจสายใส - Functional Drink 0%"

   return (
      <div className={styles.productDetailContainer}>
         {/* Header and Carousel - consistent across all pages */}
         <div className={styles.topSection}>
            <Header />
            <ImageCarousel />
         </div>

         {/* Product Story Section */}
         <div className={styles.storySection}>
            <div className={styles.storySectionContent}>
               {/* Title Container */}
               <div className={styles.titleContainer}>
                  <h1 className={styles.productTitle}>{pageTitle}</h1>
                  {variant && (
                     <p className={styles.variantSubtitle}>{variant.description}</p>
                  )}
               </div>

               {/* Story Container */}
               <div className={styles.storyContainer}>
                  <p className={styles.productStory}>
                     {product.story}
                  </p>
               </div>

               {/* More Info Component */}
               <MoreInfo
                  fullStory={product.fullStory}
                  isVisible={showMoreInfo}
                  onToggle={() => setShowMoreInfo(!showMoreInfo)}
               />
            </div>
         </div>

         {/* Ingredients Breakdown Section - Only if product has ingredients */}
         {showIngredients && (
            <IngredientsBreakdown
            productImage={product.productImage}
            ingredients={product.ingredients}
            productName={product.name}
            />
         )}

         {/* Comments Section - Only for Functional Drink 0% */}
         {showComments && (
            <Comments
               productId={product.id}
               productName={product.name}
            />
         )}

         {/* Taste Description Section */}
         <TasteDescription
            tastes={product.tastes}
            productName={product.name}
         />
      </div>
   );
};

export default ProductDetailPage;