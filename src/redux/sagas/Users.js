import { getUserData } from "api";
import { takeEvery } from "redux-saga/effects";
import { GET_USER_DATA } from "../constants/Users";

export function* workerSaga() {
    const userData = yield getUserData();
    return userData;
}

export function* watchFetchData() {
    yield takeEvery(GET_USER_DATA, workerSaga())
}