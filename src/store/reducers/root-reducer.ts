import { Image } from "../../models/image";
import { combineReducers } from "redux";
import { imagesReducers } from "./images-reducers";
import { User } from "../../models/user";
import { userReducers } from "./user-reducers";

export interface RootState {
    images: Image[]
    users: User[]
}

const rootReducer = combineReducers({
    images: imagesReducers,
    users: userReducers
})

export default rootReducer;