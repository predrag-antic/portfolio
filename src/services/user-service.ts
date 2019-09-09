import { User } from "../models/user";

export function getUsersService(){
    return fetch('http://localhost:3001/users')
    .then(response => response.json());
}

export function updateUserService(user: User) {
    const changedUser = {
        method: "put",
        body: JSON.stringify(user),
        headers: {'Content-Type':'application/json'}
    };
    return fetch(`http://localhost:3001/users/${user.id}`,changedUser)
    .then((response)=>response.json())
}