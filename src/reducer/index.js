import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import productReducer from './product';
import filterReducer from './filter';

const combinedReducer = combineReducers({
    routing: routerReducer,
    product: productReducer,
    filter: filterReducer,
});

export default combinedReducer;
