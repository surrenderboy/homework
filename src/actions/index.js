import { toJson } from 'unsplash-js';

import unsplash from '../unsplash';
import * as ActionTypes from '../constants/ActionTypes';

export const fetchPhotos = () => (
  async (dispatch, getState) => {
    const { currentPage } = getState().photos;

    dispatch({
      type: ActionTypes.FETCH_PHOTOS_START,
    });

    try {
      const photos = await unsplash.photos.listPhotos(currentPage + 1, 12).then(toJson);

      dispatch({
        type: ActionTypes.FETCH_PHOTOS_SUCCESS,
        photos,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.FETCH_PHOTOS_FAILURE,
        error: e.message,
      });
    } finally {
      dispatch({
        type: ActionTypes.FETCH_PHOTOS_END,
      });
    }
  }
);

export const showPhotoByIndex = photoIndex => ({
  type: ActionTypes.SHOW_PHOTO,
  photoIndex,
});

export const showPhotoById = photoId => (
  (dispatch, getState) => {
    const state = getState();
    const photoIndex = state.photos.allIds.indexOf(photoId);

    dispatch(showPhotoByIndex(photoIndex));
  }
);

export const hidePhoto = () => ({
  type: ActionTypes.HIDE_PHOTO,
});

export const showNextPhoto = () => (
  (dispatch, getState) => {
    const state = getState();
    const { photos, selectedPhotoIndex } = state;

    if (selectedPhotoIndex === photos.allIds.length - 1) return;

    if (selectedPhotoIndex === photos.allIds.length - 2) {
      dispatch(fetchPhotos());
    }

    dispatch({
      type: ActionTypes.SHOW_NEXT_PHOTO,
    });
  }
);

export const showPrevPhoto = () => ({
  type: ActionTypes.SHOW_PREV_PHOTO,
});
