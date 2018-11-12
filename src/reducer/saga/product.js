import { call, put, takeEvery } from 'redux-saga/effects';

import { actions as productActions } from '../product';
import { loadProducts } from '../../services/product';

export function* loadProductsSaga(action) {
    
    // Set busy state while pulling products data via api call
    yield put({ type: productActions.setLoading });

    const response = yield call(loadProducts); // Call load products api

    if (response.ok) {
        const productsData = yield response.json();

        yield put({ type: productActions.setProducts, payload: productsData.products }); // Save loaded products
        yield put({ type: productActions.unsetLoading }); // Release loading state
    } else {
        yield put({ type: productActions.unsetLoading }); // Release loading state
    }
}

export default function* watchProductSaga() {
    yield takeEvery(productActions.loadProducts, loadProductsSaga);
}