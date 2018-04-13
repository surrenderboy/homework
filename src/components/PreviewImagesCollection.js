import React from 'react';
import PreviewImage from "./PreviewImage";
import InfiniteCollection from "./InfiniteCollection";

function PreviewImagesCollection({ images, isFetching, onImageClick, fetchNext }) {
  return (
    <InfiniteCollection isFetching={isFetching} fetchNext={fetchNext}>
      {
        images.map(image =>
          <PreviewImage
            key={image.id}
            id={image.id}
            src={image.src}
            alt={image.alt}
            onClick={onImageClick}
          />
        )
      }
    </InfiniteCollection>
  );
}

export default PreviewImagesCollection;
