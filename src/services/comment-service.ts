import { Comment } from "../models/comment";

export function getCommentsService() {
    return fetch('http://localhost:3001/comments')
    .then(response => response.json());
}

export function addCommentService(comment: Comment){
    const newComment = {
        method: "post",
        body: JSON.stringify(comment),
        headers: {'Content-Type':'application/json'}
    };
    return fetch('http://localhost:3001/comments',newComment)
    .then(response=>response.json())
}