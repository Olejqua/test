import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';

import reducer from '../reducers';
import localStorage, { loadState } from '../middleware/local-storage';

const initialState = loadState();

const middleware = [thunk, promise, localStorage('todos'), logger];



const store = createStore(reducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);


export default store;