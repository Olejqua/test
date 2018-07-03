import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import FilterContainer from './containers/FilterContainer';
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
                    <Navigation />
                    <Switch>
                        <Route path="/" exact>
                            <div className="TodoList">
                                <Header />
                                <FilterContainer />
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
