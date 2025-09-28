import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import ImageCarousel from './ImageCarousel';
import ProductsData from '../data/ProductsData';
import styles from './componentStyles/ProductsPage.module.css';

const ProductsPage = () => {
   const navigate = useNavigate();

   const handleProductClick = (productId, variantId = null) => {
      if (variantId) {
         navigate(`/product/${productId}/variant/${variantId}`);
      } else {
         navigate(`/product/${productId}`);
      }
   };

   return (
      <div className={styles.productsPageContainer}>
         {/* Header and Carousel - consistent across all pages */}
         <div className={styles.topSection}>
            <Header />
            <ImageCarousel />
         </div>

         {/* Products Display Section */}
         <div className={styles.productsSection}>
            <div className={styles.titleContainer}>
               <h1 className={styles.pageTitle}>Our Products</h1>
               <p className={styles.pageSubtitle}>
                  Discover our authentic Thai flavors and traditional recipes
               </p>
            </div>

            <div className={styles.productsContainer}>
               {ProductsData.map((product) => (
                  <div key={product.id} className={styles.productSection}>
                     {/* Product Title */}
                     <div className={styles.productHeader}>
                        <h2 className={styles.productTitle}>{product.name}</h2>
                        <p className={styles.productSubtitle}>{product.shortDescription}</p>
                     </div>

                     {/* Product Variants Display */}
                     <div className={styles.variantsContainer}>
                        {/* Main Product Card - Commented out as requested */}
                        {/* <div
                           className={styles.mainProductCard}
                           onClick={() => handleProductClick(product.id)}
                        >
                           <div className={styles.productImageContainer}>
                           <img
                              src={product.image}
                              alt={product.name}
                              className={styles.productImage}
                              onError={(e) => {
                                 e.target.src = `https://via.placeholder.com/250x380/e0e0e0/666666?text=${product.name}`;
                              }}
                           />
                           <div className={styles.productOverlay}>
                              <div className={styles.productInfo}>
                                 <h3 className={styles.productCardTitle}>{product.name}</h3>
                                 <p className={styles.productCardDescription}>
                                 {product.shortDescription}
                                 </p>
                                 <button className={styles.viewProductBtn}>
                                 View Product
                                 </button>
                              </div>
                           </div>
                           </div>
                        </div> */}

                        {/* Variant Cards - Horizontal Scroll */}
                        <div className={styles.variantsScroll}>
                           {product.variants.map((variant) => (
                              <div
                                 key={variant.id}
                                 className={styles.variantCard}
                                 onClick={() => handleProductClick(product.id, variant.id)}
                              >
                                 <div className={styles.variantImageContainer}>
                                    <img
                                       // src={variant.image}
                                       src={`https://placehold.co/600x400?text=Variant+Image`}
                                       alt={variant.name}
                                       className={styles.variantImage}
                                       onError={(e) => {
                                          e.target.src = `https://via.placeholder.com/250x380/f0f0f0/888888?text=${variant.name}`;
                                       }}
                                    />
                                    <div className={styles.variantOverlay}>
                                       <div className={styles.variantInfo}>
                                          <h4 className={styles.variantTitle}>{variant.name}</h4>
                                          <p className={styles.variantDescription}>
                                             {variant.description}
                                          </p>
                                          <button className={styles.tryVariantBtn}>
                                             Try This
                                          </button>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default ProductsPage;