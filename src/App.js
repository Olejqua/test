import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";


import NavigationContainer from './containers/NavigationContainer';
import Header from './Components/Header/Header';
import ListContainer from './containers/ListContainer';
import FormContainer from './containers/FormContainer';
import CalendarContainer from './containers/CalendarContainer';

import  'react-big-calendar/lib/css/react-big-calendar.css';
import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavigationContainer />
                    <Switch>
                        <Route path="/" exact>
                            <div className="TodoList">
                                <Header />
                                <ListContainer />
                                <FormContainer />
                            </div>
                        </Route>
                        <Route path="/calendar">
                            <CalendarContainer />
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
