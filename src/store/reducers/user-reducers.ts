import { User } from "../../models/user";
import { Action } from "redux";
import { GET_USERS, IGetUsers, UPDATE_USER, IUpdateUser } from "../actions/user-actions";

const initialState: User[] = [];

export function userReducers(state: User[] = initialState, action: Action) {
    switch(action.type){
        case GET_USERS:
            const {users} = action as IGetUsers;
            return [...state, ...users];
        
        case UPDATE_USER:
            const {user} = action as IUpdateUser;
            state.map(oldUser => { if(oldUser.id === user.id) {oldUser=user}})
            return [...state];
        default:
            return state;
    }
}