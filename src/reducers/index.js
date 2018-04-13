import {combineReducers} from "redux";
import photos from "./photos";
import selectedPhotoIndex from "./selectedPhotoIndex";

export default combineReducers({ photos, selectedPhotoIndex });
