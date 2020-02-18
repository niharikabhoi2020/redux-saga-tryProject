import {put, takeEvery, delay} from 'redux-saga/effects';

function* change_Count() {
  try {
    console.log('11111111111111111111');
    yield delay(4000);
    yield put({type: 'COUNTER_CHANGE_SUCCESS', payload: 1});
  } catch (e) {
    console.log(e);
  }
}

export default function* CounterChangeAsync() {
  yield takeEvery('ChangeCount', change_Count);
}
