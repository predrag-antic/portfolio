import { Action } from "redux";
import { User } from "../../models/user";

export const GET_USERS = 'GET_USERS';
export const REQUEST_USERS = 'REQUEST_USERS';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';

export interface IGetUsers extends Action {
    users: User[]
}

export interface IRequestUsers extends Action {
    
}

export interface IUpdateUser extends Action {
    user: User
}

export interface IUpdateUserSuccess extends Action {
    user: User
}

export function getUsers(users: User[]) : IGetUsers {
    return {
        type: GET_USERS,
        users: users
    }
}

export function requestUsers() : IRequestUsers {
    return {
        type: REQUEST_USERS
    }
}

export function updateUser(user: User) : IUpdateUser {
    return {
        type: UPDATE_USER,
        user: user
    }
}

export function updateUserSuccess(user: User) : IUpdateUserSuccess {
    return {
        type: UPDATE_USER,
        user: user
    }
}