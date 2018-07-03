import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../reducers';

const initialState = {};

const middleware = [thunk];

function addPromiseThunkSupport(store) {
    const dispatch = store.dispatch;

    return action => {
        if (typeof action.then === 'function') {
            return action.then(dispatch);
        } else if (typeof action === 'function') {
            return action(dispatch);
        }

        return dispatch(action);
    };
}

const store = createStore(reducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

store.dispatch = addPromiseThunkSupport(store);
export default store;