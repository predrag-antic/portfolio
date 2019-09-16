import { put, call } from 'redux-saga/effects';
import { getCommentsService, addCommentService } from "../../services/comment-service";
import { getComments, IAddComment, addCommentSucces } from '../actions/comments-actions';

export function* fetchComments() {
    const comments = yield call(getCommentsService);
    yield put(getComments(comments));
}

export function* postComment(comment:IAddComment){
    const newComment = yield addCommentService(comment.comment);
    yield put(addCommentSucces(newComment));
}