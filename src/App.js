import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';
import Todo from './Components/Todo/Todo';
import Form from './Components/Form/Form';
import Calendar from './Components/Calendar/Calendar';

import  'react-big-calendar/lib/css/react-big-calendar.css';
import './App.css';

import todolist from './todos';

class App extends Component {
    static propTypes = {
        title: PropTypes.string,
        todos: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        }))
    };
    constructor(props) {
        super(props);


    }

    updateStorage = (newTodos) => {
        this.setState({
            todos: newTodos

        })

        localStorage.removeItem("todos");
        localStorage.setItem("todos", JSON.stringify(newTodos));
    }
    //Записываем данные в LocalStorage
    componentWillMount() {
        const todosInStorage = localStorage.getItem("todos");

        if (todosInStorage) {
            this.setState({
                todos: JSON.parse(todosInStorage)
            })
        } else {
            localStorage.setItem("todos", JSON.stringify(todolist));
            this.setState({
                todos: todolist
            })
        }
    }
    //Checkbox completed
    changeStatus = (id) => {
        const newTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });

        this.updateStorage(newTodos);
    }
    //Удаление задач
    deleteTodo = (id) => {
        const newTodos = this.state.todos.filter(todo => todo.id !== id);

        this.updateStorage(newTodos);
    }
    //Присвоение id новым задачам
    nextId = () => {
        const {todos} = this.state;
        if (todos.length === 0) {
            return 1}
        else {
            return todos[todos.length-1].id+1
        }
    }
    //Добавление новой задачи
    addTodo = (title, description, importance, members, start, end) => {
        const {todos} = this.state;
        const todo = {
            id: this.nextId(),
            title,
            completed: false,
            description,
            importance,
            members,
            start,
            end
        };

        const newTodos = todos.concat(todo);

        this.updateStorage(newTodos);
    }
    //Исправление задачи
    editTodo = (id, title, description, importance, members, startDate, endDate) => {
        const {todos} = this.state;

        todos.forEach(todo => {
            if (todo.id === id) {
                todo.title = title;
                todo.description = description;
                todo.importance = importance;
                todo.members = members;
                todo.start = startDate;
                todo.end = endDate;
            }
        });
        this.updateStorage(todos);
    }

    //Значение сортировки
    filterTodos = (event) => {
        this.setState({filter: event.target.value})
    }
    //Отображение по сортировке
    filteredTodos = () => {
        const {todos, filter} = this.state;
        const day = new Date();

        Date.prototype.getWeek = function() {
            let oneJan = new Date(this.getFullYear(),0,1);
            let today = new Date(this.getFullYear(),this.getMonth(),this.getDate());
            let dayOfYear = ((today - oneJan + 86400000)/86400000);
            return Math.ceil(dayOfYear/7)
        };

        switch (filter) {
            case "all": {
                return todos
            }
            case "today": {
                return todos.filter((todo) => {
                    const todoStartDate = new Date(todo.start);

                    return todoStartDate.getDate() === day.getDate()
                })
            }
            case "tomorrow": {
                return todos.filter((todo) => {
                    const todoStartDate = new Date(todo.start);

                    return todoStartDate.getDate() === day.getDate()+1;
                })
            }
            case "onWeek": {
                return todos.filter((todo) => {
                    const todoStartDate = new Date(todo.start);

                    return todoStartDate.getWeek() === day.getWeek();
                })
            }
            case "onMonth": {
                return todos.filter((todo) => {
                    const todoStartDate = new Date(todo.start);

                    return todoStartDate.getMonth() === day.getMonth();
                })
            }
            default: {
                return todos
            }
        }
    }

    render() {
        const {title} = this.props;
        const {todos} = this.state;

        return (
            <BrowserRouter>
                <div>
                    <Navigation todos={todos} />
                    <Switch>
                        <Route path="/" exact>
                            <div className="TodoList">
                                <Header title={title} />
                                <div className="customSelect">Отсортировать
                                    <select onChange={this.filterTodos}>
                                        <option value="all"> Все</option>
                                        <option value="today"> Сегодня</option>
                                        <option value="tomorrow"> Завтра</option>
                                        <option value="onWeek"> На неделю</option>
                                        <option value="onMonth"> В этом месяце</option>
                                    </select>
                                </div>
                                <section className="todo-list">
                                    {this.filteredTodos().map(todo =>
                                        <Todo
                                            key={todo.id}
                                            changeStatus={this.changeStatus}
                                            deleteTodo={this.deleteTodo}
                                            editTodo={this.editTodo}
                                            toggleModal={this.toggleModal}
                                            {...todo}
                                        />)
                                    }
                                </section>
                                <Form addTodo={this.addTodo} />
                            </div>
                        </Route>
                        <Route path="/calendar">
                            <Calendar todos={todos}/>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

App.defaultProps = {
    title: "Список задач"
};

export default App;
