import {connect} from 'react-redux';
import App from "../components/App";

const mapStateToProps = state => ({
  showGallery: state.selectedPhotoIndex >= 0,
});

export default connect(mapStateToProps)(App)
