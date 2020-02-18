import {createStore, applyMiddleware} from 'redux';
import counterReducer from '../reducers/countReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(counterReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;
