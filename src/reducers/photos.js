import * as ActionTypes from '../constants/ActionTypes'
import {combineReducers} from "redux";

const addPhotoEntries = (state, action) => ({
  ...state,
  ...action.photos.reduce(
    (byId, photo) => {
      byId[photo.id] = photo;

      return byId;
    },
    {},
  ),
});

const addPhotoIds = (state, action) =>
  state.concat(action.photos.map(photo => photo.id));

const photosById = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PHOTOS_SUCCESS: return addPhotoEntries(state, action);
    default: return state;
  }
};

const allPhotos = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PHOTOS_SUCCESS: return addPhotoIds(state, action);
    default: return state;
  }
};

const currentPage = (state = 0, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PHOTOS_SUCCESS: return state + 1;
    default: return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PHOTOS_START: return true;
    case ActionTypes.FETCH_PHOTOS_END: return false;
    default: return state;
  }
};

export default combineReducers({
  byId: photosById,
  allIds: allPhotos,
  currentPage,
  isFetching,
});
