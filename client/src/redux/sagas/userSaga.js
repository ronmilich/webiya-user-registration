import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects'

const apiUrl = 'https://localhost:5001/api/users';

const getUsersFromApi = () => {
    return axios.get(apiUrl)
        .then(response => response.data)
        .catch(error => { throw error })
}

function* fetchUsers(action) {
    try {
        const users = yield call(getUsersFromApi);
        yield put({ type: 'GET_USERS_SUCCESS', users: users });
    } catch (e) {
        yield put({ type: 'GET_USERS_FAILED', message: e.message });
    }
}

function* userSaga() {
    yield takeEvery('GET_USERS_REQUESTED', fetchUsers);
}

export default userSaga;