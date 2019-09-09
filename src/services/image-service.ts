import { Image } from "../models/image";

export function getImagesService(){
    return fetch('http://localhost:3001/images')
    .then(response => response.json());
}

export function addImageService(image: Image) {
    const newImage = {
        method: "post",
        body: JSON.stringify(image),
        headers: {'Content-Type':'application/json'}
    };
    return fetch('http://localhost:3001/images',newImage)
    .then(response => response.json())
}

export function updateImageService(image: Image) {
    const changedPost = {
        method: "put",
        body: JSON.stringify(image),
        headers: {'Content-Type':'application/json'}
    };
    return fetch(`http://localhost:3001/images/${image.id}`,changedPost)
    .then((response)=>response.json())
}

export function deleteImageService(imageId: number){
    const oldImage = {
        method: "delete",
        
    }
    return fetch(`http://localhost:3001/images/${imageId}`,oldImage)
            .then((response)=>response.json())
}