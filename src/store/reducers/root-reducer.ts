import { Image } from "../../models/image";
import { combineReducers } from "redux";
import { imagesReducers } from "./images-reducers";
import { User } from "../../models/user";
import { userReducers } from "./user-reducers";
import { commentReducers } from "./comments-reducers";
import { Comment } from "../../models/comment";

export interface RootState {
    images: Image[]
    users: User[]
    comments: Comment[]
}

const rootReducer = combineReducers({
    images: imagesReducers,
    users: userReducers,
    comments: commentReducers
})

export default rootReducer;