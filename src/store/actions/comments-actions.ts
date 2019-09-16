import { Action } from "redux";
import { Comment } from "../../models/comment";

export const GET_COMMENTS = "GET_COMMENTS";
export const REQUEST_COMMENTS = "REQUEST_COMMENTS";
export const ADD_COMMENT = "ADD_COMMENT";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";

export interface IGetComments extends Action {
    comments: Comment[]
}

export interface IRequestComments extends Action {

}

export interface IAddComment extends Action {
    comment: Comment
}

export interface IAddCommentSuccess extends Action {
    comment: Comment
}

export function getComments(comments: Comment[]): IGetComments {
    return {
        type: GET_COMMENTS,
        comments: comments
    }
}
export function requestComments(): IRequestComments {
    return {
        type: REQUEST_COMMENTS
    }
}

export function addComment(comment: Comment) : IAddComment {
    return {
        type: ADD_COMMENT,
        comment:comment
    }
}

export function addCommentSucces(comment: Comment) : IAddCommentSuccess {
    return {
        type: ADD_COMMENT_SUCCESS,
        comment:comment
    }
}