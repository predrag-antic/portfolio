import { all, takeEvery } from 'redux-saga/effects';
import { REQUEST_IMAGES, ADD_IMAGE, UPDATE_IMAGE, DELETE_IMAGE } from '../actions/images-actions';
import { fetchImages, postImage, updateImage, deleteImage } from './images-saga';
import { REQUEST_USERS, UPDATE_USER } from '../actions/user-actions';
import { fetchUsers, updateUser } from './user-saga';
import { REQUEST_COMMENTS, ADD_COMMENT } from '../actions/comments-actions';
import { fetchComments, postComment } from './comment-saga';

export function* rootSaga() {
    yield all([
        takeEvery(REQUEST_IMAGES,fetchImages),
        takeEvery(ADD_IMAGE, postImage),
        takeEvery(UPDATE_IMAGE, updateImage),
        takeEvery(DELETE_IMAGE, deleteImage),
        takeEvery(REQUEST_USERS,fetchUsers),
        takeEvery(UPDATE_USER, updateUser),
        takeEvery(REQUEST_COMMENTS, fetchComments),
        takeEvery(ADD_COMMENT, postComment)
    ]);
}