import { createAction, handleActions } from 'redux-actions';

export const actions = {
    loadProducts: 'product/LOAD_PRODUCTS',
    setLoading: 'product/SET_LOADING',
    unsetLoading: 'product/UNSET_LOADING',
    setProducts: 'product/SET_PRODUCTS',
};

export const loadProducts = createAction(actions.loadProducts); // Action for load products via api call
export const setLoading = createAction(actions.setLoading); // Set status as busy
export const unsetLoading = createAction(actions.unsetLoading); // Release busy status
export const setProducts = createAction(actions.setProducts); // Save loaded products to redux store

const defaultState = {
    isLoading: false,
    products: [],
};

export default handleActions({
    [actions.setLoading]: (state, action) => ({ ...state, isLoading: true }),
    [actions.setProducts]: (state, action) => ({ ...state, products: action.payload }),
    [actions.unsetLoading]: (state, action) => ({ ...state, isLoading: false }),
}, defaultState);

