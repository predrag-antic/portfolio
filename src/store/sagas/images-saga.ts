import { put, call } from 'redux-saga/effects';
import { getImagesService, addImageService, updateImageService, deleteImageService } from '../../services/image-service';
import { getImages, IAddImage, addImageSuccess, IUpdateImage, updateImageSuccess, IDeleteImage, deleteImageSuccess } from '../actions/images-actions';

export function* fetchImages(){
    const images = yield call(getImagesService);
    yield put(getImages(images))
}

export function* postImage(image:IAddImage){
    const newImage = yield addImageService(image.image);
    yield put(addImageSuccess(newImage));
}

export function* updateImage(changedPost:IUpdateImage){
    const changedImage = yield updateImageService(changedPost.changedPost);
    yield put(updateImageSuccess(changedImage));
}

export function* deleteImage(imageId: IDeleteImage){
    const deletedImage = yield deleteImageService(imageId.imageId);
    yield put(deleteImageSuccess(deletedImage));
  }

