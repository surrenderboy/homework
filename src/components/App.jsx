import React from 'react';
import PropTypes from 'prop-types';

import PreviewPhotosCollection from '../containers/PreviewPhotosCollection';
import PhotoGallery from '../containers/PhotoGallery';

import './App.css';

const App = ({ showGallery }) => (
  <div>
    <PreviewPhotosCollection />

    { showGallery && <PhotoGallery /> }
  </div>
);
App.propTypes = {
  showGallery: PropTypes.bool,
};
App.defaultProps = {
  showGallery: false,
};

export default App;
