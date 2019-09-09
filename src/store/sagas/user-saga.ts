import { put, call } from 'redux-saga/effects';
import { getUsersService, updateUserService } from "../../services/user-service";
import { getUsers, IUpdateUser, updateUserSuccess } from "../actions/user-actions";

export function* fetchUsers(){
    const users = yield call(getUsersService);
    yield put(getUsers(users))
}

export function* updateUser(user:IUpdateUser){
    const changedUser = yield updateUserService(user.user);
    yield put(updateUserSuccess(changedUser));
}