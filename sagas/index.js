import {all} from 'redux-saga/effects';
import CounterChangeAsync from './saga';

export default function* rootSaga() {
  yield all([CounterChangeAsync()]);
}
