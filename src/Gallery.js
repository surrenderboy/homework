import React from 'react';

import './Gallery.css';

function toggleNoScroll() {
  document.body.classList.toggle('gallery_noscroll');
}

class Gallery extends React.Component {
  componentDidMount() {
    toggleNoScroll();
  }

  componentWillUnmount() {
    toggleNoScroll();
  }

  render() {
    const {item, hasNext, hasPrev, handleClose, handlePrev, handleNext} = this.props;

    return (
      <div className="gallery">
        <div className="gallery__nav gallery__nav_prev" onClick={handlePrev}>
          { hasPrev() && <div className="gallery__icon gallery__icon_prev">&lt;</div> }
        </div>
        <div className="gallery__nav gallery__nav_close" onClick={handleClose}>
          <div className="gallery__icon gallery__icon_close">X</div>
        </div>
        <img src={item.img['L'].href} alt={item.title} className={'gallery__image'} onClick={handleNext}/>
        <div className="gallery__nav gallery__nav_next" onClick={handleNext}>
          { hasNext() && <div className="gallery__icon gallery__icon_next">&gt;</div> }
        </div>
      </div>
    );
  }
}

export default Gallery;
