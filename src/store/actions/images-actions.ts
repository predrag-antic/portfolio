import { Action } from "redux";
import { Image } from "../../models/image";

export const GET_IMAGES = 'GET_IMAGES';
export const REQUEST_IMAGES = 'REQUEST_IMAGES';
export const ADD_IMAGE = 'ADD_IMAGE';
export const ADD_IMAGE_SUCCESS = 'ADD_IMAGE_SUCCESS';
export const UPDATE_IMAGE = 'UPDATE_IMAGE';
export const UPDATE_IMAGE_SUCCESS = 'UPDATE_IMAGE_SUCCESS';
export const DELETE_IMAGE = 'DELETE_IMAGE';
export const DELETE_IMAGE_SUCCESS = 'DELETE_IMAGE_SUCCESS';

export interface IGetImages extends Action {
    images: Image[]
}

export interface IRequestImages extends Action {
    
}

export interface IAddImage extends Action {
    image: Image
}

export interface IAddImageSuccess extends Action {
    image: Image
}

export interface IUpdateImage extends Action {
    changedPost: Image
}

export interface IUpdateImageSuccess extends Action {
    changedPost: Image
}

export interface IDeleteImage extends Action {
    imageId: number
}

export interface IDeleteImageSuccess extends Action {
    imageId: number
}

export function getImages(images: Image[]) : IGetImages {
    return {
        type: GET_IMAGES,
        images: images
    }
}

export function requestImages() : IRequestImages {
    return {
        type: REQUEST_IMAGES
    }
}

export function addImage(image: Image) : IAddImage {
    return {
        type: ADD_IMAGE,
        image: image
    }
}

export function addImageSuccess(image: Image) : IAddImageSuccess {
    return {
        type: ADD_IMAGE_SUCCESS,
        image: image
    }
}

export function updateImage(changedPost: Image) : IUpdateImage {
    return {
        type: UPDATE_IMAGE,
        changedPost: changedPost
    }
}

export function updateImageSuccess(changedPost: Image) : IUpdateImageSuccess {
    return {
        type: UPDATE_IMAGE_SUCCESS,
        changedPost: changedPost
    }
}

export function deleteImage(imageId: number) : IDeleteImage {
    return {
        type: DELETE_IMAGE,
        imageId: imageId
    }
}

export function deleteImageSuccess(imageId: number) : IDeleteImageSuccess {
    return {
        type: DELETE_IMAGE_SUCCESS,
        imageId: imageId
    }
}
