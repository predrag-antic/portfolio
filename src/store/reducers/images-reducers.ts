import { Image } from "../../models/image";
import { Action } from "redux";
import { GET_IMAGES, IGetImages, ADD_IMAGE, IAddImage, UPDATE_IMAGE, IUpdateImage, DELETE_IMAGE, IDeleteImage } from "../actions/images-actions";

const initialState: Image[] = [];

export function imagesReducers(state: Image[] = initialState, action: Action) {
    switch(action.type){
        case GET_IMAGES:
            const {images} = action as IGetImages;
            return [...state, ...images];
        case ADD_IMAGE:
            const {image} = action as IAddImage;
            return [...state, image];
        case UPDATE_IMAGE:
            const {changedPost} = action as IUpdateImage;
            state.map(image => { if(image.id === changedPost.id) {image=changedPost}})
            return [...state];
        case DELETE_IMAGE:
            const {imageId} = action as IDeleteImage;
            return state.filter(image => image.id!==imageId);
        default:
            return state;
    }
}