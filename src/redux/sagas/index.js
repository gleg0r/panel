import { all } from 'redux-saga/effects';
import Auth from './Auth';
import { watchFetchData } from './Users';

export default function* rootSaga(getState) {
  yield all([
    Auth(),
    watchFetchData(),
  ]);
}
