import React from 'react';

import './PreviewImage.css';

function PreviewImage({className, image, handleClick}) {
  return (
    <img
      className={`preview-image ${className}`}
      src={image.urls.regular}
      alt={image.title}
      onClick={() => handleClick(image)}
    />
  );
}

export default PreviewImage;
