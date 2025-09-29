import React, { useState, useEffect } from "react";
import styles from "./componentStyles/ImageGallery.module.css";

function ImageGallery() {
  const images = [
    {
      id: 1,
      src: "/src/assets/logo.png",
      alt: "Company Culture 1",
      title: "ทีมงานที่เป็นหนึ่งเดียว",
    },
    {
      id: 2,
      src: "/src/assets/logo.png",
      alt: "Company Culture 2",
      title: "การทำงานร่วมกัน",
    },
    {
      id: 3,
      src: "/src/assets/logo.png",
      alt: "Company Culture 3",
      title: "นวัตกรรมและความคิดสร้างสรรค์",
    },
    {
      id: 4,
      src: "/src/assets/logo.png",
      alt: "Company Culture 4",
      title: "ความมุ่งมั่นในคุณภาพ",
    },
    {
      id: 5,
      src: "/src/assets/logo.png",
      alt: "Company Culture 5",
      title: "การรักษาสิ่งแวดล้อม",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const [isUserInteracting, setIsUserInteracting] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const getImagePosition = (index) => {
    const diff = index - currentIndex;
    if (diff === 0) return "center";
    if (diff === 1 || diff === -(images.length - 1)) return "right";
    if (diff === -1 || diff === images.length - 1) return "left";
    return "hidden";
  };

  useEffect(() => {
    let interval;

    if (!isUserInteracting) {
      interval = setInterval(nextSlide, 5000);
    }

    return () => clearInterval(interval);
  }, [isUserInteracting]);

  useEffect(() => {
    const resetInteraction = () => {
      setIsUserInteracting(false);
    };

    const handleUserInteraction = () => {
      setIsUserInteracting(true);
    };

    window.addEventListener("mousedown", handleUserInteraction);
    window.addEventListener("touchstart", handleUserInteraction);
    window.addEventListener("keydown", handleUserInteraction); // Listen for keyboard events too

    return () => {
      window.removeEventListener("mousedown", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
      clearInterval(resetInteraction); // Clear the timeout if the component unmounts.
    };
  }, []);

  return (
    <div className={styles.galleryContainer}>
      <h2 className={styles.galleryTitle}>วัฒนธรรมองค์กร</h2>

      <div className={styles.gallery}>
        <button className={styles.navButton} onClick={prevSlide}>
          &#8249;
        </button>

        <div className={styles.imageContainer}>
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`${styles.imageCard} ${styles[getImagePosition(index)]}`}
            >
              <img src={image.src} alt={image.alt} className={styles.image} />
              <div className={styles.imageOverlay}>
                <h3 className={styles.imageTitle}>{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <button className={styles.navButton} onClick={nextSlide}>
          &#8250;
        </button>
      </div>

      <div className={styles.indicators}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? styles.active : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
