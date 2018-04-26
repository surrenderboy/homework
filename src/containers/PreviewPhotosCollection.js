import { connect } from 'react-redux';
import PreviewImagesCollection from '../components/PreviewImagesCollection';
import { fetchPhotos, showPhotoById } from '../actions';

const mapStateToProps = state => ({
  images: state.photos.allIds.map((id) => {
    const photo = state.photos.byId[id];

    return {
      id: photo.id,
      src: photo.urls.regular,
      alt: photo.description,
    };
  }),
  isFetching: state.photos.isFetching,
});

const mapDispatchToProps = dispatch => ({
  onImageClick: id => dispatch(showPhotoById(id)),
  fetchNext: () => dispatch(fetchPhotos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PreviewImagesCollection);
