import {connect} from "react-redux";
import Gallery from "../components/Gallery";
import {
  hidePhoto,
  showNextPhoto,
  showPrevPhoto
} from "../actions";

const mapStateToProps = ({ photos, selectedPhotoIndex }) => {
  const photoId = photos.allIds[selectedPhotoIndex];
  const photo = photos.byId[photoId];

  return ({
    image: { src: photo.urls.regular, alt: photo.title },
    hasPrev: selectedPhotoIndex > 0,
    hasNext: selectedPhotoIndex < photos.allIds.length - 1,
  });
};

const mapDispatchToProps = dispatch => ({
  handleClose: () => dispatch(hidePhoto()),
  handleNext: () => dispatch(showNextPhoto()),
  handlePrev: () => dispatch(showPrevPhoto()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
