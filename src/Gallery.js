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
        <div className="gallery__control gallery__control_prev" onClick={handlePrev}>
          { hasPrev() && <div className="gallery__prev">&lt;</div> }
        </div>
        <div className="gallery__close" onClick={handleClose}>X</div>
        <img src={item.img['L'].href} alt={item.title} className={'gallery__image'} onClick={handleNext}/>
        <div className="gallery__control gallery__control_next" onClick={handleNext}>
          { hasNext() && <div className="gallery__next">&gt;</div> }
        </div>
      </div>
    );
  }
}

export default Gallery;
