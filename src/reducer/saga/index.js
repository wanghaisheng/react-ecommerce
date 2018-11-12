import { all } from 'redux-saga/effects';

import watchProductSaga from './product';

export default function* rootSaga() {
    yield all([
        watchProductSaga(),
    ]);
}