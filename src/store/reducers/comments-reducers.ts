import { Action } from "redux";
import { GET_COMMENTS, IGetComments, ADD_COMMENT, IAddComment } from "../actions/comments-actions";
import { Comment } from "../../models/comment";

const initialState: Comment[] = [];

export function commentReducers(state: Comment[]= initialState, action: Action) {
    switch(action.type){
        case GET_COMMENTS:
            const {comments} = action as IGetComments;
            return [...state,...comments];
        case ADD_COMMENT:
            const {comment} = action as IAddComment;
            return [...state,comment]
        default:
            return state;
    }
}