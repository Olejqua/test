import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserhistory';

const history = createBrowserHistory();

import App from '../../App';
import Calendar from '../Calendar/Calendar';

export default () =>
    (<BrowserRouter>
        <div>
            <Route path="/" component={App}/>
            <Route path="calendar" component={Calendar}/>
        </div>
    </BrowserRouter>);