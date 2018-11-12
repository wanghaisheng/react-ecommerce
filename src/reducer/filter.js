import { createAction, handleActions } from 'redux-actions';

export const actions = {
    setFilterType: 'filter/SET_FILTER_TYPE',
    setFilterQuery: 'filter/SET_FILTER_QUERY',
};

export const setFilterType = createAction(actions.setFilterType);
export const setFilterQuery = createAction(actions.setFilterQuery);

const defaultState = {
    filterStarred: false,
    query: '',
};

export default handleActions({
    [actions.setFilterType]: (state, action) => ({ ...state, filterStarred: action.payload }),
    [actions.setFilterQuery]: (state, action) => ({ ...state, query: action.payload }),
}, defaultState);