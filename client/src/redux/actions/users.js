import * as type from '../types'

export function getUsers() {
    return {
        type: type.GET_USERS_REQUESTED,
    }
}

export function sortUsers(users) {
    return {
        type: type.SORT_USERS,
        payload: users
    }
}