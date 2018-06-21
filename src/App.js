import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";


import Navigation from './Components/Navigation/Navigation';
import TodoList from './Components/TodoList/TodoList';
import Calendar from './Components/Calendar/Calendar';

import  'react-big-calendar/lib/css/react-big-calendar.css';

import './App.css';

import todos from './todos'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation />
                    <Switch>
                        <Route path="/" component={TodoList} exact/>
                        <Route path="/calendar">
                            <Calendar todos={todos}/>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
