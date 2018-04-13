import * as ActionTypes from '../constants/ActionTypes';

export default (state = -1, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_PHOTO: return action.photoIndex;
    case ActionTypes.SHOW_NEXT_PHOTO: return state + 1;
    case ActionTypes.SHOW_PREV_PHOTO: return state - 1;
    case ActionTypes.HIDE_PHOTO: return -1;
    default: return state;
  }
};
