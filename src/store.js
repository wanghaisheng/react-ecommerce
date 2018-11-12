import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';

import combinedReducer from './reducer';
import rootSaga from './reducer/saga';

export const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combinedReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;