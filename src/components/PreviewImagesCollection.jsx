import React from 'react';
import PropTypes from 'prop-types';

import PreviewImage from './PreviewImage';
import InfiniteCollection from './InfiniteCollection';

const PreviewImagesCollection = ({
  images, isFetching, onImageClick, fetchNext,
}) => (
  <InfiniteCollection isFetching={isFetching} fetchNext={fetchNext}>
    {
      images.map(image => (
        <PreviewImage
          key={image.id}
          id={image.id}
          src={image.src}
          alt={image.alt}
          onClick={onImageClick}
        />
      ))
    }
  </InfiniteCollection>
);
PreviewImagesCollection.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
  })).isRequired,
  isFetching: PropTypes.bool,
  onImageClick: PropTypes.func,
  fetchNext: PropTypes.func,
};
PreviewImagesCollection.defaultProps = {
  isFetching: false,
  onImageClick() {},
  fetchNext() {},
};

export default PreviewImagesCollection;
