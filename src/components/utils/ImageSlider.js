import React, { useState } from 'react';

const ImageSlider = ({ media, src }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const lastIndex = media.length - 1;

  const showPrevImage = () => {
    const index = currentIndex === 0 ? 0 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const showNextImage = () => {
    const index = currentIndex === lastIndex ? lastIndex : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <div className="post__images">
      {media.map((photo, index) => (
        <img
          src={`/${src}/${photo}`}
          key={index}
          className={index === currentIndex ? 'visible' : 'hidden'}
        />
      ))}

      {media.length > 1 && (
        <>
          <div className="slider__actions">
            <button onClick={showPrevImage} disabled={currentIndex === 0}>
              &lt;
            </button>
            <button
              onClick={showNextImage}
              disabled={currentIndex === lastIndex}
            >
              &gt;
            </button>
          </div>
          <div className="dots">
            {media.map((img, index) => (
              <div
                className={index === currentIndex ? 'active' : 'dot'}
                key={img}
              ></div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageSlider;
