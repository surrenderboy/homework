/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

import './Gallery.css';

const toggleNoScroll = () => document.body.classList.toggle('gallery_noscroll');

class Gallery extends React.Component {
  static propTypes = {
    image: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    }).isRequired,
    handleClose: PropTypes.func.isRequired,
    hasPrev: PropTypes.bool,
    hasNext: PropTypes.bool,
    handlePrev: PropTypes.func,
    handleNext: PropTypes.func,
  };
  static defaultProps = {
    hasPrev: false,
    hasNext: false,
    handlePrev() {},
    handleNext() {},
  };

  componentDidMount() {
    toggleNoScroll();
  }

  componentWillUnmount() {
    toggleNoScroll();
  }

  render() {
    const {
      image, hasPrev, hasNext, handleClose, handlePrev, handleNext,
    } = this.props;

    return (
      <div className="gallery">
        <div className="gallery__nav gallery__nav_prev" onClick={handlePrev} >
          { hasPrev && <div className="gallery__icon gallery__icon_prev">&lt;</div> }
        </div>
        <div className="gallery__nav gallery__nav_close" onClick={handleClose} >
          <div className="gallery__icon gallery__icon_close">X</div>
        </div>
        <div className="gallery__image" onClick={handleNext} >
          <img src={image.src} alt={image.alt} className="gallery__img" />
        </div>
        <div className="gallery__nav gallery__nav_next" onClick={handleNext} >
          { hasNext && <div className="gallery__icon gallery__icon_next">&gt;</div> }
        </div>
      </div>
    );
  }
}

export default Gallery;
