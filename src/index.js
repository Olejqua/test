import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers';
import todos from './todos';

const store = createStore(reducer, todos);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));registerServiceWorker();
