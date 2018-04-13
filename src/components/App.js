import React from 'react';
import './App.css';

import PreviewPhotosCollection from "../containers/PreviewPhotosCollection";
import PhotoGallery from "../containers/PhotoGallery";

function App({ showGallery }) {
  return(
    <div className="app">
      <PreviewPhotosCollection />

      { showGallery && <PhotoGallery /> }
    </div>
  );
}

export default App;
